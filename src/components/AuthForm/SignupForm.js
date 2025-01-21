import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/router";

export default function SignupForm({onSetNextFields}) {
  const router=useRouter()
  const onHandleNext=()=>{
    onSetNextFields(true)
  }
  return (
    <form className="2 w-full">
      <div className=" py-4">
        <Label>Email Address</Label>
        <Input
          type="email"
          className="w-full"
          required
          placeholder="Type email address"
        />
        <Button onClick={onHandleNext} 
        type="button"
        className="bg-primary mt-2 w-full">Next</Button>
      </div>
    </form>
  );
}
