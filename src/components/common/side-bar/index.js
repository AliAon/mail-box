import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Title from "../title";
import { GrDocument } from "react-icons/gr";
import { Badge, ChevronDownIcon, Inbox, SendHorizontal } from "lucide-react";
import { FaEnvelope, FaStar, FaTrash } from "react-icons/fa";
import profile_online from "../../../../public/assets/png/profile-online.png";
import offImg from "../../../../public/assets/png/off.png";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Button } from "@/components/ui/button";
import inboxImg from "../../../../public/assets/png/inbox.png";
import inboxImgActive from "../../../../public/assets/png/inbox_blue.png";
import sent from "../../../../public/assets/png/sent.png";
import sentActive from "../../../../public/assets/png/sentActive.png"
import star from "../../../../public/assets/png/star.png";
import starActive from "../../../../public/assets/png/starActive.png";
import drafts from "../../../../public/assets/png/drafts.png";
import draftsActive from "../../../../public/assets/png/draftsActive.png"
import trash from "../../../../public/assets/png/trash.png";
import trashActive from "../../../../public/assets/png/trashActive.png"
const lists = [
  {
    list: [
      {
        name: "Inbox",
        icon: inboxImg,
        activeIcon: inboxImgActive,
        href: "/dashboard",
        count: "12",
      },

      {
        name: "Sent",
        icon: sent,
        activeIcon: sentActive,
        href: "/dashboard/sent",
      },
      {
        name: "Important",
        icon: star,
        activeIcon: starActive,
        href: "/dashboard/important",
        count: "01",
      },
      {
        name: "Drafts",
        icon: drafts,
        activeIcon: draftsActive,
        href: "/dashboard/draft",
      },
      {
        name: "Trash",
        icon: trash,
        activeIcon: trashActive,
        href: "/dashboard/trash",
      },
    ],
  },
];

const chatParticipants = [
  {
    id: 1,
    name: "James J. Boungeols",
    role: "CEO Expert",
    profileImage: profile_online,
  },
  {
    id: 2,
    name: "Sarah L. Connor",
    role: "Marketing Manager",
    profileImage: profile_online,
  },
];

