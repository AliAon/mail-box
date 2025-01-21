"use client";
import OTPVerification from "@/components/AuthForm/otp-verification";

export default function OTP() {
  return (
    <>
        {/* <AuthLayout> */}
      <p className="self-center text-center font-semibold text-[#101828] text-[24px] xl:text-3xl mt-20">
        OTP Verification
      </p>
      <OTPVerification />
      </>
 
    // </AuthLayout>
  );
}
