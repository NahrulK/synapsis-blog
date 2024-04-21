import React, { FC } from "react";
import Logo from "../shared/Logo/Logo";
import SwitchDarkMode from "../shared/SwitchDarkMode/SwitchDarkMode";
import ButtonPrimary from "../shared/Button/ButtonPrimary";
import ButtonSecondary from "../shared/Button/ButtonSecondary";
import MenuBar from "../shared/MenuBar/MenuBar";


export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className="nc-Header2 sticky top-0 w-full left-0 right-0 z-40 bg-white dark:bg-neutral-900 nc-header-bg shadow-sm dark:border-b dark:border-neutral-700">
       <div className={`nc-MainNav2 relative z-10`}>
      <div className="container">
        <div className="h-20 flex justify-between space-x-4 xl:space-x-8">
          <div className="self-center flex justify-start flex-grow space-x-3 sm:space-x-8 lg:space-x-10">
            <Logo />
           
          </div>
          <div className="flex-shrink-0 flex justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
            <div className="hidden items-center xl:flex space-x-2">
              
              <SwitchDarkMode />
              <ButtonPrimary
                href="/users/create"
                sizeClass="px-4 py-2 sm:px-5"
              >
                Create User
              </ButtonPrimary>
              <ButtonSecondary
                href="/users/list"
                sizeClass="px-4 py-2 sm:px-5"
              >
                Users List
              </ButtonSecondary>
            </div>
            <div className="flex items-center space-x-1 xl:hidden">
              <ButtonPrimary
             
                sizeClass="px-4 py-2 sm:px-5"
              >
                Create User
              </ButtonPrimary>
              <MenuBar />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
