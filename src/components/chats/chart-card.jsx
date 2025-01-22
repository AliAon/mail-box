import React from "react";
import Image from "next/image";
import { GrAttachment } from "react-icons/gr";
import { ScrollArea } from "../ui/scroll-area";

const messages = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  profile: "/assets/png/profile-online.png", // Replace with actual image path
  title: "Lorem ipsum is",
  subtitle: "Lorem Ipsum has been the indus",
  description:
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  date: `20 Mar`,
}));

export const ChatCard = () => {
 

  return (
    <ScrollArea className="h-[450px] w-full border">
      <div className="flex flex-col  ">
        {messages.map((message) => (
          <div
            key={message.id}
            className="hover:bg-primary group cursor-pointer  text-gray-500  hover:text-white p-4 py-8 flex justify-between items-start rounded-md"
          >
            {/* Profile & Message Info */}
            <div className="flex items-start gap-4">
              {/* Profile Picture */}
              <Image
                src={message.profile}
                alt="Profile"
                width={50}
                height={50}
                className="rounded-full border-2 border-white"
              />

              {/* Text Content */}
              <div>
                <h3 className="text-xs inter_SemiBold text-gray-500  group-hover:text-white">
                  {message.title}
                </h3>
                <p className="text-xs my-1 inter_SemiBold text-gray-500  group-hover:text-black">
                  {message.subtitle}
                </p>
                <p className="text-xs inter_SemiBold text-gray-500  group-hover:text-white">
                  {message.description}
                </p>
              </div>
            </div>

            {/* Date & Attachment */}
            <div className="flex flex-col items-end gap-2">
              {/* Date */}
              <p className="text-xs inter_SemiBold">{message.date}</p>

              {/* Attachment Icon */}
              <GrAttachment size={16}  />
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default ChatCard;
