import { HEADER_MENU } from "@/utils/app_constant";
import Link from "next/link";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
