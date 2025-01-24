import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaEnvelopeOpen, FaStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GrAttachment } from "react-icons/gr";
import { RiInboxArchiveLine } from "react-icons/ri";
import Link from "next/link";
import { Checkbox } from "../ui/checkbox";
import Item from "./item";

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

const ChatItems = (onIsCheck) => {
  
  return (
    <div>
      {messages.map((message, index) => (
        <Item message={message} index={index} onIsCheck={onIsCheck.onIsCheck}/>
      ))}
    </div>
  );
};

export default ChatItems;
