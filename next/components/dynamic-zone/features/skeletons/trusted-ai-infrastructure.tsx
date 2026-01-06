'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IconShield, IconCheck, IconAlertTriangle, IconLock, IconDatabase, IconBolt } from '@tabler/icons-react';
import RAGPipelineFlow from '../../../ui/rag-pipeline-flow';

export function TrustedAIInfrastructureSkeleton() {
  const [securityNodes, setSecurityNodes] = useState([
    { id: 1, x: 20, y: 30, type: 'shield', status: 'active', label: 'RAG Systems' },
    { id: 2, x: 80, y: 25, type: 'check', status: 'active', label: 'Verification' },
    { id: 3, x: 50, y: 60, type: 'lock', status: 'active', label: 'Encryption' },
    { id: 4, x: 30, y: 80, type: 'database', status: 'active', label: 'Data Integrity' },
    { id: 5, x: 70, y: 75, type: 'alert', status: 'monitoring', label: 'Anti-Disinfo' },
    { id: 6, x: 50, y: 20, type: 'bolt', status: 'active', label: 'Performance' },
  ]);

  const [systemHealth, setSystemHealth] = useState({
    reliability: 99.7,
    security: 100,
    performance: 98.2,
    verification: 99.9
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSystemHealth(prev => ({
        reliability: Math.min(100, prev.reliability + (Math.random() - 0.5) * 0.2),
        security: 100,
        performance: Math.min(100, prev.performance + (Math.random() - 0.5) * 0.5),
        verification: Math.min(100, prev.verification + (Math.random() - 0.5) * 0.1)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getNodeIcon = (type: string) => {
    const icons = {
      shield: IconShield,
      check: IconCheck,
      lock: IconLock,
      database: IconDatabase,
      alert: IconAlertTriangle,
      bolt: IconBolt
    };
    return icons[type as keyof typeof icons] || IconShield;
  };

  const getNodeColor = (status: string) => {
    const colors = {
      active: 'from-green-400 to-green-600',
      monitoring: 'from-yellow-400 to-yellow-600',
      warning: 'from-red-400 to-red-600'
    };
    return colors[status as keyof typeof colors] || colors.active;
  };

  return (
    <div className="p-6 h-full relative overflow-hidden bg-[rgba(75,85,99,0.40)] border border-[rgba(255,255,255,0.10)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
      {/* Background Security Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      {/* Header */}

      {/* RAG Pipeline Flow */}
      <div className="relative mb-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-4">
          <IconDatabase className="w-4 h-4 text-blue-400" />
          <span className="text-white text-sm font-medium">RAG Processing Pipeline</span>
        </div>
        
        <div className="flex justify-center">
          <RAGPipelineFlow 
            title="RAG-based AI Intelligence Pipeline"
            circleText="RAG"
            badgeTexts={{
              first: "INGEST",
              second: "PROCESS", 
              third: "VECTOR",
              fourth: "GENERATE"
            }}
            buttonTexts={{
              first: "Verified",
              second: "Intelligence"
            }}
            lightColor="#3B82F6"
            className="scale-150 h-[420px]"
          />
        </div>
      </div>

      {/* System Health Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-4 relative z-10">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white text-sm font-medium">Reliability</span>
            <IconCheck className="w-4 h-4 text-green-400" />
          </div>
          <div className="text-2xl font-bold text-green-400">{systemHealth.reliability.toFixed(1)}%</div>
          <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
            <motion.div
              className="bg-green-400 h-1 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${systemHealth.reliability}%` }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white text-sm font-medium">Security</span>
            <IconShield className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl font-bold text-blue-400">{systemHealth.security}%</div>
          <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
            <motion.div
              className="bg-blue-400 h-1 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${systemHealth.security}%` }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>

      {/* Anti-Disinformation Status */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 mb-4 relative z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <IconAlertTriangle className="w-4 h-4 text-yellow-400" />
            <span className="text-white text-sm font-medium">Anti-Disinformation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-xs">Active</span>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-yellow-400 text-lg font-bold">0</div>
            <div className="text-gray-400 text-xs">False Positives</div>
          </div>
          <div>
            <div className="text-green-400 text-lg font-bold">99.9%</div>
            <div className="text-gray-400 text-xs">Accuracy</div>
          </div>
          <div>
            <div className="text-blue-400 text-lg font-bold">24/7</div>
            <div className="text-gray-400 text-xs">Monitoring</div>
          </div>
        </div>
      </div>

      {/* Verification Badge */}
      <div className="flex justify-center relative z-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg"
        >
          <IconCheck className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-medium">Verified Intelligence</span>
        </motion.div>
      </div>
    </div>
  );
}
