"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInspectMode } from "./InspectContext";
import { ComponentMetadata } from "./types";
import MetadataPanel from "./MetadataPanel";

interface InspectableProps {
  children: React.ReactNode;
  metadata: ComponentMetadata;
  className?: string;
}

const Inspectable: React.FC<InspectableProps> = ({ children, metadata, className }) => {
  const { isInspectMode } = useInspectMode();
  const [isHovered, setIsHovered] = useState(false);

  if (!isInspectMode) return <>{children}</>;

  return (
    <div
      className={`relative group/inspectable transition-all duration-300 ${className || ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outline */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[9998] border-2 border-blue-500/50 rounded-xl pointer-events-none shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            {/* Label Badge */}
            <div className="absolute -top-3 left-4 px-2 py-0.5 bg-blue-500 text-white text-[10px] font-bold rounded-md shadow-lg z-[9999]">
              {metadata.name}
            </div>

            {/* Corner Markers - Positioned inside to avoid horizontal overflow */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-blue-400" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-blue-400" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-blue-400" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-blue-400" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dim overlay for other elements when this is hovered */}
      <div className={`transition-opacity duration-300 ${isInspectMode && isHovered ? 'opacity-100' : 'opacity-100'}`}>
        {children}
      </div>

      {/* Metadata Panel */}
      <MetadataPanel metadata={metadata} isVisible={isHovered} />
    </div>
  );
};

export default Inspectable;
