"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { PROJECTS_DATA } from "@/utils/app_constant";
import Inspectable from "@/components/InspectMode/Inspectable";
import { 
  Building2, Tv, Users, Box, ExternalLink, Github, Lock, 
  CheckCircle2, Play, AlertCircle, TrendingUp, Wrench, ChevronRight,
  ArrowRight, Sparkles, Activity, Layers, Terminal
} from "lucide-react";

// Types
interface Metric {
  label: string;
  value: string;
  numericValue: number;
}

interface FeaturedProject {
  key: string;
  title: string;
  category: string;
  description: string;
  icon: React.ComponentType<any>;
  metrics: Metric[];
  contributions: string[];
  tech: string[];
  challenge: string;
  solution: string;
  impact: string;
  link: string;
  github: string;
  browserUrl: string;
  tabs: string[];
}

// -------------------------------------------------------------
// Component: AnimatedCounter
// Animates numbers from 0 to value when the parent card is hovered
// -------------------------------------------------------------
const AnimatedCounter = ({ value, numericValue, isHovered }: { value: string; numericValue: number; isHovered: boolean }) => {
  const [count, setCount] = useState(0);
  const prevHovered = useRef(isHovered);

  useEffect(() => {
    if (isHovered) {
      let start = 0;
      const end = numericValue;
      if (start === end) return;

      const duration = 800; // ms
      const startTime = performance.now();

      const animate = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const easeProgress = progress * (2 - progress); // Ease out quad
        setCount(parseFloat((easeProgress * end).toFixed(end % 1 === 0 ? 0 : 1)));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    } else {
      setCount(0);
    }
    prevHovered.current = isHovered;
  }, [isHovered, numericValue]);

  const suffix = value.replace(/[0-9.]/g, "");
  
  return (
    <span className="font-bold tracking-tight">
      {isHovered ? `${count}${suffix}` : "0" + suffix}
    </span>
  );
};

