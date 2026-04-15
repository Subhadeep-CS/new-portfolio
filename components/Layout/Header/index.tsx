import Navbar from "./Navbar";
import { ModeToggle } from "@/components/ModeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 py-1 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-y">
      <div className="container px-2 h-12 flex items-center justify-between border-x">
        <div></div>
        <div className="flex items-center gap-2 text-muted">
          <Navbar />
          {/* <ModeToggle /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
