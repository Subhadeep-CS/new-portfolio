"use client";

import { SiSpotify } from "react-icons/si";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const SpotifyContainer = () => {
    // Static dummy data simulating a Spotify API fetch
    const [isPlaying, setIsPlaying] = useState(true);
    const [song, setSong] = useState("Starboy");
    const [artist, setArtist] = useState("The Weeknd, Daft Punk");
    const [coverUrl, setCoverUrl] = useState("https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452");
    const [spotifyUrl, setSpotifyUrl] = useState("https://open.spotify.com/track/7MXVkk9YMqq6vq84UKtN0b");

    const bars = [1, 2, 3, 4, 5];

    // Hydration check
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <section className="border-y border-zinc-200">
            <div className="container border-x border-zinc-200 px-4 py-4 flex justify-between items-center bg-[#FAFAFA]">
                <h3 className="text-[19px] font-semibold text-zinc-900 border-l-2 border-[#1DB954] pl-3 leading-none">
                    Currently on Repeat
                </h3>
            </div>
            <div className="container border-x border-zinc-200 px-4 py-8">
                <Link
                    href={spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-8 border border-zinc-200 rounded-[24px] hover:border-[#1DB954] hover:bg-[#FAFAFA] transition-all shadow-sm max-w-3xl mx-auto active:scale-95 duration-300"
                >
                    {/* Hover Link Indicator */}
                    <div className="absolute top-5 right-5 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-5 h-5 text-[#1DB954]" />
                    </div>

                    <div className="w-28 h-28 sm:w-36 sm:h-36 shrink-0 rounded-2xl overflow-hidden border-4 border-zinc-100 shadow-md relative group-hover:-rotate-3 transition-transform duration-500 ease-out">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={coverUrl} alt={`${song} Album cover`} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex flex-col flex-grow w-full text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                            <SiSpotify className="w-[22px] h-[22px] text-[#1DB954]" />
                            <span className="text-[13px] font-extrabold uppercase tracking-widest text-[#1DB954]">
                                {isPlaying ? "Listening to Spotify" : "Last Played"}
                            </span>
                            {isPlaying && (
                                <div className="flex gap-[3px] items-end h-3 ml-2">
                                    {bars.map((bar) => (
                                        <motion.div
                                            key={bar}
                                            className="w-[3px] bg-[#1DB954] rounded-sm"
                                            animate={{ height: ["4px", "14px", "4px"] }}
                                            transition={{
                                                repeat: Infinity,
                                                duration: 1.2,
                                                delay: bar * 0.15,
                                                ease: "easeInOut",
                                            }}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                        <h4 className="text-[24px] sm:text-[32px] font-black text-zinc-900 leading-tight truncate mb-1">
                            {song}
                        </h4>
                        <p className="text-[16px] sm:text-[18px] font-semibold text-zinc-500 truncate">
                            {artist}
                        </p>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default SpotifyContainer;