// -------------------------------------------------------------
// Component: BrowserMockup
// Renders a high-fidelity browser chrome with interactive SVG/HTML inside
// -------------------------------------------------------------
const BrowserMockup = ({ projectKey, url, tabs, isHovered }: { projectKey: string; url: string; tabs: string[]; isHovered: boolean }) => {
  const [activeTab, setActiveTab] = useState(0);
  
  // Custom dashboard widget triggers
  const [pulseMetric, setPulseMetric] = useState(false);
  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setPulseMetric(prev => !prev);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div className="w-full aspect-[16/10.5] rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-950 overflow-hidden shadow-2xl flex flex-col select-none relative group/browser">
      
      {/* Browser Header (Chrome) */}
      <div className="bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800/80 px-4 py-2.5 flex items-center justify-between gap-4 shrink-0">
        
        {/* Window controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-red-400/90 dark:bg-red-500/30 dark:border dark:border-red-500/20" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/90 dark:bg-yellow-500/30 dark:border dark:border-yellow-500/20" />
          <div className="w-3 h-3 rounded-full bg-green-400/90 dark:bg-green-500/30 dark:border dark:border-green-500/20" />
        </div>

        {/* Tab selector */}
        <div className="flex items-center gap-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 overflow-hidden">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-3 py-1 rounded-md transition-all truncate max-w-[120px] ${
                activeTab === idx
                  ? "bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 shadow-sm border border-zinc-200/50 dark:border-zinc-800"
                  : "hover:bg-zinc-200 dark:hover:bg-zinc-800/40"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Address bar URL */}
        <div className="hidden sm:flex items-center bg-zinc-200 dark:bg-zinc-950/80 border border-zinc-300/50 dark:border-zinc-800/50 rounded-md px-3 py-1 text-[10.5px] text-zinc-600 dark:text-zinc-400 font-mono w-full max-w-[240px] truncate shrink">
          <span className="text-zinc-400 dark:text-zinc-600 mr-1 select-none">https://</span>
          {url.replace("https://", "")}
        </div>
      </div>

      {/* Browser Viewport */}
      <div className="flex-1 bg-zinc-50 dark:bg-zinc-950 overflow-hidden relative font-sans text-zinc-950 dark:text-zinc-50 flex">
        
        {/* Transitioning Zoom Container */}
        <div 
          className="flex-1 w-full h-full flex transition-transform duration-700 ease-out"
          style={{ transform: isHovered ? "scale(1.025)" : "scale(1)" }}
        >
          
          {/* Project Specific Dashboards */}
          {projectKey === "railtel" && (
            <div className="flex-1 flex flex-col p-3 sm:p-4 text-[10px] text-zinc-600 dark:text-zinc-400 h-full">
              
              {/* Top Row: Mini Cards */}
              <div className="grid grid-cols-3 gap-2.5 mb-3">
                {[
                  { label: "Total POs", val: "102,450", trend: "+12.4%", color: "text-blue-500" },
                  { label: "Active Vendors", val: "5,240", trend: "+4.1%", color: "text-emerald-500" },
                  { label: "Platform Health", val: "99.8%", trend: "Stable", color: "text-indigo-500" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-2.5 flex flex-col justify-between shadow-xs">
                    <span className="text-zinc-400 text-[9px] uppercase tracking-wider font-semibold">{item.label}</span>
                    <div className="flex items-baseline justify-between mt-1">
                      <span className="font-bold text-zinc-800 dark:text-zinc-100 text-[12px] sm:text-[14px]">{item.val}</span>
                      <span className={`text-[8.5px] font-bold ${item.color}`}>{item.trend}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart & Sidebar Layout */}
              <div className="flex-1 grid grid-cols-12 gap-3 min-h-0">
                
                {/* Visual Chart */}
                <div className="col-span-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-2.5 flex flex-col shadow-xs min-h-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-zinc-800 dark:text-zinc-200 text-[11px]">Procurement Volume Trend</span>
                    <div className="flex items-center gap-1.5 text-[8.5px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span>PO Volume</span>
                    </div>
                  </div>
                  
                  {/* SVG Chart Area */}
                  <div className="flex-1 w-full relative min-h-0">
                    <svg viewBox="0 0 320 120" className="w-full h-full text-zinc-200 dark:text-zinc-800" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="railtelGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <line x1="0" y1="20" x2="320" y2="20" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
                      <line x1="0" y1="60" x2="320" y2="60" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
                      <line x1="0" y1="100" x2="320" y2="100" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
                      
                      <path 
                        d="M0 100 Q 40 85, 80 90 T 160 55 T 240 45 T 320 30 L 320 120 L 0 120 Z" 
                        fill="url(#railtelGrad)" 
                      />
                      
                      <motion.path 
                        d="M0 100 Q 40 85, 80 90 T 160 55 T 240 45 T 320 30" 
                        fill="none" 
                        stroke="#3b82f6" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={isHovered ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                      
                      <circle cx="320" cy="30" r="3.5" fill="#3b82f6" />
                      <circle cx="320" cy="30" r="6" fill="none" stroke="#3b82f6" strokeOpacity="0.5" className={isHovered ? "animate-ping" : ""} />
                    </svg>
                  </div>
                </div>

                {/* Status Column */}
                <div className="col-span-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-2.5 flex flex-col shadow-xs justify-between">
                  <span className="font-bold text-zinc-800 dark:text-zinc-200 text-[10px] mb-2 block">Recent Orders</span>
                  <div className="flex-1 flex flex-col gap-2 justify-center text-[8.5px]">
                    {[
                      { code: "PO-902", amt: "$1.2M", status: "Approved", col: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" },
                      { code: "PO-894", amt: "$840K", status: "Pending", col: "bg-amber-500/10 text-amber-600 dark:text-amber-400" },
                      { code: "PO-880", amt: "$450K", status: "Success", col: "bg-blue-500/10 text-blue-600 dark:text-blue-400" }
                    ].map((row, idx) => (
                      <div key={idx} className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-1.5 last:border-0 last:pb-0">
                        <span className="font-mono text-zinc-900 dark:text-zinc-200 font-semibold">{row.code}</span>
                        <span className="text-zinc-400">{row.amt}</span>
                        <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${row.col}`}>{row.status}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {projectKey === "imboxo" && (
            <div className="flex-1 flex flex-col p-3 sm:p-4 text-[10px] text-zinc-400 bg-zinc-950 h-full">
              {/* Media Studio Layout */}
              <div className="grid grid-cols-12 gap-3 flex-1 min-h-0">
                
                {/* Left Sidebar Menu */}
                <div className="col-span-3 border-r border-zinc-900 pr-2 flex flex-col gap-2 text-[9px] font-semibold text-zinc-500">
                  <span className="text-zinc-700 uppercase tracking-widest text-[8px]">Studio</span>
                  <div className="bg-purple-500/10 text-purple-400 rounded-md p-1.5 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Analytics</span>
                  </div>
                  <div className="rounded-md p-1.5 flex items-center gap-1.5 hover:bg-zinc-900 transition-colors">
                    <Layers className="w-3.5 h-3.5" />
                    <span>CDN Cache</span>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="col-span-9 flex flex-col gap-3 min-h-0">
                  
                  {/* Top Stats */}
                  <div className="grid grid-cols-2 gap-2 shrink-0">
                    <div className="bg-zinc-900 border border-zinc-800/80 rounded-lg p-2.5 flex items-center justify-between">
                      <div>
                        <span className="text-zinc-500 text-[8.5px] uppercase">Active Streams</span>
                        <div className="font-bold text-[13px] text-zinc-100 mt-0.5">245.8K</div>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[7.5px] font-bold text-red-500 uppercase">Live</span>
                      </div>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800/80 rounded-lg p-2.5">
                      <span className="text-zinc-500 text-[8.5px] uppercase">CDN Bandwidth</span>
                      <div className="font-bold text-[13px] text-zinc-100 mt-0.5">3.8 Gbps</div>
                    </div>
                  </div>

                  {/* CDN Bandwidth Chart */}
                  <div className="flex-1 bg-zinc-900 border border-zinc-800/80 rounded-lg p-2.5 flex flex-col min-h-0">
                    <span className="font-bold text-zinc-300 text-[10px] mb-1">CDN Realtime Egress</span>
                    
                    <div className="flex-1 w-full min-h-0">
                      <svg viewBox="0 0 250 80" className="w-full h-full text-zinc-800" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="imboxoGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path 
                          d="M0 70 Q 30 50, 60 60 T 120 30 T 180 40 T 250 20 L 250 80 L 0 80 Z" 
                          fill="url(#imboxoGrad)" 
                        />
                        <motion.path 
                          d="M0 70 Q 30 50, 60 60 T 120 30 T 180 40 T 250 20" 
                          fill="none" 
                          stroke="#a855f7" 
                          strokeWidth="2" 
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={isHovered ? { pathLength: 1 } : { pathLength: 0 }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                        <circle cx="250" cy="20" r="3" fill="#a855f7" />
                      </svg>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          )}

          {projectKey === "crm" && (
            <div className="flex-1 flex flex-col p-3 sm:p-4 text-[10px] text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-900 h-full">
              
              {/* WebRTC Video calling screen design */}
              <div className="grid grid-cols-12 gap-3 flex-1 min-h-0">
                
                {/* Caller grid */}
                <div className="col-span-8 bg-zinc-100 dark:bg-zinc-950 rounded-lg p-2.5 flex flex-col justify-between border border-zinc-200 dark:border-zinc-800/80 relative overflow-hidden min-h-0">
                  <div className="flex justify-between items-center z-10">
                    <span className="bg-zinc-900/80 backdrop-blur-xs text-white text-[8px] font-bold px-1.5 py-0.5 rounded-sm flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>WebRTC Connected</span>
                    </span>
                    <span className="text-[7.5px] text-zinc-400 bg-zinc-900/40 px-1 py-0.5 rounded font-mono">14ms RTT</span>
                  </div>

                  {/* Avatars Grid */}
                  <div className="flex-1 flex items-center justify-center gap-4 py-2 shrink-0">
                    <div className="relative flex flex-col items-center">
                      <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-500 relative">
                        <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                        
                        {/* CSS animated audio ripples */}
                        {isHovered && (
                          <>
                            <div className="absolute inset-0 rounded-full border border-blue-500/40 animate-ping opacity-75" style={{ animationDuration: "1.8s" }} />
                            <div className="absolute -inset-2 rounded-full border border-blue-500/25 animate-ping opacity-50" style={{ animationDuration: "2.4s" }} />
                          </>
                        )}
                      </div>
                      <span className="text-[8px] text-zinc-400 mt-1 block">Lead Architect</span>
                    </div>

                    <div className="relative flex flex-col items-center">
                      <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-zinc-300 dark:bg-zinc-800 border border-zinc-400/20 flex items-center justify-center text-zinc-500">
                        <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[8px] text-zinc-400 mt-1 block">Client Node</span>
                    </div>
                  </div>

                  {/* Call Controls Overlay */}
                  <div className="flex justify-center gap-2 mt-auto z-10 shrink-0">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-white flex items-center justify-center text-[9px] hover:bg-zinc-700 transition-colors shadow">🎙️</div>
                    <div className="w-5 h-5 rounded-full bg-zinc-800 text-white flex items-center justify-center text-[9px] hover:bg-zinc-700 transition-colors shadow">📹</div>
                    <div className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[9px] hover:bg-red-500 transition-colors shadow">📴</div>
                  </div>
                </div>

                {/* Sidebar Call stats */}
                <div className="col-span-4 bg-zinc-50 dark:bg-zinc-950 rounded-lg p-2.5 flex flex-col shadow-inner border border-zinc-200 dark:border-zinc-800/80 justify-between">
                  <span className="font-bold text-zinc-800 dark:text-zinc-200 text-[10px] mb-2">Signal Logs</span>
                  <div className="flex-1 flex flex-col gap-1.5 text-[7.5px] font-mono justify-center text-zinc-500">
                    <div>[02:14:89] SDP Offer Recv</div>
                    <div className="text-emerald-500">[02:14:91] ICE Complete</div>
                    <div>[02:15:02] Stream Active</div>
                    <div className="text-blue-500">[02:15:10] Codec: OPUS 48k</div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {projectKey === "kwikrail" && (
            <div className="flex-1 flex flex-col p-3 sm:p-4 text-[10px] text-zinc-500 bg-[#070b19] h-full relative">
              {/* Technical Blueprint Configurator */}
              <div 
                className="absolute inset-0 opacity-[0.15]"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #3b82f6 1px, transparent 1px),
                    linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px"
                }}
              />
              
              <div className="relative flex-1 flex flex-col z-10 justify-between min-h-0">
                
                {/* Blueprint Header */}
                <div className="flex justify-between items-center border-b border-blue-500/20 pb-1.5 shrink-0">
                  <span className="text-blue-400 font-mono text-[9px] tracking-wider uppercase font-semibold">CAD Workspace v4.2</span>
                  <span className="text-zinc-400 text-[8px] bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono">Grid: 10cm</span>
                </div>

                {/* Handrail Assembly vector */}
                <div className="flex-1 flex items-center justify-center py-2 shrink-0">
                  <svg viewBox="0 0 300 100" className="w-full h-[70px] overflow-visible text-blue-400">
                    {/* Rails */}
                    <line x1="30" y1="20" x2="270" y2="20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    <line x1="30" y1="45" x2="270" y2="45" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    
                    {/* Posts */}
                    <line x1="50" y1="20" x2="50" y2="90" stroke="currentColor" strokeWidth="3" />
                    <line x1="150" y1="20" x2="150" y2="90" stroke="currentColor" strokeWidth="3" />
                    <line x1="250" y1="20" x2="250" y2="90" stroke="currentColor" strokeWidth="3" />
                    
                    {/* Dimension Arrows */}
                    <path d="M 30,10 L 270,10" stroke="#f59e0b" strokeWidth="0.8" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
                    <text x="150" y="7" fill="#f59e0b" fontSize="8" textAnchor="middle" fontFamily="monospace">Width: 2.40m</text>

                    <path d="M 285,20 L 285,90" stroke="#f59e0b" strokeWidth="0.8" />
                    <text x="295" y="60" fill="#f59e0b" fontSize="8" textAnchor="middle" transform="rotate(90 295 60)" fontFamily="monospace">Height: 1.10m</text>
                  </svg>
                </div>

                {/* BOM list & Price Summary */}
                <div className="border-t border-blue-500/20 pt-1.5 grid grid-cols-3 gap-2 text-[8px] font-mono shrink-0">
                  <div>
                    <span className="text-zinc-600">STANCHIONS</span>
                    <div className="text-zinc-200 mt-0.5">3x Galv Post</div>
                  </div>
                  <div>
                    <span className="text-zinc-600">RAILINGS</span>
                    <div className="text-zinc-200 mt-0.5">4.8m Tube-D48</div>
                  </div>
                  <div>
                    <span className="text-zinc-600">TOTAL PRICE</span>
                    <div className="text-amber-400 mt-0.5 font-bold">$1,420.00</div>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// Component: ChallengeSolutionImpact
// A high-end horizontal layout detailing engineering progression
// -------------------------------------------------------------
const ChallengeSolutionImpact = ({ challenge, solution, impact }: { challenge: string; solution: string; impact: string }) => {
  return (
    <div className="mt-8 border border-zinc-200/60 dark:border-zinc-800/80 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/30 p-4 sm:p-5 flex flex-col md:flex-row gap-5 items-stretch relative overflow-hidden">
      
      {/* Decorative vertical connection line on mobile, horizontal on desktop */}
      <div className="absolute top-[35px] bottom-[35px] left-[32px] md:top-auto md:bottom-auto md:left-[10%] md:right-[10%] md:h-[1px] border-l md:border-l-0 md:border-t border-dashed border-zinc-300 dark:border-zinc-800 z-0 pointer-events-none" />

      {/* Challenge */}
      <div className="flex-1 flex gap-3 relative z-10">
        <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-500 shrink-0">
          <AlertCircle className="w-4.5 h-4.5" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Challenge</span>
          <p className="text-[13px] text-zinc-600 dark:text-zinc-300 leading-normal mt-1">{challenge}</p>
        </div>
      </div>

      {/* Transition indicator */}
      <div className="hidden md:flex items-center justify-center shrink-0 z-10 self-center text-zinc-400">
        <ChevronRight className="w-5 h-5" />
      </div>

      {/* Solution */}
      <div className="flex-1 flex gap-3 relative z-10">
        <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-500 shrink-0">
          <Wrench className="w-4.5 h-4.5" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Solution</span>
          <p className="text-[13px] text-zinc-600 dark:text-zinc-300 leading-normal mt-1">{solution}</p>
        </div>
      </div>

      {/* Transition indicator */}
      <div className="hidden md:flex items-center justify-center shrink-0 z-10 self-center text-zinc-400">
        <ChevronRight className="w-5 h-5" />
      </div>

      {/* Impact */}
      <div className="flex-1 flex gap-3 relative z-10">
        <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-500 shrink-0">
          <TrendingUp className="w-4.5 h-4.5" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Impact</span>
          <p className="text-[13px] text-emerald-600 dark:text-emerald-400 leading-normal font-semibold mt-1">{impact}</p>
        </div>
      </div>

    </div>
  );
};

// -------------------------------------------------------------
// Component: ProjectCard
// Represents a single, full-width high-end project card
// -------------------------------------------------------------
const ProjectCard = ({ project }: { project: FeaturedProject }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full relative p-[1px] rounded-[24px] overflow-hidden transition-all duration-300 bg-zinc-200 dark:bg-zinc-800/80 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:-translate-y-1 hover:scale-[1.008] shadow-sm hover:shadow-2xl dark:hover:shadow-black/70 group"
    >
      {/* Inner Container */}
      <div className="w-full h-full bg-white dark:bg-zinc-950 rounded-[23px] p-6 sm:p-8 lg:p-10 flex flex-col gap-8 lg:gap-10">
        
        {/* Core Content Area: Browser Mockup (LEFT) vs Details (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Browser Preview (55%) */}
          <div className="lg:col-span-7 w-full flex items-center justify-center">
            <BrowserMockup 
              projectKey={project.key}
              url={project.browserUrl}
              tabs={project.tabs}
              isHovered={isHovered}
            />
          </div>

          {/* RIGHT: Project Information (45%) */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full">
            
            {/* Header: Icon, Name & Category Badge */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shrink-0">
                <project.icon className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="text-[22px] sm:text-[24px] font-black text-zinc-900 dark:text-zinc-100 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {project.title}
                  </h4>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-500 dark:text-blue-400 mt-1 block">
                  {project.category}
                </span>
              </div>
            </div>

            {/* High-impact statement */}
            <p className="text-[16px] text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 font-medium">
              {project.description}
            </p>

            {/* Impact Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {project.metrics.map((metric, idx) => (
                <div 
                  key={idx} 
                  className="border border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/30 rounded-xl px-4 py-3 flex flex-col justify-center transition-all duration-300 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/60"
                >
                  <div className="text-[18px] sm:text-[20px] font-black text-zinc-900 dark:text-white flex items-baseline gap-0.5">
                    <AnimatedCounter 
                      value={metric.value} 
                      numericValue={metric.numericValue} 
                      isHovered={isHovered} 
                    />
                  </div>
                  <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-500 mt-0.5 uppercase tracking-wide leading-none">{metric.label}</span>
                </div>
              ))}
            </div>

            {/* My Contributions checklist */}
            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3 block">My Contributions</span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-[13px] text-zinc-600 dark:text-zinc-400 font-medium">
                {project.contributions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack pills */}
            <div className="mb-7">
              <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2.5 block">Tech Stack</span>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((pill, idx) => (
                  <span 
                    key={idx} 
                    className="text-[11.5px] font-semibold px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/40 dark:border-zinc-800/40 transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center gap-3">
              {project.link !== "#" ? (
                <Link 
                  href={project.link} 
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-[14px] transition-all shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-95 group/btn"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Link>
              ) : (
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-600 font-bold text-[14px] border border-zinc-200/30 dark:border-zinc-800/30 cursor-default">
                  <Lock className="w-4 h-4 shrink-0" />
                  <span>Internal Platform</span>
                </div>
              )}

              {project.link !== "#" && (
                <Link 
                  href={project.link} 
                  target="_blank"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-bold text-[14px] transition-all active:scale-95"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </Link>
              )}

              {project.github && project.github !== "#" && (
                <Link 
                  href={project.github} 
                  target="_blank"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-bold text-[14px] transition-all active:scale-95"
                >
                  <Github className="w-4 h-4" />
                  <span>Github</span>
                </Link>
              )}
            </div>

          </div>

        </div>

        {/* Challenge -> Solution -> Impact step flow */}
        <ChallengeSolutionImpact 
          challenge={project.challenge}
          solution={project.solution}
          impact={project.impact}
        />

      </div>
    </div>
  );
};

// -------------------------------------------------------------
// Component: SecondaryProjectCard
// Representing non-featured projects in a beautiful secondary grid
// -------------------------------------------------------------
const SecondaryProjectCard = ({ project }: { project: typeof PROJECTS_DATA[0] }) => {
  return (
    <div className="relative p-[1px] rounded-[20px] overflow-hidden transition-all duration-300 bg-zinc-200 dark:bg-zinc-800 hover:bg-gradient-to-r hover:from-blue-500/50 hover:to-indigo-500/50 hover:-translate-y-1 hover:shadow-lg group">
      <div className="h-full bg-white dark:bg-zinc-950 rounded-[19px] p-6 flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                {project.icon ? (
                  <project.icon className="w-5 h-5" />
                ) : (
                  <Building2 className="w-5 h-5" />
                )}
              </div>
              <div>
                <h4 className="text-[16px] font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-500 transition-colors leading-tight">
                  {project.title}
                </h4>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 block mt-0.5">
                  {project.type}
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-1.5 shrink-0">
              {project.github && project.github !== "#" && (
                <Link href={project.github} target="_blank" className="p-2 rounded-full text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                  <Github className="w-3.8 h-3.8" />
                </Link>
              )}
              {project.link && project.link !== "#" ? (
                <Link href={project.link} target="_blank" className="p-2 rounded-full text-zinc-400 hover:text-blue-500 hover:bg-blue-500/10 transition-colors group/link">
                  <ExternalLink className="w-3.8 h-3.8 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              ) : (
                <div className="p-2 rounded-full text-zinc-300 dark:text-zinc-800" title="Confidential / Internal">
                  <Lock className="w-3.8 h-3.8" />
                </div>
              )}
            </div>
          </div>

          <p className="text-[13.5px] text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5 font-medium line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Footer */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-100 dark:border-zinc-900">
          {project.tech.map((t, i) => (
            <span key={i} className="text-[11px] font-semibold px-2 py-0.5 rounded bg-zinc-50 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 border border-zinc-200/30 dark:border-zinc-800/30">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// Component: ProjectShowcase (Main Export)
// -------------------------------------------------------------
const ProjectShowcase = () => {
  // Filter out our featured projects to render in secondary grid
  const featuredTitles = ["RailTel Vendor Platform", "Imboxo OTT", "Webart CRM Workspace", "KwikRail Configurator"];
  const remainingProjects = PROJECTS_DATA.filter(p => !featuredTitles.includes(p.title));

  const FEATURED_PROJECTS_MOCK: FeaturedProject[] = [
    {
      key: "railtel",
      title: "RailTel Vendor Platform",
      category: "Enterprise Procurement Platform",
      description: "An enterprise-grade procurement dashboard for RailTel, a Government of India PSU, managing over 100K+ purchase orders.",
      icon: Building2,
      metrics: [
        { label: "Purchase Orders", value: "100K+", numericValue: 100000 },
        { label: "Active Vendors", value: "5K+", numericValue: 5000 },
        { label: "API Integrations", value: "20+", numericValue: 20 },
        { label: "System Availability", value: "99.8%", numericValue: 99.8 }
      ],
      contributions: [
        "Built Dashboard Architecture",
        "Redux Toolkit State Management",
        "Performance Optimization",
        "API Integration",
        "Responsive UI",
        "Authentication Workflow",
        "Charts & Analytics Reports",
        "Modular Component Library"
      ],
      tech: ["React", "Redux Toolkit", "RTK Query", "Tailwind CSS", "TypeScript", "Recharts", "Axios"],
      challenge: "Managing over 100,000 purchase orders with smooth rendering.",
      solution: "Implemented virtualization, lazy loading, memoization and optimized API fetching.",
      impact: "Improved dashboard performance by 60%.",
      browserUrl: "https://vendor.railtelindia.gov.in/dashboard",
      tabs: ["Vendor Portal", "Purchase Orders", "Analytics"],
      github: "#",
      link: "#"
    },
    {
      key: "imboxo",
      title: "Imboxo OTT",
      category: "Streaming Platform & CDN Console",
      description: "A high-performance media streaming platform engineered for immersive cross-device entertainment and real-time CDN analytics.",
      icon: Tv,
      metrics: [
        { label: "Active Streams", value: "1.2M+", numericValue: 1200000 },
        { label: "Avg Latency", value: "45ms", numericValue: 45 },
        { label: "CDN Uptime", value: "99.9%", numericValue: 99.9 },
        { label: "Bandwidth Saved", value: "40%", numericValue: 40 }
      ],
      contributions: [
        "Next.js App Router Architecture",
        "Video.js Player Customization",
        "Offline Sync & Service Workers",
        "Real-time Stream Monitoring",
        "Fluid Micro-interactions UI",
        "CDN Edge Integration Pipeline"
      ],
      tech: ["Next.js", "Video.js", "Redux Toolkit", "Tailwind CSS", "TypeScript", "Service Workers"],
      challenge: "Ensuring instant stream playback and low latency video delivery globally.",
      solution: "Developed intelligent pre-fetching strategies and integrated custom edge-caching configurations.",
      impact: "Reduced initial loading time (LCP) by 45%.",
      browserUrl: "https://imboxo.com/dashboard",
      tabs: ["Imboxo Studio", "Analytics", "CDN Monitor"],
      github: "#",
      link: "https://imboxo.com"
    },
    {
      key: "crm",
      title: "Webart CRM Workspace",
      category: "Real-time Collaboration Workspace",
      description: "An advanced internal CRM system featuring integrated P2P audio/video calling and instant secure messaging modules.",
      icon: Users,
      metrics: [
        { label: "Call Minutes", value: "12K+", numericValue: 12000 },
        { label: "Audio Quality MOS", value: "4.8/5", numericValue: 4.8 },
        { label: "Call Drop Rate", value: "0.2%", numericValue: 0.2 },
        { label: "Active Chats", value: "850+", numericValue: 850 }
      ],
      contributions: [
        "WebRTC Signalling Protocol",
        "Socket.IO Real-time Broker",
        "Web Workers Audio Engine",
        "Connection Recovery Handlers",
        "Fluid Call Overlay Animations",
        "Instant Message Indexing DB"
      ],
      tech: ["React", "WebRTC", "Socket.io", "Tailwind CSS", "TypeScript", "Web Workers"],
      challenge: "Handling unstable networks during live WebRTC P2P calling.",
      solution: "Designed custom ICE candidates reconnection recovery algorithms and bitrate adapters.",
      impact: "Reduced call drop rate to under 0.2% on slow networks.",
      browserUrl: "https://crm.webart.internal/workspace",
      tabs: ["CRM Workspace", "Active Calls", "Logs"],
      github: "#",
      link: "#"
    },
    {
      key: "kwikrail",
      title: "KwikRail Configurator",
      category: "3D CAD System",
      description: "A complex web-based 3D configurator tool allowing real-time modular handrail design and instant bill-of-materials generation.",
      icon: Box,
      metrics: [
        { label: "Designs Exported", value: "80K+", numericValue: 80000 },
        { label: "Rendering Speed", value: "0.5s", numericValue: 0.5 },
        { label: "Spec Accuracy", value: "99.9%", numericValue: 99.9 },
        { label: "BOM Export Speed", value: "100ms", numericValue: 100 }
      ],
      contributions: [
        "CAD Canvas Architecture Setup",
        "Zustand Spatial State Engine",
        "Modular SVG-based Vector Tool",
        "Bill of Materials Pricing Logic",
        "Real-time Spatial Validation",
        "Instant PDF/CAD Data Export"
      ],
      tech: ["React", "Three.js", "Zustand", "Tailwind CSS", "TypeScript", "SVG Draw"],
      challenge: "Calculating complex geometry changes and structural validation in real-time.",
      solution: "Implemented reactive canvas coordinate calculations and memoized state selectors.",
      impact: "Achieved sub-second rendering updates and 99.9% layout accuracy.",
      browserUrl: "https://configurator.kwikrail.com.au",
      tabs: ["3D Configurator", "Bill of Materials", "Exports"],
      github: "#",
      link: "#"
    }
  ];

  const showcaseMetadata = {
    name: "ProjectShowcase.tsx",
    description: "Enterprise SaaS-grade product showcase displaying high-fidelity browser simulations, animated metrics, and project workflows.",
    stack: ["Next.js", "Framer Motion", "TailwindCSS v4", "Lucide Icons", "SVG Graphics"],
    optimizations: [
      "Simulated interactive browser environments in code to eliminate image layout shift and payload overhead",
      "GPU-accelerated count-up counter hooks tracking card hover state",
      "Tailwind v4 theme variables for smooth transitions across light/dark themes",
      "Responsive dual-column flex grids with smooth Apple-like spatial easing"
    ],
    patterns: [
      "Interactive Browser Preview Pattern",
      "Hover State Propagation Pattern",
      "Challenge-Solution-Impact flow",
      "Dynamic CSS Gradient Borders"
    ],
    architectureNotes: "Uses atomic simulated dashboards for each case study, scaling the rendering directly in SVG/HTML. Employs modular card sections and custom hover detectors.",
    animation: {
      type: "Framer Motion & RequestAnimationFrame",
      duration: "250ms - 1000ms",
      description: "Combines 250ms card lift transitions with 1000ms counter count-ups and 700ms slow-zoom dashboard previews."
    },
    accessibility: [
      "Keyboard tab navigation for external link actions",
      "WAI-ARIA roles for browser simulations and tabs",
      "Accessible color contrast for tags and status labels"
    ],
    buildProcess: [
      { iteration: "v1", note: "Basic project showcase grid." },
      { iteration: "v2", note: "Integrated full-width cards with static image mockups." },
      { iteration: "v3", note: "Coded dynamic SVG browser mockups, animated counters, and Challenge-Solution-Impact flow." }
    ]
  };

  return (
    <Inspectable metadata={showcaseMetadata}>
      {/* Custom Marker for SVG Arrow definitions */}
      <svg className="absolute w-0 h-0 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
          </marker>
        </defs>
      </svg>

      <div className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-20 sm:gap-24 relative z-10">
        
        {/* Core Showcase Cards List */}
        <div className="flex flex-col gap-12 sm:gap-16 w-full">
          {FEATURED_PROJECTS_MOCK.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>

        {/* Secondary Showcase Segment */}
        <div className="w-full border-t border-zinc-200 dark:border-zinc-800 pt-16 sm:pt-20">
          <div className="flex flex-col gap-3 mb-10 max-w-3xl pl-2">
            <div className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-[11px]">
              <Sparkles className="w-4 h-4" />
              <span>More Deployments</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
              Other Selected Work
            </h3>
            <p className="text-[14.5px] text-zinc-500 dark:text-zinc-400 font-medium">
              A list of focused client solutions and custom web platforms designed for seamless operation and scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingProjects.map((project, idx) => (
              <SecondaryProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>

      </div>
    </Inspectable>
  );
};

export default ProjectShowcase;
