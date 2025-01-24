import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import UserItem from "./userItem";

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
    <ScrollArea className="h-screen w-full border">
      <div className="flex flex-col  ">
        {messages.map((message, index) => (
          <UserItem key={index} index={index} message={message} />
        ))}
      </div>
    </ScrollArea>
  );
};

export default ChatCard;
