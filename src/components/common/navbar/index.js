import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import ThemeSwitch from "@/components/theme-switch";
import { Switch } from "@headlessui/react";
export function Navbar({ toggleSidebar }) {
  const { setTheme } = useTheme();
  // const handleCheckedChange = (checked) => {
  //   setTheme(checked ? "dark" : "light");
  // };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleCheckedChange = (checked) => {
    setIsDarkMode(checked);
    // Additional logic for theme toggle can be added here.
  };

  return (
    <div className="h-[65px] px-2 pt-2 md:px-6 flex items-center justify-between">
      {/* <div className="block md:hidden">
        <Image
          src={"/assets/png/logo.png"}
          alt=""
          width={756}
          height={117}
          className="w-[188px]"
        />
      </div> */}
      <div className="hidden md:flex items-center space-x-2">
        {/* <SearchBox /> */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            className="search placeholder:text-[#747070]"
          />
          <img src="./assets/png/search.png" alt="" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="xl:flex items-center gap-x-6 space-x-2 hidden">
         

          <div>
            <img src="./assets/png/nav-icon1.png" alt="" width="20px" />
          </div>
          <div>
            <img src="./assets/png/nav-icon3.png" alt="" width="25px" />
          </div>
          <div>
            <img src="./assets/png/nav-icon4.png" alt="" width="25px" />
          </div>
          <div>
            <img src="./assets/png/nav-icon5.png" alt="" width="20px" />
          </div>
          <div>
            <img src="./assets/png/nav-icon2.png" alt="" width="6px" />
          </div>
        </div>
        
        <Image
          src={"/assets/svg/side-bar/Collaps.svg"}
          alt=""
          width={25}
          height={25}
          className={`w-[30px] md:w-[25px] cursor-pointer transition-all duration-300 block lg:hidden`}
          onClick={toggleSidebar}
        />
      </div>
    </div>
  );
}
