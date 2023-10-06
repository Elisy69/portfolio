import { Switch } from "@headlessui/react";
import IconMoon from "/src/assets/svg/IconMoon.jsx";
import IconSun from "/src/assets/svg/IconSun";
import { useTheme } from "/src/store/store";

function ThemeSwitch() {
  const [isLight, toggleTheme] = useTheme((state) => [
    state.isLight,
    state.toggleTheme,
  ]);

  return (
    <Switch
      checked={isLight}
      onClick={() => toggleTheme()}
      className="lg:mr-4 self-center bg-day-theme-accent outline-night-theme-accent dark:bg-night-theme-primary hover:outline outline-2  dark:outline-violet-900 relative inline-flex h-8 w-14 items-center rounded-full"
    >
      <div
        className={`${
          isLight ? "translate-x-1" : " translate-x-7"
        }  inline-block h-4 w-4 transform rounded-full bg-transparent transition pb-6`}
      >
        {isLight ? <IconSun /> : <IconMoon />}
      </div>
    </Switch>
  );
}

export default ThemeSwitch;
