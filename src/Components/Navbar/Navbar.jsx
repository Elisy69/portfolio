import { nanoid } from "nanoid";
import { forwardRef } from "react";
import LanguageMenu from "/src/Components/Navbar/LanguageMenu.jsx";
import NavButton from "/src/Components/Navbar/NavButton";
import ThemeSwitch from "/src/Components/Navbar/ThemeSwitch";
import { text } from "/src/language/languages.js";
import { useLanguage } from "/src/store/store.js";

const menuItems = ["Home", "About", "Projects", "Contact"];

const Navbar = forwardRef(function Navbar({ scrollToSection }, ref) {
  const lang = useLanguage((state) => [state.lang]);

  return (
    <nav className="z-10 fixed w-screen h-14 p-2 lg:pl-6 flex justify-between items-center opacity-90 dark:bg-night-theme-secondary bg-day-theme-secondary gap-2 md:gap-4 lg:gap-8 lg:w-3/5 lg:place-self-center lg:rounded-3xl lg:mt-2">
      {Object.keys(text)
        .filter((item) => menuItems.includes(item))
        .map((item, index) => {
          return (
            <NavButton
              key={nanoid()}
              text={text[item][lang]}
              onClick={() => scrollToSection(ref.current[index])}
            />
          );
        })}
      <LanguageMenu />
      <ThemeSwitch />
    </nav>
  );
});

export default Navbar;
