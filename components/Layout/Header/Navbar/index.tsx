import { usePathname } from "next/navigation";
import Inspectable from "@/components/InspectMode/Inspectable";
import { HEADER_MENU } from "@/utils/app_constant";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <Inspectable
      className="w-full"
      metadata={{
        name: "Navbar.tsx",
        description: "Global navigation system with dynamic menu items and smooth hover transitions.",
        stack: ["Next.js Link", "Lucide Icons", "TailwindCSS"],
        optimizations: ["Client-side navigation via Next.js Link", "Zero layout shift on hover"],
        patterns: ["Dynamic Mapping", "Semantic Navigation"],
        architectureNotes: "Uses a centralized constant for menu configuration to ensure easy updates across the entire site.",
        accessibility: ["ARIA navigation role", "Keyboard focusable links", "Semantic list structure"],
        buildProcess: [
          { iteration: "v1", note: "Hardcoded links." },
          { iteration: "v2", note: "Extracted links to app_constant.ts." }
        ]
      }}
    >
      <nav className="w-full py-2">
        <ul className="flex items-center gap-1 sm:gap-1.5">
          {HEADER_MENU?.map((menuItem: { name: string; href: string }) => {
            const isActive = pathname === menuItem.href;

            return (
              <Link href={menuItem?.href} key={menuItem.name} className="relative">
                <li
                  className={`relative px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer select-none z-10 ${
                    isActive
                      ? "text-zinc-950 dark:text-zinc-50 font-bold"
                      : "text-zinc-400 dark:text-zinc-550 hover:text-zinc-950 dark:hover:text-zinc-100"
                  }`}
                >
                  {menuItem?.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </Inspectable>
  );
};

export default Navbar;
