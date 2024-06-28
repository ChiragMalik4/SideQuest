import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../assets/Logo/Logo.svg";
import { navigation } from "../constants/index.js";
import Button1 from "./Buttons/Button1";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed left-0 top-0 w-full z-50
  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm
  ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-5 max-lg:py-4">
        <a className="flex width-[12rem] xl:mr-2" href="#hero" alt="SideQuest">
          <img className="rounded-full" src={Logo} width={60} height={60} />
          <h1 className="text-4xl pt-2 font-futuristic ml-4 font-bold">
            SideQuest
          </h1>
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0
         bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div
            className="relative z-2 flex flex-col
            items-center justify-center m-auto lg:flex-row"
          >
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative
              font-code text-2xl uppercase text-n-1
              transition-colors hover:text-color-5
              ${item.onlyMobile ? "lg:hidden" : ""}
              px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold
              ${
                item.url === pathname.hash
                  ? "z-2 lg:text-n-1"
                  : "lg:text-n-1/50"
              } lg:leading-5 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50
        transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </a>

        <Button1
          className="hidden lg:block"
          href="#login"
          hovertext="Namaste"
          hovertextClass="left-[1rem] top-[0.5rem] text-white"
          animation={true}
        >
          Sign in
        </Button1>

        <Button1
          className="ml-auto lg:hidden p-4 border-none bg-white"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} color="black" />
        </Button1>
      </div>
    </div>
  );
};

export default Header;
