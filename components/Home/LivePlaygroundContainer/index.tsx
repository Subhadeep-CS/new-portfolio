"use client";

import { useState } from "react";

const LivePlaygroundContainer = () => {
    const [radius, setRadius] = useState(16);
    const [color, setColor] = useState("#10b981");

    return (
        <section className="border-y border-zinc-200 dark:border-zinc-800">
            <div className="container border-x border-zinc-200 dark:border-zinc-800 px-4 py-4 flex justify-between items-center bg-[#FAFAFA] dark:bg-zinc-900/50">
                <h3 className="text-[19px] font-semibold text-zinc-900 dark:text-zinc-100 border-l-2 border-fuchsia-500 pl-3 leading-none">
                    UI Playground
                </h3>
            </div>
            <div className="container border-x border-zinc-200 dark:border-zinc-800 px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-zinc-50 dark:bg-zinc-900/30 p-6 rounded-[20px] border border-zinc-200 dark:border-zinc-800">
                    
                    {/* Rendered Output */}
                    <div className="flex justify-center items-center w-full h-[250px] border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl relative overflow-hidden bg-white dark:bg-zinc-950">
                        <button
                            style={{
                                borderRadius: `${radius}px`,
                                backgroundColor: color,
                            }}
                            className="px-8 py-4 text-white font-bold text-lg shadow-lg hover:scale-105 active:scale-95 transition-transform"
                        >
                            Hover Me!
                        </button>
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
