import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="sticky top-1 z-50 border-y">
      <div className="container px-2 h-12 flex items-center justify-between border-x">
        <div></div>
        <div className="text-muted">
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
