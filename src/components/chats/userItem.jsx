import Image from "next/image";
import React from "react";
import hover_link from "../../../public/assets/png/hover-link.png"

export default function UserItem({message,index}) {
  return (
    <div
      key={message.id}
      className={`hover:bg-primary group ${ index===0 ? "bg-primary text-white" : "text-gray-500"}  group cursor-pointer    hover:text-white p-4 py-8 flex justify-between items-start `}
    >
      {/* Profile & Message Info */}
      <div className="flex items-start gap-2">
        {/* Profile Picture */}
        <Image
          src={message.profile}
          alt="Profile"
          width={50}
          height={50}
          className="rounded-full border-2 border-white"
        />

        {/* Text Content */}
        <div > 
          <h3 className={`text-xs inter_SemiBold ${ index===0 ? "bg-primary text-white" : "text-gray-500"}   group-hover:text-white`}>
            {message.title}
          </h3>
          <p className={`text-xs my-1 inter_SemiBold ${ index===0 ? "bg-primary text-black" : "text-gray-500"}   group-hover:text-black`}>
            {message.subtitle}
          </p>
          <p className={`text-xs inter_SemiBold ${ index===0 ? "bg-primary text-white" : "text-gray-500"}   group-hover:text-white`}>
            {message.description}
          </p>
        </div>
      </div>

      {/* Date & Attachment */}
      <div className="flex flex-col items-end gap-2">
        {/* Date */}
        <p className="text-[10px] inter_SemiBold">{message.date}</p>
        <Image src={hover_link} alt="" 
        
        
        className={`  ${ index===0 ? 'filter brightness-0 invert':""} group-hover:filter group-hover:brightness-0 group-hover:invert`}
        
        
        width={14} height={14}  />
      </div>
    </div>
  );
}
