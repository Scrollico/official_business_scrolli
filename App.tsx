
import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import MessageList from './components/MessageList';
import ChatInput from './components/ChatInput';
import Onboarding from './components/Onboarding';
import { Message } from './types';
import { INITIAL_GREETING } from './constants';
import { generateAssistantResponse } from './services/geminiService';

const App: React.FC = () => {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'initial',
      role: 'assistant',
      content: INITIAL_GREETING,
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  // Check if user has already seen onboarding in this session
  useEffect(() => {
    const skip = sessionStorage.getItem('skipOnboarding');
    if (skip) setShowOnboarding(false);
  }, []);

  const handleEnter = () => {
    setShowOnboarding(false);
    sessionStorage.setItem('skipOnboarding', 'true');
  };

  const handleFeedback = (messageId: string, type: 'up' | 'down') => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId 
        ? { ...msg, feedback: msg.feedback === type ? undefined : type }
        : msg
    ));
  };

  const handleSendMessage = useCallback(async (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const history = messages
        .filter(m => m.id !== 'initial')
        .map(m => ({
          role: m.role === 'user' ? 'user' : 'model' as 'user' | 'model',
          parts: [{ text: m.content }]
        }));

      const response = await generateAssistantResponse(text, history);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.text,
        timestamp: new Date(),
        sources: response.sources
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I encountered a strategic friction while processing that request. Please try again or rephrase.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  }, [messages]);

  return (
    <>
      {showOnboarding && <Onboarding onEnter={handleEnter} />}
      <div className="flex flex-col h-full max-w-screen-md mx-auto relative bg-[#0A0A0A]">
        <Header />
        <MessageList 
          messages={messages} 
          isTyping={isTyping} 
          onFeedback={handleFeedback}
        />
        <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
        
        {/* Decorative Blur Elements */}
        <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0A0A0A] to-transparent pointer-events-none z-40"></div>
      </div>
    </>
  );
};

export default App;
