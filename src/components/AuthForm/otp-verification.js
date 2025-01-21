import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import OtpTimer from "../common/timer";
import { useTimer } from "react-timer-hook";
import Link from "next/link";
const OtpInput = dynamic(() => import("react-otp-input"), { ssr: false });

export default function OTPVerification() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  const { seconds, minutes, restart } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.warn("onExpire called"),
  });
  const [otp, setOtp] = useState("");

  return (
    <form className=" mx-auto w-full">
      <div className=" py-4">
        <div className="text-center">
          <Label>One time password (OTP) has been sent to (email.com)</Label>
        </div>
        <div className="text-center">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>-</span>}
            inputStyle={{
              border: "1px solid #DDE1DF",
              width: "50px",
              height: "50px",
              borderRadius: "8px",
            }}
            containerStyle={{
              marginTop: "10px",
              marginBottom: "10px",
            }}
            renderInput={(props) => <input {...props} />}
          />
        </div>

       <Link href={'/auth/new-password'}> <Button className="bg-primary mt-2 w-full">Send OTP</Button></Link>
        <Button
          onClick={() => {
            const time = new Date();
            time.setSeconds(time.getSeconds() + 300);
            restart(time);
          }}
          type="button"
          variant="outline"
          className="w-full mt-2 bg-[#F0F4F3] border-[#DDE1DF] border"
        >
          Resend OTP
        </Button>
      </div>
      <p className="text-center flex items-center gap-2 justify-center">
        Resend OTP:
        <span className="text-primary">
          <span style={{ fontSize: "20px" }}>
            <span>{minutes}</span>:<span>{seconds}</span>
          </span>
        </span>
      </p>
    </form>
  );
}
