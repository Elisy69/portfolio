import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import IconLanguage from "../assets/svg/IconLanguage";
import { useLanguage } from "../store/store";

function LanguageMenu() {
  const [switchToRussian, switchToEnglish] = useLanguage((state) => [
    state.switchToRussian,
    state.switchToEnglish,
  ]);

  return (
    <Menu as="div" className="relative mr-2">
      <Menu.Button className="flex cursor-pointer items-center justify-center rounded-lg border border-[#2E254D] hover:border-night-theme-primary active:outline active:outline-night-theme-accent p-2 text-left ">
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
        <Menu.Items className="absolute w-fit mt-1 right-0 origin-top-right rounded-md bg-night-theme-primary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => switchToEnglish()}
                  className={`${
                    active
                      ? "bg-night-theme-accent text-night-theme-bg"
                      : "text-night-theme-text"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  English
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => switchToRussian()}
                  className={`${
                    active
                      ? "bg-night-theme-accent text-night-theme-bg"
                      : "text-night-theme-text"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Russian
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