export function SideBar({ isOpen, toggleSidebar, setIsOpen }) {
  const router = useRouter();

  const handleClick = () => {
    if (isOpen && window.innerWidth < 786) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className={`w-[80%] md:w-[40%] fixed left-0 top-0 flex flex-col bg-white h-screen transition-all  z-10 duration-300 ${
        isOpen
          ? "lg:w-[272px] -translate-x-0 lg:translate-x-0 "
          : "-translate-x-full lg:translate-x-0 lg:w-[70px] items-center px-0"
      }`}
    >
      <div
        className={`flex items-center justify-between py-[23px] ${
          isOpen ? "pl-8 pr-4" : "px-6"
        }   bg-primary gap-3 `}
      >
        {/* <Logo isOpen={isOpen} /> */}
        {isOpen ? (
          <Title
            title="Mail Box"
            heading="h5"
            className="text-white "
            fontFamily="Inter_SemiBold"
            color="white"
          />
        ) : (
          ""
        )}
        <Image
          src={"/assets/png/icon1.png"}
          alt=""
          width={25}
          height={25}
          className={`w-[25px] float-right cursor-pointer transition-all duration-300 ${
            isOpen ? "" : "rotate-180"
          }`}
          onClick={toggleSidebar}
        />
      </div>
      <div
        className={`overflow-y-auto  no-scrollbar border-r ${
          isOpen ? "" : ""
        } h-[calc(100vh-61px)] no-scrollbar pb-20`}
      >
        {lists.map((item, index) => (
          <div key={index} className="mt-5">
            <ul>
              {item.list.map((item, index) => {
                const isActive = router.pathname === item.href;

                return item.href ? (
                  <Link
                    href={item.href}
                    key={index}
                    onClick={handleClick}
                    className={`group flex items-center justify-between border-white border-4 gap-4 hover:bg-gray-200 hover:border-gray-200 hover:border-l-[#7f63f4] hover:border-l-4   pl-6 pr-4 cursor-pointer ${
                      isActive
                        ? "border-l-4  border-t-4 border-b-4 border-r-4  border-t-transparent border-b-transparent border-r-transparent border-l-[#7f63f4] "
                        : ""
                    }  ${isOpen ? "py-5" : "py-5"}`}
                  >
                    <div className="flex items-center gap-4">
                      {isActive ? (
                        <Image src={item.activeIcon} width={20} height={20} alt="" />
                      ) : (
                        <Image
                          src={item.icon}
                          width={20}
                          height={20}
                          alt=""
                        />
                      )}

                      <p
                        className={`text-[15px] hover:text-[#0a58ca] inter_SemiBold ${
                          isActive ? "text-primary" : "text-[#747070]"
                        } ${isOpen ? "block" : "hidden"}`}
                      >
                        {item.name}
                      </p>
                    </div>

                    <div
                      className={`count-data ${isOpen ? "block" : "hidden"}`}
                    >
                      {item.count && (
                        <div className={`w-fit float rounded px-2 flex justify-end py-1 ${ item.count === '12' ? "bg-[#3587d0]" : "bg-[#258373]"}   text-white font-bold`}>
                          <p className="text-xs">{item.count}</p>
                        </div>
                      )}
                    </div>
                  </Link>
                ) : null;
              })}
            </ul>
          </div>
        ))}

        {/* Categories */}
        <div className={`my-4 ${isOpen ? "block" : "hidden"}`}>
          <Disclosure as="div" defaultOpen={true}>
            <DisclosureButton className="group flex p-4 w-full bg-[#f1eeff]  items-center justify-between">
              <p className="inter_SemiBold text-[15px] text-[#747070] ">
                Categories
              </p>

              <ChevronDownIcon className="size-6 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel
              transition
              className="origin-top p-6  transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
            >
              <ul>
                <li className="mb-2">
                  <Link
                    href="/dashboard/amsterdam"
                    className="text-[15px] mb-3 inter_SemiBold text-[#747070]"
                  >
                    Amsterdam
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/rotterdam"
                    className="text-[15px]  inter_SemiBold text-[#747070]"
                  >
                    Rotterdam
                  </Link>
                </li>
              </ul>
            </DisclosurePanel>
          </Disclosure>
        </div>

        {/* online */}
        <div className={`${isOpen ? "block" : "hidden"} bg-[#f1eeff] p-4`}>
          <div className="flex justify-between">
            <p className="inter_SemiBold text-[15px]">Chats</p>
            <span className="flex font-semibold text-[15px] items-center">
              <GoDotFill color="green" /> Online
            </span>
          </div>
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"} p-4 flex flex-col gap-10`}
        >
          {/* chatParticipants */}

          <ul className="flex my-4 flex-col gap-y-5">
            {chatParticipants.map((participant) => (
              <li key={participant.id} className="flex gap-x-3 items-center">
                <Image
                  src={participant.profileImage}
                  width={50}
                  height={50}
                  alt={`${participant.name}'s profile`}
                />
                <div>
                  <p className="text-sm inter_SemiBold text-gray-500">
                    {participant.name}
                  </p>
                  <span className="text-[10px] inter_SemiBold text-gray-500">
                    {participant.role}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          {/* Compose */}

          <Link href={"/dashboard/compose"}>
            <Button className="py-6 text-[15px] inter_SemiBold w-full bg-primary ">
              <FaEnvelope />
              Compose
            </Button>
          </Link>
          <div className="flex gap-2">
            <Image width={30} height={30} src={offImg} alt="" className="w-[40px] h-[40px]" />
            <div className="flex flex-col">
              <p className="text-sm text-[#212529]">Antonie Piedanna</p>
              <p className="text-sm text-[#212529]">antoine@icloud.com</p>
            </div>
          </div>
        </div>

        {/* account */}
      </div>
    </div>
  );
}
