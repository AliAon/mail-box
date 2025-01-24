import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import "react-phone-input-2/lib/style.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Link from "next/link";

export default function SignInForm() {
  const [phone, setPhone] = useState();
  const [type, changeType] = useState("password");
  return (
    <>
      <form className="w-[90%]">
        <div className=" py-2">
          <Input type="text" className="w-full  !px-0 !py-0 !text-[1.2rem] border-black  border-t-0 border-r-0 border-l-0 rounded-none  " placeholder="Email ID" />
        </div>

        <div className=" py-2 my-[25px] ">
          <div className="relative">
            <Input type={type} className="w-full !px-0 !text-[1.2rem] border-black border-t-0 border-r-0 border-l-0 rounded-none" placeholder="Password" />
            {type == "password" ? (
              <FaRegEye
                className="absolute right-2 top-3 cursor-pointer"
                onClick={() => {
                  changeType("text");
                }}
              />
            ) : (
              <FaRegEyeSlash
                className="absolute right-2 top-3 cursor-pointer"
                onClick={() => {
                  changeType("password");
                }}
              />
            )}
          </div>
        </div>
        <div className=" py-1">
          <Link href={"/dashboard"}>
            <Button className="bg-primary mt-2 py-6 text-2xl font-bold w-full">Log in</Button>
          </Link>
        </div>
      </form>
    

    
    </>
  );
}
