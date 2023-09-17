import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import IconLanguage from "../../assets/svg/IconLanguage";
import { text } from "../../language/languages";
import { useLanguage } from "../../store/store";

function LanguageMenu() {
  const lang = useLanguage((state) => [state.lang]);
  const [switchToRussian, switchToEnglish] = useLanguage((state) => [
    state.switchToRussian,
    state.switchToEnglish,
  ]);

  return (
    <Menu as="div" className="ml-auto relative">
      <Menu.Button className="flex cursor-pointer items-center justify-center rounded-lg border dark:bg-[#201341] bg-[#C5B3F8] dark:border-[#2E254D] border-[#9981DC] hover:border-violet-900 dark:hover:border-violet-900 active:outline active:outline-violet-800 p-2 text-left ">
        <IconLanguage />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute w-fit mt-1 right-0 origin-top-right rounded-md dark:bg-night-theme-primary bg-day-theme-secondary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => switchToEnglish()}
                  className={`${
                    active
                      ? "dark:bg-night-theme-accent bg-violet-400 text-night-theme-bg"
                      : "dark:text-night-theme-text text-day-theme-text"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {text["English"][lang]}
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => switchToRussian()}
                  className={`${
                    active
                      ? "dark:bg-night-theme-accent bg-violet-400 text-night-theme-bg"
                      : "dark:text-night-theme-text text-day-theme-text"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {text["Russian"][lang]}
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default LanguageMenu;
