import Inspectable from "@/components/InspectMode/Inspectable";
import { HEADER_MENU } from "@/utils/app_constant";
import Link from "next/link";

const Navbar = () => {
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
      <nav className="w-full px-2 py-2">
        <ul className="flex items-center gap-2">
          {HEADER_MENU?.map((menuItem: { name: string; href: string }) => (
            <Link href={menuItem?.href} key={menuItem.name}>
              <li className="text-base text-zinc-500 font-medium hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer">
                {menuItem?.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </Inspectable>
  );
};

export default Navbar;
