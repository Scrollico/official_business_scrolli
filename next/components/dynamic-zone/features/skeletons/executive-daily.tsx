'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IconPlayerPlay, IconDownload, IconCalendar, IconClock, IconChartBar, IconRobot, IconClipboardList } from '@tabler/icons-react';

export function ExecutiveDailySkeleton() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const generationTimer = setInterval(() => {
      setIsGenerating(true);
      setTimeout(() => setIsGenerating(false), 2000);
    }, 8000);
    return () => clearInterval(generationTimer);
  }, []);

  const briefingCards = [
    { title: "Market Overview", status: "ready", icon: IconChartBar },
    { title: "AI Insights", status: isGenerating ? "generating" : "ready", icon: IconRobot },
    { title: "Executive Summary", status: "ready", icon: IconClipboardList },
  ];

  return (
    <div className="p-6 h-full relative overflow-hidden bg-[rgba(75,85,99,0.40)] rounded-lg border border-[rgba(255,255,255,0.10)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
      {/* Vignette Effect */}
      <div className="absolute inset-0 rounded-lg" style={{
        background: `
          radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.3) 100%),
          linear-gradient(135deg, rgba(255,255,255,0.02) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)
        `,
        boxShadow: `
          inset 0 0 20px rgba(0,0,0,0.2),
          inset 0 0 40px rgba(0,0,0,0.1),
          0 0 20px rgba(0,0,0,0.3)
        `
      }} />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div>
          <div className="flex items-center gap-2 text-blue-400 text-sm mb-1">
            <IconCalendar className="w-4 h-4" />
            <span>{currentTime.toLocaleDateString()}</span>
          </div>
          <h3 className="text-white font-semibold text-lg">Executive Daily</h3>
        </div>
        <div className="flex items-center gap-2 text-green-400 text-sm">
            <IconClock className="w-4 h-4" />
          <span>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>

      {/* Briefing Cards */}
      <div className="grid grid-cols-1 gap-3 mb-6 relative z-10">
        {briefingCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <card.icon className="w-6 h-6 text-blue-400" />
                <div>
                  <h4 className="text-white font-medium text-sm">{card.title}</h4>
                  <p className="text-gray-400 text-xs">AI-curated insights</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {card.status === 'generating' ? (
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                    <span className="text-yellow-400 text-xs">Generating...</span>
                  </div>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors"
                  >
                    <IconDownload className="w-4 h-4 text-blue-400" />
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Podcast Section */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 relative z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <IconPlayerPlay className="w-4 h-4 text-blue-400" />
            <span className="text-white font-medium text-sm">Daily Briefing Podcast</span>
          </div>
          <span className="text-gray-400 text-xs">12:34</span>
        </div>
        
        {/* Waveform Visualization */}
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 20 }).map((_, i) => {
            // Use consistent values based on index to avoid hydration mismatch
            const baseHeight = 10 + (i % 3) * 5 + (i % 2) * 3;
            const heights = [
              `${baseHeight}px`,
              `${baseHeight + 8}px`,
              `${baseHeight}px`
            ];
            
            return (
              <motion.div
                key={i}
                className="bg-blue-400 rounded-sm"
                style={{
                  width: '3px',
                  height: heights[0],
                }}
                animate={{
                  height: heights,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            );
          })}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-xs">Personalized for your industry</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded-md text-white text-xs font-medium transition-colors"
          >
            Play
          </motion.button>
        </div>
      </div>

      {/* Export Section */}
      <div className="mt-4 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg text-white text-sm font-medium transition-all duration-300"
        >
          <IconDownload className="w-4 h-4" />
          Export Briefing
        </motion.button>
      </div>
    </div>
  );
}
