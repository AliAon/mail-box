import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import SocialButtons from "./SocialButtons";
import "react-phone-input-2/lib/style.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Link from "next/link";

export default function NewPassword() {
  const [phone, setPhone] = useState();
  const [type,changeType]=useState("password")
  return (
    <>
      <form className=" w-full">
        
        <div className=" py-1">
          <Label>New Password</Label>
          <div className="relative">
            <Input
              type={type}
              className="w-full"
              placeholder="Type password"
            />
            {type=="password"?(
              <FaRegEye  className="absolute right-2 top-3 cursor-pointer" onClick={()=>{
                changeType("text")
              }}/>
            ):(
              <FaRegEyeSlash className="absolute right-2 top-3 cursor-pointer" onClick={()=>{
                changeType("password")
              }}/>
            )}

          </div>
         
        </div>
        <div className=" py-1">
          <Label>Confirmation New Password</Label>
          <div className="relative">
            <Input
              type={type}
              className="w-full"
              placeholder="Type password"
            />
            {type=="password"?(
              <FaRegEye  className="absolute right-2 top-3 cursor-pointer" onClick={()=>{
                changeType("text")
              }}/>
            ):(
              <FaRegEyeSlash className="absolute right-2 top-3 cursor-pointer" onClick={()=>{
                changeType("password")
              }}/>
            )}

          </div>
         
        </div>
        <Link href={'/dashboard'} className=" py-1">
          <Button className="bg-primary mt-2 w-full">Submit</Button>
        </Link>
      </form>
  
    </>
  );
}
