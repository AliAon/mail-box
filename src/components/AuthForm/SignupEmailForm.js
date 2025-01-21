import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import SocialButtons from "./SocialButtons";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Checkbox } from "@radix-ui/react-checkbox";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function SignupEmailForm() {
  const [phone, setPhone] = useState();
    const [type,changeType]=useState("password")
  
  return (
    <>
      <form className=" w-full ">
        <div className=" py-1">
          <Label>Full Name</Label>
          <Input type="text" className="w-full" placeholder="Type name" />
        </div>
        <div className=" py-1">
          <Label>Phone number</Label>
          <PhoneInput
            country={"us"}
            value={phone}
            inputStyle={{
              width: "100%",
            }}
            inputClass="w-full"
            onChange={(phone) => setPhone(phone)}
          />
        </div>
        <div className=" py-1">
          <Label>Password</Label>
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
        
          <div className="flex items-center space-x-2">
            <div class="flex items-center ">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-3 h-3  text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                class="ms-2 text-sm font-medium text-[#4B504E] dark:text-gray-300"
              >
                I agree to the Terms & Privacy
              </label>
            </div>
          </div>
          <Button className="bg-primary mt-2 w-full">Create Account</Button>
        </div>
      </form>

     
    </>
  );
}
