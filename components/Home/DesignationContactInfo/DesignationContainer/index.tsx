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
      <div className="w-8 h-8 rounded-lg bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center shadow-none shrink-0 border border-zinc-200 dark:border-zinc-800">
        <Icon className="w-4 h-4 text-zinc-600 dark:text-zinc-400 stroke-[1.5]" />
      </div>
      <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400 break-all">{infoText}</span>
    </>
  );

  const containerClasses = "flex items-center gap-2 bg-transparent hover:bg-zinc-50 dark:hover:bg-zinc-900 p-2 rounded-2xl transition-colors cursor-pointer group";

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
