import React from "react";
import LoginForm from "./SignupForm";
import { Button } from "../ui/button";
import SocialButtons from "./SocialButtons";
import SignupForm from "./SignupForm";
import ResetPasswordForm from "./ResetPasswordForm";

export default function ResetPassword() {
  return (
    <React.Fragment>
      <div className="my-3 w-full mt-20">
        <p className="self-center text-center font-semibold text-[#101828] text-[24px] xl:text-3xl">
          Reset Your Password?
        </p>
        <p className="text-base font-medium text-center text-[#4B504E]">
          Enter your email for instructins.
        </p>
      </div>
      <ResetPasswordForm />
    </React.Fragment>
  );
}
