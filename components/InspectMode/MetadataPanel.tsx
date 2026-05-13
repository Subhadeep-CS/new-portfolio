"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ComponentMetadata } from "./types";
import {
  Cpu,
  Layers,
  Zap,
  Accessibility,
  GitBranch,
  MousePointer2,
  Info,
  Maximize2
} from "lucide-react";

interface MetadataPanelProps {
  metadata: ComponentMetadata;
  isVisible: boolean;
}

const MetadataPanel: React.FC<MetadataPanelProps> = ({ metadata, isVisible }) => {
  // Prevent background scroll when the panel is active
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          className="fixed bottom-8 left-8 z-[9999] w-80 bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl pointer-events-auto"
        >
          <div className="p-4 border-b border-zinc-800 bg-zinc-800/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-400" />
              <h3 className="font-semibold text-sm text-zinc-100">{metadata.name}</h3>
            </div>
            <div className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-400 font-medium">
              Component
            </div>
          </div>

          <div 
            className="p-4 space-y-5 max-h-[50vh] overflow-y-auto custom-scrollbar overflow-x-hidden"
            data-lenis-prevent
          >
            {/* Description */}
            {metadata.description && (
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
                  <Info className="w-3 h-3" />
                  Overview
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {metadata.description}
                </p>
              </div>
            )}

            {/* Tech Stack */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
                <Layers className="w-3 h-3" />
                Built With
              </div>
              <div className="flex flex-wrap gap-1.5">
                {metadata.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded-md bg-zinc-800 text-[10px] text-zinc-300 border border-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Optimizations */}
            {metadata.optimizations && metadata.optimizations.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
                  <Zap className="w-3 h-3 text-yellow-400" />
                  Optimizations
                </div>
                <ul className="space-y-1">
                  {metadata.optimizations.map((opt) => (
                    <li key={opt} className="flex items-start gap-2 text-xs text-zinc-400">
                      <span className="text-blue-500 mt-1">✓</span>
                      {opt}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Architecture Notes */}
            {metadata.architectureNotes && (
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
                  <GitBranch className="w-3 h-3 text-purple-400" />
                  Engineering Logic
                </div>
                <div className="p-2.5 rounded-lg bg-purple-500/5 border border-purple-500/10">
                  <p className="text-xs text-zinc-400 italic leading-relaxed">
                    "{metadata.architectureNotes}"
                  </p>
                </div>
              </div>
            )}

            {/* Animation Breakdown */}
            {metadata.animation && (
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
                  <MousePointer2 className="w-3 h-3 text-pink-400" />
                  Animation
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 rounded-lg bg-zinc-800 border border-zinc-700">
                    <span className="block text-[9px] text-zinc-500 uppercase">Type</span>
                    <span className="text-[11px] text-zinc-300">{metadata.animation.type}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-zinc-800 border border-zinc-700">
                    <span className="block text-[9px] text-zinc-500 uppercase">Duration</span>
                    <span className="text-[11px] text-zinc-300">{metadata.animation.duration}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Accessibility */}
            {metadata.accessibility && metadata.accessibility.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
                  <Accessibility className="w-3 h-3 text-green-400" />
                  Accessibility
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {metadata.accessibility.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 rounded-md bg-green-500/5 text-[10px] text-green-400 border border-green-500/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Build Process */}
            {metadata.buildProcess && (
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
                  <Maximize2 className="w-3 h-3 text-orange-400" />
                  Build Process
                </div>
                <div className="space-y-3 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-zinc-800">
                  {metadata.buildProcess.map((step, idx) => (
                    <div key={idx} className="relative pl-6">
                      <div className="absolute left-0 top-1 w-6 h-6 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-zinc-700 border border-zinc-600" />
                      </div>
                      <span className="block text-[10px] text-zinc-200 font-medium">{step.iteration}</span>
                      <p className="text-[10px] text-zinc-500">{step.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MetadataPanel;
