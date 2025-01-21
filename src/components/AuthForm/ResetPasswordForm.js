import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ResetPasswordForm() {
  return (
    <form className="w-full">
      <div className=" py-4">
        <Label>Registered Email</Label>
        <Input
          type="email"
          className="w-full"
          placeholder="Type email address"
        />
        <Link href={"/auth/otp"}>

        <Button className="bg-primary mt-2 w-full">Send OTP</Button>
        </Link>
        <Link href={"/"}>
          <Button
            variant="outline"
            className="w-full mt-2 bg-[#F0F4F3] border-[#DDE1DF] border"
          >
            Back to Login
          </Button>
        </Link>
      </div>
    </form>
  );
}
