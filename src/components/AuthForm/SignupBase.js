import React, { useState } from "react";
import SocialButtons from "./SocialButtons";
import SignupForm from "./SignupForm";
import SignupEmailForm from "./SignupEmailForm";
import email_to from "../../../public/assets/jpg/email_to.jpg"
import personal_info from "../../../public/assets/png/personal_info.png";
import Image from "next/image";

export default function SignupBase() {
  const [currentFields, setNextFields] = useState(false);
  console.log("currentFields",currentFields)
  return (
    <div >
      <div className="my-3">
        <p className="self-center text-center font-semibold text-[#101828] text-[24px] xl:text-3xl">
          Create and account
        </p>
        <p className="text-base font-medium text-center text-[#4B504E]">
          Sign up and get 30 days free trial
        </p>
      </div>

      {/* Login Form */}
      {!currentFields ? <SignupForm onSetNextFields={setNextFields} /> : <SignupEmailForm />}

      <div className="flex  w-full my-3 items-center">
        <div className="w-full">
          <div className="my-2 border border-[#DDE1DF] w-full"></div>
        </div>
        <div>
          <p className="text-md text-[#090F0D] mx-4 font-medium">OR</p>
        </div>
        <div className="w-full">
          <div className="my-2 border border-[#DDE1DF] w-full"></div>
        </div>
      </div>
      {/* Social Login */}
      <SocialButtons />
    </div>
  );
}
