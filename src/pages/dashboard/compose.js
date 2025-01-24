import FileUploadCard from "@/components/fileuploadcard";
import TextEditor from "@/components/TextEditor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BsFillSendFill } from "react-icons/bs";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import sendicon from "../../../public/assets/png/send-icon.png"
import closeicon from "../../../public/assets/png/close-icon.png"

export default function Compose() {
  const [active, setActive] = useState(1);
  return (
    <div className="px-2 md:px-6 py-8 pb-6 bg-[#f2f6f9]">
      <h2 className="inter_SemiBold mb-4 text-xl px-2">Compose New Message</h2>
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
        <div className="px-2 mb-4 py-2">
          <div className="relative">
            <Input
              type={"text"}
              className="w-full h-12 !text-[1rem] bg-[#f2f6f9] inter_SemiBold   border-gray-300 rounded-none"
              placeholder="Subject"
            />
          </div>
        </div>
        <div className="px-2 mb-4 py-2">
          <TextEditor />
        </div>

        <div className="px-2  py-2">
          <p className="text-[15px]  text-[#5f5f5f] py-2 inter_SemiBold">Attachment</p>
          <FileUploadCard />
        </div>
        <div className="flex px-2 inter_SemiBold my-8 justify-start gap-x-3">
          {/* <Button size={'lg'}  varient={"outline"}>
            <BsFillSendFill />
             Send
          </Button>
          <Button size={'lg'}  className="bg-[#6b6d79]">
            <RxCross2 size={60} />
            Discard
          </Button> */}

                        <button class="flex bg-primary rounded pl-4 pr-12 py-[8px] items-center gap-2 text-white">
                          <Image src={sendicon} alt="" width={20} height={20} class="" />Send
                        </button>
                        <button
                          class="bg-[#6b6d79] flex rounded pl-4 pr-12 py-[8px] items-center gap-2 text-white"
                        >
                          <Image src={closeicon} alt="" class="" width={20} height={20} />Discard
                        </button>
        </div>
      </form>
    </div>
  );
}
