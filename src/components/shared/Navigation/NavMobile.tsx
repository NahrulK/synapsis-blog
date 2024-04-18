"use client";

import React from "react";

import { Disclosure } from "@/app/headlessui";

import { ChevronDownIcon } from "@heroicons/react/24/solid";

import Link from "next/link";
import Logo from "../Logo/Logo";
import SwitchDarkMode from "../SwitchDarkMode/SwitchDarkMode";
import ButtonClose from "../ButtonClose/ButtonClose";
import ButtonPrimary from "../Button/ButtonPrimary";

export interface NavMobileProps {
  onClickClose?: () => void;
}

const NavMobile: React.FC<NavMobileProps> = ({ onClickClose }) => {
  const _renderMenuChild = (
    itemClass = " pl-3 text-neutral-900 dark:text-neutral-200 font-medium "
  ) => {
    return <ul className="nav-mobile-sub-menu pl-6 pb-1 text-base"></ul>;
  };

  const renderMagnifyingGlassIcon = () => {
    return (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 22L20 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  return (
    <div className="overflow-y-auto w-full h-screen py-2 transition transform shadow-lg ring-1 dark:ring-neutral-700 bg-white dark:bg-neutral-900 divide-y-2 divide-neutral-100 dark:divide-neutral-800">
      <div className="py-6 px-5">
        <Logo />
        <div className="flex flex-col mt-5 text-slate-600 dark:text-slate-300 text-sm">
          <span>
            Discover the most outstanding articles on all topics of life. Write
            your stories and share them
          </span>

          <div className="flex justify-between items-center mt-4">
            <span className="block">
              <SwitchDarkMode className="bg-neutral-100 dark:bg-neutral-800" />
            </span>
            <div className="flex items-center justify-between py-6 px-5 space-x-2">
              <ButtonPrimary href={"/"} className="!px-10">
                Search Users..
              </ButtonPrimary>
            </div>
          </div>
        </div>
        <span className="absolute right-2 top-2 p-1">
          <ButtonClose onClick={onClickClose} />
        </span>
      </div>
    </div>
  );
};

export default NavMobile;
