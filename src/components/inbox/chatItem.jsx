import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaEnvelopeOpen, FaStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GrAttachment } from "react-icons/gr";
import { RiInboxArchiveLine } from "react-icons/ri";
import Link from "next/link";
import { Checkbox } from "../ui/checkbox";

const messages = [
  {
    id: 1,
    profile: "/assets/png/profile-online.png", // Replace with the actual profile image path
    title: "Lorem ipsum is",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of...",
    date: "20 Mar",
  },
  {
    id: 1,
    profile: "/assets/png/profile-online.png", // Replace with the actual profile image path
    title: "Lorem ipsum is",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of...",
    date: "20 Mar",
  },
  {
    id: 1,
    profile: "/assets/png/profile-online.png", // Replace with the actual profile image path
    title: "Lorem ipsum is",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of...",
    date: "20 Mar",
  },
  {
    id: 1,
    profile: "/assets/png/profile-online.png", // Replace with the actual profile image path
    title: "Lorem ipsum is",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of...",
    date: "20 Mar",
  },
  {
    id: 1,
    profile: "/assets/png/profile-online.png", // Replace with the actual profile image path
    title: "Lorem ipsum is",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of...",
    date: "20 Mar",
  },
  {
    id: 1,
    profile: "/assets/png/profile-online.png", // Replace with the actual profile image path
    title: "Lorem ipsum is",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of...",
    date: "20 Mar",
  },
  {
    id: 1,
    profile: "/assets/png/profile-online.png", // Replace with the actual profile image path
    title: "Lorem ipsum is",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of...",
    date: "20 Mar",
  },
  {
    id: 1,
    profile: "/assets/png/profile-online.png", // Replace with the actual profile image path
    title: "Lorem ipsum is",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of...",
    date: "20 Mar",
  },
  {
    id: 1,
    profile: "/assets/png/profile-online.png", // Replace with the actual profile image path
    title: "Lorem ipsum is",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of...",
    date: "20 Mar",
  },
  {
    id: 1,
    profile: "/assets/png/profile-online.png", // Replace with the actual profile image path
    title: "Lorem ipsum is",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of...",
    date: "20 Mar",
  },
  {
    id: 1,
    profile: "/assets/png/profile-online.png", // Replace with the actual profile image path
    title: "Lorem ipsum is",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of...",
    date: "20 Mar",
  },
  {
    id: 1,
    profile: "/assets/png/profile-online.png", // Replace with the actual profile image path
    title: "Lorem ipsum is",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of...",
    date: "20 Mar",
  },
];

const ChatItem = (onIsCheck) => {
  const [checkStar, setCheckStar] = useState(false);
  const [checkArchive, setCheckArchive] = useState(onIsCheck.onIsCheck); // Assuming onIsCheck contains the initial state

  const handleCheckArchiveChange = () => {
    setCheckArchive(!checkArchive);
  };

  // Update checkboxes based on onIsCheck.onIsCheck
  useEffect(() => {
    setCheckArchive(onIsCheck.onIsCheck);
  }, [onIsCheck.onIsCheck]);
  return (
    <div>
  {messages.map((message, index) => (
        <div key={index} className="relative group">
          <div className="flex group-hover:bg-gray-200 px-6 cursor-pointer items-center justify-between hover:border-b hover-border-t border-b border-t border-gray-300 py-4">
            <div className="flex items-center gap-4">
              {/* Checkbox for each message */}
             
                  <Checkbox 
                          checked={checkArchive} // Make this controlled based on checkArchive state
                          onChange={handleCheckArchiveChange}
                           />
              <button onClick={() => setCheckStar((prev) => !prev)} variant={"ghost"}>
                {checkStar ? (
                  <FaStar color="#ffea92" />
                ) : (
                  <FaStar color="#e3e3e3" />
                )}
              </button>
              <Image
                src={message.profile}
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
              <Link href={"/dashboard/chats"}>
                <p className="text-sm font-semibold text-gray-800">{message.title}</p>
                <p className="text-[15px] text-gray-500">{message.description}</p>
              </Link>
            </div>
            <p className="text-sm text-gray-900">{message.date}</p>
          </div>

          {/* Popup item */}
          <div className="absolute right-0 top-0 bottom-0 px-4 bg-gray-200 gap-8 items-center border-b border-t border-gray-300 hidden group-hover:flex">
            <button className="bg-[#e3e3e3] border border-gray-400 px-6 text-sm rounded-sm hover:border-b hover-border-t text-[#747070] hover:bg-gray-300">
              Subscribe
            </button>
            <div className="flex items-center cursor-pointer gap-x-2">
              <RiInboxArchiveLine size={25} color="grey" className="cusor-pointer" />
              <FaEnvelopeOpen size={20} color="grey" className="cusor-pointer" />
              <MdDelete size={20} color="grey" className="cusor-pointer" />
              <GrAttachment size={20} color="grey" className="cusor-pointer" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatItem;
