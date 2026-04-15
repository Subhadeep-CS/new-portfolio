"use client";

import { useState, useEffect } from "react";
import { Icons } from "@/assets/icons";
import { DESIGNATION } from "@/utils/app_constant";
import { motion, AnimatePresence } from "framer-motion";

const UserInformation = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % (DESIGNATION?.length || 1));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border-l flex flex-col gap-1 justify-end divide-y-1 w-full *:pl-4">
      <div className="text-zinc-300">text-3xl text-zinc-950 font-medium</div>
      <div className="flex gap-2 items-center">
        <h3 className="text-3xl text-zinc-950 font-medium">Subhadeep Das</h3>
        <div className="flex gap-2 items-center">
          <Icons.BadgeCheck size={24} className="text-white" fill="" />
          <Icons.Volume2 size={24} className="text-zinc-600" />
        </div>
      </div>
      <div className="w-full flex items-center h-8 overflow-hidden relative pl-4">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={index}
            initial={{ y: -30, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: 30, opacity: 0, filter: "blur(4px)" }}
            transition={{ type: "spring", stiffness: 60, damping: 20, mass: 1.2 }}
            className="absolute left-4 whitespace-nowrap text-zinc-400"
          >
            {DESIGNATION?.[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default UserInformation;
