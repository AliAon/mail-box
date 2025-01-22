import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // ShadCN Button component
import { Input } from "@/components/ui/input"; // ShadCN Input component
import { ScrollArea } from "@/components/ui/scroll-area"; // ShadCN ScrollArea component
import { FiMinimize2, FiMaximize2 } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import Image from "next/image";
import chtimg from "../../public/assets/png/message.png"

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you?", sender: "bot" },
    { id: 2, text: "I have a question about your services.", sender: "user" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim() !== "") {
      setMessages((prev) => [
        ...prev,
        { id: prev.length + 1, text: inputValue, sender: "user" },
      ]);
      setInputValue("");
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-full text-white"
        >
          <Image src={chtimg}  alt="" width={50} height={50}/>
        </button>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <div className="w-80 h-[500px] bg-white shadow-lg rounded-lg flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b">
            <HiMenuAlt3 size={20} />
            <h3 className="text-sm font-semibold">Lorem Ipsum</h3>
            <div className="flex items-center gap-2">
              <FiMaximize2 size={20} className="cursor-pointer" />
              <AiOutlineClose
                size={20}
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>

          {/* Messages Area */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-2">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`p-2 text-sm rounded-lg ${
                      message.sender === "user"
                        ? "bg-primary text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="flex items-center px-4 py-2 border-t gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Message Lorem ..."
              className="flex-1"
            />
            <Button
              onClick={handleSend}
              className="p-2 bg-gray-200 text-gray-500 rounded-full"
              disabled={!inputValue.trim()}
            >
              <IoMdSend size={30} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
