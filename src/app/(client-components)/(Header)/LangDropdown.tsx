"use client";

import { Popover, Transition } from "@headlessui/react";
import { GlobeAltIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { FC, Fragment, useState } from "react";
import { siteConfig } from "@/config/site";

interface LangDropdownProps {
  panelClassName?: string;
  className?: string;
}

const LangDropdown: FC<LangDropdownProps> = ({
  panelClassName = "top-full right-0 max-w-sm w-64",
  className = "hidden md:flex",
}) => {
  const [activeLanguage, setActiveLanguage] = useState(siteConfig.defaultLanguage);

  const handleLanguageChange = (langCode: string, close: () => void) => {
    setActiveLanguage(langCode);
    // TODO: Implement actual language switching with i18n
    close();
  };

  return (
    <Popover className={`LangDropdown relative ${className}`}>
      {({ open, close }) => (
        <>
          <Popover.Button
            className={`
              ${open ? "" : "text-opacity-80"}
              group self-center h-10 sm:h-12 px-3 py-1.5 inline-flex items-center text-sm text-gray-800 dark:text-neutral-200 font-medium hover:text-opacity-100 focus:outline-none`}
          >
            <GlobeAltIcon className="w-5 h-5 opacity-80" />
            <span className="ml-2 hidden sm:inline">
              {siteConfig.languages.find((l) => l.code === activeLanguage)?.name || "English"}
            </span>
            <ChevronDownIcon
              className={`${open ? "-rotate-180" : "text-opacity-70"}
                ml-1 h-4 w-4 group-hover:text-opacity-80 transition ease-in-out duration-150`}
              aria-hidden="true"
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className={`absolute z-20 ${panelClassName}`}>
              <div className="p-4 rounded-2xl bg-white dark:bg-neutral-800 shadow-lg ring-1 ring-black ring-opacity-5">
                <h3 className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 mb-3">
                  Select Language
                </h3>
                <div className="grid gap-2">
                  {siteConfig.languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code, close)}
                      className={`flex items-center justify-between p-3 rounded-lg transition duration-150 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none ${activeLanguage === lang.code
                          ? "bg-gray-100 dark:bg-gray-700"
                          : ""
                        }`}
                    >
                      <div className="text-left">
                        <p className="text-sm font-medium">{lang.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {lang.description}
                        </p>
                      </div>
                      {activeLanguage === lang.code && (
                        <span className="text-primary-500">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default LangDropdown;
