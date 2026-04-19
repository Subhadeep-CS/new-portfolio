"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

interface Particle {
    id: number;
    x: number;
    y: number;
    rotation: number;
    size: number;
    color: string;
}

const LivePlaygroundContainer = () => {
    const [radius, setRadius] = useState(16);
    const [color, setColor] = useState("#10b981");
    const [particles, setParticles] = useState<Particle[]>([]);

    const createSparkle = () => {
        const newParticles = Array.from({ length: 12 }).map((_, i) => ({
            id: Date.now() + i,
            x: (Math.random() - 0.5) * 250,
            y: (Math.random() - 0.5) * 250,
            rotation: Math.random() * 360,
            size: Math.random() * 15 + 10,
            color: ["#FFEA00", "#FF00FF", "#00FFFF", "#FF3D00", "#6200EA"][Math.floor(Math.random() * 5)]
        }));

        setParticles((prev) => [...prev, ...newParticles]);

        // Clean up particles
        setTimeout(() => {
            setParticles((prev) => prev.filter(p => !newParticles.includes(p)));
        }, 1000);
    };

    return (
        <section className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
            <div className="container border-x border-zinc-200 dark:border-zinc-800 px-4 py-4 flex justify-between items-center bg-[#FAFAFA] dark:bg-zinc-900/50">
                <h3 className="text-[19px] font-semibold text-zinc-900 dark:text-zinc-100 border-l-2 border-fuchsia-500 pl-3 leading-none">
                    UI Playground
                </h3>
            </div>
            <div className="container border-x border-zinc-200 dark:border-zinc-800 px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-zinc-50 dark:bg-zinc-900/30 p-6 rounded-[20px] border border-zinc-200 dark:border-zinc-800">
                    
                    {/* Rendered Output */}
                    <div className="flex justify-center items-center w-full h-[250px] border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl relative overflow-hidden bg-white dark:bg-zinc-950">
                        <AnimatePresence>
                            {particles.map((particle) => (
                                <motion.div
                                    key={particle.id}
                                    initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                                    animate={{ 
                                        x: particle.x, 
                                        y: particle.y, 
                                        opacity: 0, 
                                        scale: [0, 1.5, 1], 
                                        rotate: particle.rotation 
                                    }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="absolute z-20 pointer-events-none"
                                    style={{ 
                                        color: particle.color,
                                        filter: `drop-shadow(0 0 10px ${particle.color}) drop-shadow(0 0 20px ${particle.color}44)`
                                    }}
                                >
                                    <Star fill="currentColor" size={particle.size} strokeWidth={0} />
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={createSparkle}
                            style={{
                                borderRadius: `${radius}px`,
                                backgroundColor: color,
                            }}
                            className="px-8 py-4 text-white font-bold text-lg shadow-lg relative z-10"
                        >
                            Hover Me!
                        </motion.button>
                    </div>

                    {/* Controls & Code */}
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Border Radius ({radius}px)</label>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="50"
                                value={radius}
                                onChange={(e) => setRadius(Number(e.target.value))}
                                className="w-full accent-fuchsia-500"
                            />
                        </div>
                        
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Theme Color</label>
                            </div>
                            <input
                                type="color"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                className="w-full h-10 rounded-lg cursor-pointer"
                            />
                        </div>

                        <div className="p-4 bg-zinc-900 rounded-xl overflow-x-auto border border-zinc-800 shadow-inner">
                            <pre className="text-[13px] text-fuchsia-400 font-mono">
                                {`<button \n  style={{ \n    borderRadius: '${radius}px',\n    backgroundColor: '${color}'\n  }}\n  className="shadow-lg..."\n>\n  Hover Me!\n</button>`}
                            </pre>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LivePlaygroundContainer;

