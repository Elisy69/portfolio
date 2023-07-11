import LanguageMenu from "./LanguageMenu";
import NavButton from "./NavButton";
import ThemeSwitch from "./ThemeSwitch";

function Navbar() {
  return (
    <nav className="p-2 flex gap-2 backdrop-filter backdrop-blur-xl bg-night-theme-secondary">
      <menu className="flex gap-2 md:gap-12 md:text-6">
        <NavButton text="Home" />
        <NavButton text="About" />
        <NavButton text="Projects" />
        <NavButton text="Contact" />
      </menu>
      <menu className="flex ml-auto">
        <LanguageMenu />
        <ThemeSwitch />
      </menu>
    </nav>
  );
}

export default Navbar;
