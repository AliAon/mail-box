import FileUploadCard from "@/components/fileuploadcard";
import TextEditor from "@/components/TextEditor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BsFillSendFill } from "react-icons/bs";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

export default function Compose() {
  const [active, setActive] = useState(1);
  return (
    <div className="px-2 md:px-6 py-8 pb-6 bg-[#f2f6f9]">
      <h2 className="inter_SemiBold text-xl px-2">Compose New Message</h2>
      <form className=" w-full">
        <div className="px-2 py-2">
          <div className="relative">
            <Input
              type={"text"}
              className="w-full h-12 !text-[1rem] bg-[#f2f6f9] inter_SemiBold   border-gray-300 rounded-none"
              placeholder="To"
            />
          </div>
        </div>
        <div className="px-2 py-2">
          <div className="relative">
            <Input
              type={"text"}
              className="w-full h-12 !text-[1rem] bg-[#f2f6f9] inter_SemiBold   border-gray-300 rounded-none"
              placeholder="Subject"
            />
          </div>
        </div>
        <div className="px-2  py-2">
          <TextEditor />
        </div>

        <div className="px-2  py-2">
          <p className="text-sm text-gray-500 py-2 inter_SemiBold">Attachment</p>
          <FileUploadCard />
        </div>
        <div className="flex px-2 inter_SemiBold my-8 justify-start gap-x-3">
          <Button size={'lg'}  varient={"outline"}>
            <BsFillSendFill />
             Send
          </Button>
          <Button size={'lg'}  className="bg-[#6b6d79]">
            <RxCross2 size={60} />
            Discard
          </Button>
        </div>
      </form>
    </div>
  );
}
