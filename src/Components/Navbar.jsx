import { text } from "../language/languages";
import { useLanguage } from "../store/store";
import LanguageMenu from "./LanguageMenu";
import NavButton from "./NavButton";
import ThemeSwitch from "./ThemeSwitch";

function Navbar() {
  const lang = useLanguage((state) => [state.lang]);
  return (
    <nav className="fixed w-screen h-14 p-2 flex justify-between items-center backdrop-filter backdrop-blur-xl dark:bg-night-theme-secondary bg-day-theme-secondary">
      <menu className="flex gap-2 md:gap-12 md:text-6 ml-1 md:ml-4">
        <NavButton text={text["Home"][lang]} />
        <NavButton text={text["About"][lang]} />
        <NavButton text={text["Projects"][lang]} />
        <NavButton text={text["Contact"][lang]} />
      </menu>
      <menu className="flex mr-0.5 md:mr-2">
        <LanguageMenu />
        <ThemeSwitch />
      </menu>
    </nav>
  );
}

export default Navbar;
