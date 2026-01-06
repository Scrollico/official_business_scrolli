"use client";

import RAGPipelineFlow from "./rag-pipeline-flow";

export const RAGPipelineDemo = () => {
  return (
    <div className="p-4 rounded-xl bg-blue-500/10 w-full">
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
      />
    </div>
  );
};
