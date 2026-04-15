"use client";
import { ABOUT_ME } from "@/utils/app_constant";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="container border-x border-zinc-200 px-4 py-8">
      <div className="flex flex-col gap-10 max-w-4xl">
        {ABOUT_ME.map((section, idx) => (
          <div key={idx} className="flex flex-col gap-3">
            <h4 className="text-[19px] font-semibold text-zinc-900 border-l-2 border-blue-500 pl-3 leading-none">
              {section.key}
            </h4>
            <p className="text-[15.5px] leading-relaxed text-zinc-700 mt-2">
              {section.details}
            </p>

            {section.children && section.children.length > 0 && (
              <ul className="mt-3 space-y-3">
                {section.children.map((child, cIdx) => (
                  <motion.li
                    key={cIdx}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="flex items-start gap-3 text-[15px] text-zinc-600 pl-2 cursor-default group"
                  >
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-zinc-300 group-hover:bg-blue-500 transition-colors duration-300 shrink-0" />
                    <span className="group-hover:text-zinc-900 transition-colors duration-300">
                      <strong className="font-semibold text-zinc-800">{child.key}:</strong>{" "}
                      {child.details}
                    </span>
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
