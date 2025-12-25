import { HEADER_MENU } from "@/utils/app_constant";

const Navbar = () => {
  return (
    <nav className="w-full px-2 py-2">
      <ul className="flex items-center gap-2">
        {HEADER_MENU?.map((menuItem: { name: string; href: string }) => (
          <li className="text-lg text-black" key={menuItem.name}>
            {menuItem?.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
