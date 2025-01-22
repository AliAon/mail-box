import ChatCard from "@/components/chats/chart-card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import React from "react";
import { HiMiniArrowLeft } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { PiArrowBendUpLeftFill, PiArrowBendUpRightFill, PiPrinterLight } from "react-icons/pi";
import { RxArrowRight } from "react-icons/rx";
import { TbDownload } from "react-icons/tb";

export default function Chats() {
  return (
    <div>
      <div className="grid grid-cols-12  items-center  bg-[#f2f6f9]">
        <div className="col-span-4 border h-full">
          <div className="flex justify-between bg-[#f2f6f9]  h-[76px] drop-shadow-lg px-4 py-4 w-full  items-center">
            <div>
              <h2 className="text-[#747070]">All</h2>
            </div>
            <div className="flex gap-x-2">
              <Select>
                <SelectTrigger className="w-[100px] bg-[#f3f4f6]">
                  <SelectValue
                    className="text-[#747070] font-bold"
                    placeholder="By Date"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light" className="text-[#747070] ">
                    Light
                  </SelectItem>
                  <SelectItem value="dark" className="text-[#747070]">
                    Dark
                  </SelectItem>
                  <SelectItem value="system" className="text-[#747070]">
                    System
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[100px] bg-[#f3f4f6]">
                  <SelectValue
                    className="text-[#747070] font-bold"
                    placeholder="Newest"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light" className="text-[#747070]">
                    Light
                  </SelectItem>
                  <SelectItem value="dark" className="text-[#747070]">
                    Dark
                  </SelectItem>
                  <SelectItem value="system" className="text-[#747070]">
                    System
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <ChatCard/>
            </div>
        </div>
        <div className="col-span-8 relative border h-full">
          <div className="p-2 bg-[#f2f6f9] h-18 drop-shadow-lg">
            <ul className="flex flex-col gap-y-5">
              <li className="flex gap-x-3 justify-between items-center">
                <div className="flex gap-x-3 items-center">
                <HiMiniArrowLeft size={30} color="#6b7280" />
                <Image
                  src={"/assets/png/profile-online.png"}
                  width={60}
                  height={60}
                  alt={`'s profile`}
                />
                <div>
                  <p className="text-md inter_SemiBold text-[#7d64f3]">
                    Lorem ipsum is
                  </p>
                  <span className="text-sm inter_SemiBold text-[#212529]">
                    20Mar 2018
                  </span>
                </div>
                </div>
                <div className="flex items-center cursor-pointer gap-x-2">
                         <PiPrinterLight size={25} color="#212529" className="cusor-pointer"  />
                      <PiArrowBendUpLeftFill size={25} color="#212529" className="cusor-pointer" />
                      <RxArrowRight size={20} color="#212529" className="cusor-pointer"/>
                      <MdDelete size={25} color="#212529"  className="cusor-pointer"/>
                      </div>
              </li>
            </ul>
          
          </div>
          <div className="px-6 py-6">
            <p className="text-md font-semibold text-primary">
              Lorem Ipsum has been the indus
            </p>
            <p className="text-xs text-gray-500 inter_SemiBold">
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s
            </p>
            <br />
            <p className="text-sm inter_SemiBold text-gray-500">
                Lorem ipsum,</p>
            <br />

            <p className="text-xs text-gray-500 inter_SemiBold">
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it. <br />
              <br />
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the
            </p>
            <div className="my-4">

            <p className="text-sm inter_SemiBold text-gray-500">
            Lorem ipsum
            </p>
            <p className="text-xs text-gray-500 inter_SemiBold">
            Lorem ipsum
            </p>
            </div>
            <hr/>
            <div className="my-4">
            <p className="text-sm inter_SemiBold text-gray-500">
            Lorem ipsum
            </p>
            <p className="text-xs text-gray-500 inter_SemiBold">
            Lorem ipsum
            </p>
            </div>
          
            <hr/>
          </div>
          <div className="flex px-6 my-4 gap-x-2">
            <Button className=" inter_SemiBold "><PiArrowBendUpLeftFill /> Reply</Button>
            <Button className="inter_SemiBold "><PiArrowBendUpRightFill />
            Forword</Button>
          </div>
          <TbDownload size={25} className="absolute right-10 bottom-28" color="#6b7280"/>
        </div>
      </div>
    </div>
  );
}
