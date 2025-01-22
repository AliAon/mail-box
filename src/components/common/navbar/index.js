import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, EllipsisVertical, FolderMinus, NotebookPen, Tag } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import SearchBox from "@/components/search-box";

export function Navbar({ toggleSidebar }) {
  return (
    <div className="h-[72px] px-2 md:px-4 flex items-center justify-between">
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
        <SearchBox />
      </div>

      <div className="flex items-center gap-4">
        <div className="xl:flex items-center space-x-2 hidden">
          <Label
            htmlFor="dark-mode"
            className="text-sm font-medium text-[#858D9D] cursor-pointer"
          >
            Dark Mode
          </Label>
          <Switch id="dark-mode" />
        </div>
        <div className="xl:flex items-center space-x-2 hidden">
          <NotebookPen  color="#858d9d"/> 
        </div>
        <div className="xl:flex items-center space-x-2 hidden">
          <FolderMinus color="#858d9d"/> 
        </div>
        <div className="xl:flex items-center space-x-2 hidden">
          <Tag color="#858d9d"/> 
        </div>
       
         

        <div className="hidden md:block">
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className=" p-2 bg-white"
            >
              <div className="flex items-center space-x-2 cursor-pointer">
                <EllipsisVertical className="h-8 w-8 opacity-50" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
