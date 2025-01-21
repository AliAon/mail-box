import React, { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Button } from "@headlessui/react";

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
  }, {
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
  }, {
    id: 1,
    profile: "/assets/png/profile-online.png", // Replace with the actual profile image path
    title: "Lorem ipsum is",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of...",
    date: "20 Mar",
  }, {
    id: 1,
    profile: "/assets/png/profile-online.png", // Replace with the actual profile image path
    title: "Lorem ipsum is",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of...",
    date: "20 Mar",
  }, {
    id: 1,
    profile: "/assets/png/profile-online.png", // Replace with the actual profile image path
    title: "Lorem ipsum is",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of...",
    date: "20 Mar",
  },
];

const ChatItem = () => {
    const [checkStar,setCheckStar]=useState(false)
  return (
    <div >
      {messages.map((message) => (
        <div
          key={message.id}
          className="flex items-center justify-between border-b border-t border-gray-200 py-4"
        >
          <div className="flex items-center gap-4">
            <input type="checkbox" className="h-4 w-4" />
            <Button onClick={()=>setCheckStar((pre)=>!pre)} varient={'gost'}>
            {checkStar ? <FaStar  color="#e3e3e3" />: <FaStar  color="#ffea92" />}

            </Button>
            <Image
              src={message.profile}
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-semibold text-gray-800">
                {message.title}
              </p>
              <p className="text-sm text-gray-500">{message.description}</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">{message.date}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatItem;
