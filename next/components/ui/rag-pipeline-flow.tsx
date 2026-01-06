"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Brain, Search, FileText, Shield, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface RAGPipelineFlowProps {
  className?: string;
  circleText?: string;
  badgeTexts?: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  buttonTexts?: {
    first: string;
    second: string;
  };
  title?: string;
  lightColor?: string;
}

const RAGPipelineFlow = ({
  className,
  circleText,
  badgeTexts,
  buttonTexts,
  title,
  lightColor,
}: RAGPipelineFlowProps) => {
  return (
    <div
      className={cn(
        "relative flex h-[280px] w-full max-w-[450px] flex-col items-center",
        className
      )}
    >
      {/* SVG Paths for RAG Pipeline */}
      <svg
        className="h-full sm:w-full text-[#F8F5E4]"
        width="100%"
        height="100%"
        viewBox="0 -40 220 160"
      >
        <g
          stroke="currentColor"
          fill="none"
          strokeWidth="0.4"
          strokeDasharray="100 100"
          pathLength="100"
        >
          {/* Simple straight line flow */}
          <path d="M 40 -10 v 15 q 0 5 5 5 h 20 q 5 0 5 5 v 10" />
          <path d="M 80 -10 v 15 q 0 5 5 5 h 20 q 5 0 5 5 v 10" />
          <path d="M 120 -10 v 15 q 0 5 5 5 h 20 q 5 0 5 5 v 10" />
          <path d="M 160 -10 v 15 q 0 5 5 5 h 20 q 5 0 5 5 v 15" />
          {/* Animation For Path Starting */}
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1"
          />
        </g>

        {/* Blue Lights moving through RAG stages */}
        <g mask="url(#rag-mask-1)">
          <circle
            className="rag-pipeline rag-light-1"
            cx="0"
            cy="0"
            r="12"
            fill="url(#rag-blue-grad)"
          />
        </g>
        <g mask="url(#rag-mask-2)">
          <circle
            className="rag-pipeline rag-light-2"
            cx="0"
            cy="0"
            r="12"
            fill="url(#rag-blue-grad)"
          />
        </g>
        <g mask="url(#rag-mask-3)">
          <circle
            className="rag-pipeline rag-light-3"
            cx="0"
            cy="0"
            r="12"
            fill="url(#rag-blue-grad)"
          />
        </g>
        <g mask="url(#rag-mask-4)">
          <circle
            className="rag-pipeline rag-light-4"
            cx="0"
            cy="0"
            r="12"
            fill="url(#rag-blue-grad)"
          />
        </g>

        {/* RAG Pipeline Stage Buttons */}
        <g stroke="currentColor" fill="none" strokeWidth="0.4">
          {/* INGEST */}
          <g>
            <rect
              fill="#18181B"
              x="25"
              y="-20"
              width="30"
              height="10"
              rx="5"
            ></rect>
            <DatabaseIcon x="28" y="-17.5"></DatabaseIcon>
            <text
              x="42"
              y="-15"
              fill="white"
              stroke="none"
              fontSize="3.2"
              fontWeight="500"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {badgeTexts?.first || "INGEST"}
            </text>
          </g>

          {/* PROCESS */}
          <g>
            <rect
              fill="#18181B"
              x="65"
              y="-20"
              width="30"
              height="10"
              rx="5"
            ></rect>
            <FileTextIcon x="68" y="-17.5"></FileTextIcon>
            <text
              x="82"
              y="-15"
              fill="white"
              stroke="none"
              fontSize="3.2"
              fontWeight="500"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {badgeTexts?.second || "PROCESS"}
            </text>
          </g>

          {/* VECTOR */}
          <g>
            <rect
              fill="#18181B"
              x="105"
              y="-20"
              width="30"
              height="10"
              rx="5"
            ></rect>
            <SearchIcon x="108" y="-17.5"></SearchIcon>
            <text
              x="122"
              y="-15"
              fill="white"
              stroke="none"
              fontSize="3.2"
              fontWeight="500"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {badgeTexts?.third || "VECTOR"}
            </text>
          </g>

          {/* GENERATE */}
          <g>
            <rect
              fill="#18181B"
              x="145"
              y="-20"
              width="30"
              height="10"
              rx="5"
            ></rect>
            <BrainIcon x="148" y="-17.5"></BrainIcon>
            <text
              x="162"
              y="-15"
              fill="white"
              stroke="none"
              fontSize="3.2"
              fontWeight="500"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {badgeTexts?.fourth || "GENERATE"}
            </text>
          </g>
        </g>

        <defs>
          {/* 1 - INGEST */}
          <mask id="rag-mask-1">
            <path
              d="M 40 -10 v 15 q 0 5 5 5 h 20 q 5 0 5 5 v 25"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* 2 - PROCESS */}
          <mask id="rag-mask-2">
            <path
              d="M 80 -10 v 15 q 0 5 5 5 h 20 q 5 0 5 5 v 25"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* 3 - VECTOR */}
          <mask id="rag-mask-3">
            <path
              d="M 120 -10 v 15 q 0 5 5 5 h 20 q 5 0 5 5 v 25"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* 4 - GENERATE */}
          <mask id="rag-mask-4">
            <path
              d="M 160 -10 v 15 q 0 5 5 5 h 20 q 5 0 5 5 v 15"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>

          {/* Blue Gradient */}
          <radialGradient id="rag-blue-grad" fx="1">
            <stop offset="0%" stopColor={lightColor || "#D4CFB8"} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>

      {/* Main RAG Pipeline Box */}
      <div className="absolute bottom-15 flex w-full flex-col items-center">
        {/* Bottom shadow */}
        <div className="absolute -bottom-4 h-[100px] w-[62%] rounded-lg bg-[#D4CFB8]/20" />

        {/* Box title */}
        <div className="absolute -top-3 z-20 flex items-center justify-center rounded-lg border border-white/20 bg-[#101112] px-2 py-1 sm:-top-4 sm:py-1.5" style={{
          boxShadow: `
            0 0 10px rgba(255, 255, 255, 0.3),
            0 0 20px rgba(255, 255, 255, 0.1),
            inset 0 0 10px rgba(255, 255, 255, 0.1)
          `
        }}>
          <Brain className="size-3 text-white" />
          <span className="ml-2 text-[10px] text-white">
            {title ? title : "RAG-based AI Intelligence Pipeline"}
          </span>
        </div>

        {/* Box outer circle */}
        <div className="absolute -bottom-8 z-30 grid h-[60px] w-[60px] place-items-center rounded-full border-t border-[#D4CFB8] bg-[#141516] font-semibold text-xs text-[#D4CFB8]">
          {circleText ? circleText : "RAG"}
        </div>

        {/* Box content */}
        <div className="relative z-10 flex h-[180px] w-[400px] items-center justify-center overflow-hidden rounded-lg border border-[#D4CFB8]/30 bg-background shadow-md">

          {/* Animated Circles */}
          <motion.div
            className="absolute -bottom-14 h-[100px] w-[100px] rounded-full border-t border-[#D4CFB8]/20 bg-[#D4CFB8]/5"
            animate={{
              scale: [0.98, 1.02, 0.98, 1, 1, 1, 1, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-20 h-[145px] w-[145px] rounded-full border-t border-[#D4CFB8]/20 bg-[#D4CFB8]/5"
            animate={{
              scale: [1, 1, 1, 0.98, 1.02, 0.98, 1, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-[100px] h-[190px] w-[190px] rounded-full border-t border-[#D4CFB8]/20 bg-[#D4CFB8]/5"
            animate={{
              scale: [1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-[120px] h-[235px] w-[235px] rounded-full border-t border-[#D4CFB8]/20 bg-[#D4CFB8]/5"
            animate={{
              scale: [1, 1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
};

export default RAGPipelineFlow;

// Custom Icons for RAG Pipeline
const DatabaseIcon = ({ x = "0", y = "0" }: { x: string; y: string }) => {
  return (
    <svg
      x={x}
      y={y}
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
};

const FileTextIcon = ({ x = "0", y = "0" }: { x: string; y: string }) => {
  return (
    <svg
      x={x}
      y={y}
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10,9 9,9 8,9" />
    </svg>
  );
};

const SearchIcon = ({ x = "0", y = "0" }: { x: string; y: string }) => {
  return (
    <svg
      x={x}
      y={y}
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
};

const BrainIcon = ({ x = "0", y = "0" }: { x: string; y: string }) => {
  return (
    <svg
      x={x}
      y={y}
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-6.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-6.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
};

