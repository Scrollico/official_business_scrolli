'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IconBrain, IconFileText, IconMail, IconBrandLinkedin, IconPlayerPlay } from '@tabler/icons-react';

interface AIContentStudioSkeletonProps {
  contentTypes?: Array<{ id: string; label: string; icon?: any }>;
  channels?: Array<{ id: string; label: string; icon?: any }>;
  contentOptions?: Array<{ id: string; label: string; icon?: any }>;
}

export function AIContentStudioSkeleton({ 
  contentTypes: propContentTypes,
  channels: propChannels,
  contentOptions: propContentOptions
}: AIContentStudioSkeletonProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedText, setGeneratedText] = useState('');
  const [selectedType, setSelectedType] = useState('article');
  const [selectedChannel, setSelectedChannel] = useState('linkedin');
  const [selectedContent, setSelectedContent] = useState('generate');

  const contentTypes = propContentTypes || [
    { id: 'article', label: 'Article', icon: IconFileText },
    { id: 'newsletter', label: 'Newsletter', icon: IconMail },
  ];

  const channels = propChannels || [
    { id: 'linkedin', label: 'LinkedIn', icon: IconBrandLinkedin },
    { id: 'email', label: 'Email', icon: IconMail },
  ];

  const contentOptions = propContentOptions || [
    { id: 'generate', label: 'Generate Content', icon: IconPlayerPlay },
    { id: 'select-articles', label: 'Select Articles', icon: IconFileText },
  ];

  const sampleContent = {
    'article-linkedin-generate': `The AI Revolution: What Executives Need to Know
Artificial Intelligence is no longer a future concept—it's reshaping industries today. As we navigate this transformation, three key trends are emerging:
1. **Enterprise Adoption Acceleration**: Companies are moving beyond pilot projects to full-scale AI implementation, with 73% of Fortune 500 companies now having active AI initiatives.
2. **Regulatory Landscape Evolution**: New frameworks are emerging to govern AI deployment, requiring proactive compliance strategies from business leaders.
3. **Human-AI Collaboration Models**: The most successful organizations aren't replacing humans with AI—they're creating new collaborative workflows that amplify human capabilities.
The question isn't whether AI will transform your industry, but whether you'll be leading that transformation or reacting to it.
#AI #BusinessStrategy #Innovation`,
    'article-email-generate': `Subject: Executive Brief: AI Market Intelligence Update
Dear Executive Team,
Our latest market analysis reveals significant developments in the AI landscape that directly impact our strategic positioning:
**Market Momentum**
• AI investment reached $50B in Q4, representing 34% year-over-year growth
• Enterprise adoption rates have accelerated by 40% compared to previous quarters
• Regulatory frameworks are stabilizing, reducing implementation uncertainty
**Strategic Implications**
The convergence of these factors creates a window of opportunity for proactive AI integration. Companies that act now will establish competitive advantages that compound over time.
**Recommended Actions**
1. Accelerate pilot program timelines
2. Invest in AI talent acquisition
3. Develop compliance frameworks
I'll be presenting a detailed strategic roadmap at next week's board meeting.
Best regards,
[Your Name]`,
    'newsletter-linkedin-generate': `Weekly AI Intelligence Roundup
This week's most significant developments in artificial intelligence:
**Breaking: New AI Regulation Framework**
The EU's updated AI Act provides clarity for enterprise deployment. Key takeaways for business leaders:
• Risk-based classification system
• Transparent AI decision-making requirements
• Enhanced data protection measures
**Market Watch**
• Microsoft's AI revenue grew 49% this quarter
• OpenAI's enterprise adoption reached 1M+ companies
• Google's Gemini integration shows 30% productivity gains
**Strategic Insight**
The AI market is consolidating around platform players. For mid-market companies, partnering with established AI providers may be more strategic than building in-house capabilities.
What's your take on the evolving AI landscape? Share your thoughts below.
#AI #BusinessIntelligence #Innovation`,
    'newsletter-email-generate': `Weekly AI Intelligence Newsletter
Executive Team,
Here are the key developments in AI that matter for our strategic planning:
**Market Trends**
• AI investment reached $50B in Q4, representing 34% year-over-year growth
• Enterprise adoption rates have accelerated by 40% compared to previous quarters
• Regulatory frameworks are stabilizing, reducing implementation uncertainty
**Industry Insights**
• Microsoft's AI revenue grew 49% this quarter
• OpenAI's enterprise adoption reached 1M+ companies
• Google's Gemini integration shows 30% productivity gains
**Strategic Implications**
The AI market is consolidating around platform players. For mid-market companies, partnering with established AI providers may be more strategic than building in-house capabilities.
**Recommended Actions**
1. Accelerate pilot program timelines
2. Invest in AI talent acquisition
3. Develop compliance frameworks
I'll be presenting a detailed strategic roadmap at next week's board meeting.
Best regards,
[Your Name]`,
    'select-articles-linkedin': `📚 Selected Articles for Your Reading List
**1. "AI's Impact on Corporate Strategy"** (3 min read)
Quick insights on how AI is reshaping executive decision-making processes.
**2. "Market Intelligence Trends 2024"** (4 min read)  
Essential data points every business leader should know about market intelligence.
**3. "Building AI-Ready Organizations"** (5 min read)
Practical steps for preparing your company for the AI transformation.
**4. "Competitive Intelligence Best Practices"** (3 min read)
How to leverage intelligence for strategic advantage.
**5. "Executive Briefing: Q4 Market Analysis"** (6 min read)
Comprehensive overview of market movements and strategic implications.
Each article has been curated for executive relevance and time efficiency.`,
    'select-articles-email': `Selected Articles for Executive Review
Dear Executive Team,
I've curated these essential articles for your strategic reading:
**Priority Reading (This Week):**
• "AI's Impact on Corporate Strategy" - 3 min read
• "Market Intelligence Trends 2024" - 4 min read
**Strategic Context:**
• "Building AI-Ready Organizations" - 5 min read
• "Competitive Intelligence Best Practices" - 3 min read
**Market Analysis:**
• "Executive Briefing: Q4 Market Analysis" - 6 min read
Each article has been selected for executive relevance and strategic value. All reading times are optimized for busy schedules.
Best regards,
[Your Name]`
  };

  const generateContent = () => {
    if (isGenerating) return;
    
    setIsGenerating(true);
    setGeneratedText('');
    
    let contentKey = '';
    if (selectedContent === 'select-articles') {
      contentKey = `select-articles-${selectedChannel}`;
    } else {
      contentKey = `${selectedType}-${selectedChannel}-generate`;
    }
    
    const content = sampleContent[contentKey as keyof typeof sampleContent] || sampleContent['article-linkedin-generate'];
    
    let currentText = '';
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index < content.length) {
        currentText += content[index];
        setGeneratedText(currentText);
        index++;
      } else {
        clearInterval(typeInterval);
        setIsGenerating(false);
      }
    }, 20);
  };

  return (
    <div className="p-4 h-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg flex flex-col border border-white/10">
      <div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.5) 100%),
            linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 40%, rgba(0,0,0,0.3) 100%)
          `,
          boxShadow: `
            inset 0 0 30px rgba(0,0,0,0.4),
            inset 0 0 60px rgba(0,0,0,0.3),
            0 0 25px rgba(0,0,0,0.5)
          `
        }}
      />
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm0 0c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 mb-4">
        <div className="flex items-center gap-3 mb-1">
          <IconBrain className="w-5 h-5 text-gray-300" />
          <h3 className="text-white font-semibold text-base">AI Content Studio</h3>
        </div>
        <p className="text-gray-400 text-xs">Generate executive-grade content</p>
      </div>

      {/* Content Type Selection */}
      <div className="relative z-10 mb-3">
        <label className="text-gray-300 text-xs font-medium mb-1 block">Content Type</label>
        <div className="flex gap-2">
          {contentTypes.map((type) => {
            const IconComponent = type.icon || IconFileText;
            return (
              <motion.button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-1 px-3 py-1.5 rounded text-xs font-medium transition-all flex-1 ${
                  selectedType === type.id
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'bg-white/5 text-gray-400 hover:bg-white/8 border border-white/10'
                }`}
              >
                <IconComponent className="w-3 h-3" />
                {type.label}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Channel Selection */}
      <div className="relative z-10 mb-3">
        <label className="text-gray-300 text-xs font-medium mb-1 block">Channel</label>
        <div className="flex gap-2">
          {channels.map((channel) => {
            const IconComponent = channel.icon || IconBrandLinkedin;
            return (
              <motion.button
                key={channel.id}
                onClick={() => setSelectedChannel(channel.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-1 px-3 py-1.5 rounded text-xs font-medium transition-all flex-1 ${
                  selectedChannel === channel.id
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'bg-white/5 text-gray-400 hover:bg-white/8 border border-white/10'
                }`}
              >
                <IconComponent className="w-3 h-3" />
                {channel.label}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Choose Your Content */}
      <div className="relative z-10 mb-3">
        <label className="text-gray-300 text-xs font-medium mb-1 block">Choose Your Content</label>
        <div className="flex gap-2">
          {contentOptions.map((option) => {
            const IconComponent = option.icon || IconPlayerPlay;
            return (
              <motion.button
                key={option.id}
                onClick={() => setSelectedContent(option.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-1 px-3 py-1.5 rounded text-xs font-medium transition-all flex-1 ${
                  selectedContent === option.id
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'bg-white/5 text-gray-400 hover:bg-white/8 border border-white/10'
                }`}
              >
                <IconComponent className="w-3 h-3" />
                {option.label}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Generate Button */}
      <div className="relative z-10 mb-3">
        <motion.button
          onClick={generateContent}
          disabled={isGenerating}
          whileHover={{ scale: isGenerating ? 1 : 1.02 }}
          whileTap={{ scale: isGenerating ? 1 : 0.98 }}
          className={`w-full flex items-center justify-center gap-2 px-3 py-2 rounded text-sm font-medium transition-all ${
            isGenerating
              ? 'bg-gray-700/50 text-gray-400 cursor-not-allowed'
              : 'bg-white/10 text-white hover:bg-white/15 border border-white/20'
          }`}
        >
          {isGenerating ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-3 h-3 border-2 border-gray-400 border-t-transparent rounded-full"
              />
              Generating...
            </>
          ) : (
            <>
              <IconPlayerPlay className="w-3 h-3" />
              {selectedContent === 'select-articles' ? 'Select Articles' : 'Generate Content'}
            </>
          )}
        </motion.button>
      </div>

      {/* Content Generation Area */}
      <div className="relative z-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded p-3 flex-1 min-h-0">
        <div className="text-gray-300 text-xs leading-relaxed whitespace-pre-wrap h-full overflow-y-auto">
          {generatedText}
          {isGenerating && (
            <>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-1 h-3 bg-gray-300 ml-1"
              />
              <span className="ml-2 text-gray-400">Generating...</span>
            </>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      {generatedText && (
        <div className="relative z-10 mt-3 flex gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 bg-white/10 hover:bg-white/15 border border-white/20 text-white py-1.5 px-3 rounded text-xs font-medium transition-colors"
          >
            Export
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 bg-white/10 hover:bg-white/15 border border-white/20 text-white py-1.5 px-3 rounded text-xs font-medium transition-colors"
          >
            Share
          </motion.button>
        </div>
      )}
    </div>
  );
}
