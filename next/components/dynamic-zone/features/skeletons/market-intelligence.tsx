'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IconTrendingUp, IconTrendingDown, IconAlertTriangle, IconTarget } from '@tabler/icons-react';

interface MarketIntelligenceSkeletonProps {
  subtitle?: string;
  marketSignals?: Array<{ id: string; label: string; trend: string; value: string; color: string }>;
}

export function MarketIntelligenceSkeleton({
  subtitle = "Advanced trend tracking and signal detection",
  marketSignals: propMarketSignals
}: MarketIntelligenceSkeletonProps) {
  const [activeSignal, setActiveSignal] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const marketSignals = propMarketSignals || [
    { id: 'tech', label: 'Technology', trend: 'up', value: '+12.4%', color: 'green' },
    { id: 'finance', label: 'Finance', trend: 'down', value: '-3.2%', color: 'red' },
    { id: 'energy', label: 'Energy', trend: 'up', value: '+8.7%', color: 'green' },
    { id: 'healthcare', label: 'Healthcare', trend: 'up', value: '+5.1%', color: 'green' },
    { id: 'retail', label: 'Retail', trend: 'down', value: '-1.8%', color: 'red' },
    { id: 'manufacturing', label: 'Manufacturing', trend: 'up', value: '+6.3%', color: 'green' },
  ];

  const radarData = [
    { axis: 'Market Cap', value: 85, label: 'Market Cap' },
    { axis: 'Growth', value: 72, label: 'Growth' },
    { axis: 'Volatility', value: 45, label: 'Volatility' },
    { axis: 'Liquidity', value: 68, label: 'Liquidity' },
    { axis: 'Innovation', value: 91, label: 'Innovation' },
    { axis: 'Risk', value: 38, label: 'Risk' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnalyzing(true);
      setTimeout(() => {
        setActiveSignal((prev) => (prev + 1) % marketSignals.length);
        setIsAnalyzing(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, [marketSignals.length]);

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
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm0 0c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Header */}
      <div className="relative z-10 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <IconTarget className="w-6 h-6 text-[#F8F5E4]" />
          <h3 className="text-white font-semibold text-lg">Market Intelligence</h3>
        </div>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>

      {/* Radar Chart Visualization */}
      <div className="relative z-10 mb-6">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 h-32 relative">
          <div className="absolute inset-4">
            {/* Radar Chart Grid */}
            <svg className="w-full h-full" viewBox="0 0 100 100">
              {/* Grid Circles */}
              {[20, 40, 60, 80].map((radius, i) => (
                <circle
                  key={i}
                  cx="50"
                  cy="50"
                  r={radius}
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="0.5"
                />
              ))}

              {/* Radar Lines */}
              {radarData.map((item, i) => {
                const angle = (i * 360) / radarData.length;
                const x = 50 + Math.cos((angle - 90) * Math.PI / 180) * 40;
                const y = 50 + Math.sin((angle - 90) * Math.PI / 180) * 40;
                return (
                  <line
                    key={i}
                    x1="50"
                    y1="50"
                    x2={x}
                    y2={y}
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="0.5"
                  />
                );
              })}

              {/* Data Points */}
              {radarData.map((item, i) => {
                const angle = (i * 360) / radarData.length;
                const radius = (item.value / 100) * 40;
                const x = 50 + Math.cos((angle - 90) * Math.PI / 180) * radius;
                const y = 50 + Math.sin((angle - 90) * Math.PI / 180) * radius;
                return (
                  <motion.circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="2"
                    fill="#D4CFB8"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  />
                );
              })}

              {/* Connecting Lines */}
              <motion.polygon
                points={radarData.map((item, i) => {
                  const angle = (i * 360) / radarData.length;
                  const radius = (item.value / 100) * 40;
                  const x = 50 + Math.cos((angle - 90) * Math.PI / 180) * radius;
                  const y = 50 + Math.sin((angle - 90) * Math.PI / 180) * radius;
                  return `${x},${y}`;
                }).join(' ')}
                fill="rgba(212, 207, 184, 0.2)"
                stroke="#D4CFB8"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Market Signals */}
      <div className="relative z-10">
        <div className="grid grid-cols-2 gap-2">
          {marketSignals.map((signal, index) => {
            const isActive = index === activeSignal;
            const IconComponent = signal.trend === 'up' ? IconTrendingUp : IconTrendingDown;

            return (
              <motion.div
                key={signal.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: isActive ? 1 : 0.6,
                  scale: isActive ? 1 : 0.95,
                  backgroundColor: isActive ? 'rgba(212, 207, 184, 0.1)' : 'rgba(255, 255, 255, 0.05)'
                }}
                transition={{ duration: 0.3 }}
                className={`p-3 rounded-lg border transition-all ${isActive ? 'border-[#D4CFB8]/30' : 'border-white/10'
                  }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white text-xs font-medium">{signal.label}</span>
                  <IconComponent className={`w-3 h-3 ${signal.trend === 'up' ? 'text-green-400' : 'text-red-400'
                    }`} />
                </div>
                <div className={`text-sm font-semibold ${signal.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                  {signal.value}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Analysis Status */}
      <div className="relative z-10 mt-4 flex items-center gap-2">
        {isAnalyzing && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-4 h-4 border-2 border-[#D4CFB8] border-t-transparent rounded-full"
          />
        )}
        <IconAlertTriangle className="w-4 h-4 text-yellow-400" />
        <span className="text-gray-400 text-xs">
          {isAnalyzing ? 'Analyzing market signals...' : 'Real-time monitoring active'}
        </span>
      </div>
    </div>
  );
}
