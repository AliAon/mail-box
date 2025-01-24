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
import {
  PiArrowBendUpLeftFill,
  PiArrowBendUpRightFill,
  PiPrinterLight,
} from "react-icons/pi";
import { RxArrowRight } from "react-icons/rx";
import { TbDownload } from "react-icons/tb";
import chatsicon from "../../../public/assets/png/chatsicon.png";
import chatsarrow1 from "../../../public/assets/png/chatsarrow1.png";
import arrow_chat_right_white from "../../../public/assets/png/arrow_chat_right_white.png";
import link_white from "../../../public/assets/png/link_white.png";
import arrowright from "../../../public/assets/png/arrowright.png";
import trash from "../../../public/assets/png/trash.png";
import download from "../../../public/assets/png/download.png";

export default function Chats() {
  return (
    <div>
      <div className="grid grid-cols-12  items-center  bg-[#f2f6f9]">
        <div className="col-span-4 border ">
          <div className="flex justify-between bg-[#f2f6f9] px-6 h-[76px] drop-shadow-lg  py-4 w-full  items-center">
            <div className="pl-5">
              <h2 className="text-[#747070] inter_SemiBold">All</h2>
            </div>
            <div className="flex gap-x-2 ">
              <Select>
                <SelectTrigger className="w-fit px-1 inter_SemiBold bg-[#f2f6f9] text-[#747070]  border-0">
                  <SelectValue
                    className="text-[#747070] inter_SemiBold"
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
                <SelectTrigger className="w-fit px-1 inter_SemiBold bg-[#f2f6f9] text-[#747070]  border-0">
                  <SelectValue
                    className="text-[#747070] inter_SemiBold"
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
            <ChatCard />
          </div>
        </div>
        <div className="col-span-8  border h-full">
          <div className="p-2 bg-[#f2f6f9] h-18 drop-shadow-lg">
            <ul className="flex flex-col gap-y-5">
              <li className="flex gap-x-3 pr-6 justify-between items-center">
                <div className="flex gap-x-3 items-center">
                  <HiMiniArrowLeft size={25} color="#6b7280" />
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
                <div className="flex items-center gap-x-5  cursor-pointer ">
                  {/* <Image src={chatsicon} width={20} height={20} alt=""/>
                         <PiPrinterLight size={25} color="#212529" className="cusor-pointer"  />
                      <PiArrowBendUpLeftFill size={25} color="#212529" className="cusor-pointer" />
                      <RxArrowRight size={20} color="#212529" className="cusor-pointer"/>
                      <MdDelete size={25} color="#212529"  className="cusor-pointer"/> */}

                  <Image src={chatsicon} alt="" width={18} class="img" />
                  <Image
                    id="reply-img"
                    src={chatsarrow1}
                    alt=""
                    width={18}
                    class="img reply-img"
                  />
                  <Image
                    id="forward-img"
                    src={arrowright}
                    alt=""
                    width={18}
                    class="img forward-img"
                  />
                  <Image src={trash} alt="" width={15} class="img" />
                </div>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-12 p-6   gap-x-4 ">
            <div className="col-span-10">
              <div>
                <p className="text-md font-semibold text-primary">
                  Lorem Ipsum has been the indus
                </p>
                <p className="text-xs text-gray-500 inter_SemiBold">
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s
                </p>
                <br />
                <p className="text-sm inter_SemiBold text-gray-500">
                  Lorem ipsum,
                </p>
                <br />

                <p className="text-xs text-gray-500 inter_SemiBold">
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it. <br />
                  <br />
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the
                </p>
              </div>
            </div>
            <div className="col-span-2">
              <p className="text-xs text-gray-500 inter_SemiBold text-right">
                2:30AM
              </p>
            </div>
            <div className="col-span-12 relative">
              <div className="my-4">
                <p className="text-sm inter_SemiBold text-gray-500">
                  Lorem ipsum
                </p>
                <p className="text-xs text-gray-500 inter_SemiBold">
                  Lorem ipsum
                </p>
              </div>
              <hr />
              <div className="my-4">
                <p className="text-sm inter_SemiBold text-gray-500">
                  Lorem ipsum
                </p>
                <p className="text-xs text-gray-500 inter_SemiBold">
                  Lorem ipsum
                </p>
              </div>

              <hr />
              <Image
                src={download}
                width={18}
                height={18}
                className="absolute right-0 bottom-6"
              />
            </div>
          </div>
          <div className="flex px-6 my-4 gap-x-2">
            <Button className="inter_SemiBold ">
              <Image src={arrow_chat_right_white} width={15} /><span className="inter_SemiBold"> Reply</span>
            </Button>
            <Button className="inter_SemiBold ">
              <Image
                src={arrow_chat_right_white}
                className="scale-x-[-1]"
                width={15}
              />{" "}
             <span className="inter_SemiBold">  Forword
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
