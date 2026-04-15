"use client";
import { DesignationContainerProps } from "../designation.type";
import { motion } from "framer-motion";

const DesignationContainer = ({
  Icon,
  infoText,
  href
}: DesignationContainerProps) => {
  const content = (
    <>
      <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center shadow-none shrink-0 border border-zinc-200">
        <Icon className="w-5 h-5 text-zinc-600 stroke-[1.5]" />
      </div>
      <span className="text-[15px] font-medium text-zinc-800 break-all">{infoText}</span>
    </>
  );

  const containerClasses = "flex items-center gap-4 bg-transparent hover:bg-zinc-50 p-2 rounded-2xl transition-colors cursor-pointer group";

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={containerClasses}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={containerClasses}
    >
      {content}
    </motion.div>
  );
};

export default DesignationContainer;
