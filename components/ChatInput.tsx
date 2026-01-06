
import React, { useState, useRef, useEffect } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled }) => {
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (input.trim() && !disabled) {
      onSendMessage(input.trim());
      setInput('');
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [input]);

  return (
    <div className="fixed bottom-0 left-0 right-0 p-6 pb-8 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent z-50">
      <style>{`
        @keyframes border-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .animate-border-shimmer {
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0) 100%);
          background-size: 200% 100%;
          animation: border-shimmer 3s linear infinite;
        }
      `}</style>
      
      <div className="max-w-screen-md mx-auto relative group">
        {/* Animated Gradient Border - Visible only on focus-within */}
        <div className="absolute -inset-[1px] rounded-[26px] opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 animate-border-shimmer blur-[1px]"></div>
        
        {/* Static Border (Subtle fallback) */}
        <div className="absolute -inset-[1px] rounded-[26px] bg-white/[0.08] opacity-100 group-focus-within:opacity-0 transition-opacity duration-300"></div>

        <form 
          onSubmit={handleSubmit}
          className="relative flex items-end gap-3 p-2.5 rounded-[24px] bg-[#0A0A0A]/80 backdrop-blur-2xl transition-all duration-300"
        >
          <textarea
            ref={textareaRef}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about something..."
            disabled={disabled}
            className="flex-1 bg-transparent border-none outline-none focus:ring-0 focus:outline-none text-[15px] py-3 px-4 resize-none max-h-[120px] text-[#F5F5F7] placeholder-[#8E8E93]/50 placeholder:font-normal leading-relaxed"
          />
          <button
            type="submit"
            disabled={!input.trim() || disabled}
            className="mb-1 p-2.5 rounded-2xl bg-white text-black disabled:bg-white/5 disabled:text-white/20 transition-all duration-300 shadow-lg shadow-white/5 hover:scale-105 active:scale-95 flex-shrink-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInput;
