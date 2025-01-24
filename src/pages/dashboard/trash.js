import ChatItems from "@/components/inbox/chat-Items";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronDown,
  ChevronsLeft,
  ChevronsRight,
  EllipsisVertical,
  RotateCw,
} from "lucide-react";
import React, { useState } from "react";

export default function Dashboard() {
  const [active,setActive]=useState(1)
  const [ischeck,setIsCheck]=useState(false)
  console.log("ischeck",ischeck)
  return (
    <div className="py-6 pb-6 px-0 bg-[#f2f6f9]">
      {/* header */}
      <div className="flex  pl-6 pr-2 pb-5 justify-between items-center">
        <div className="flex gap-x-4 items-center">
          <div className="flex items-end">
            <Checkbox 
            onCheckedChange={(value) => {
              setIsCheck(value)

            }}
            
            name="check" />
            <ChevronDown size={15} />
          </div>
          <div className="flex gap-x-2  items-center">
            <RotateCw size={20} />
            <EllipsisVertical size={25} />
          </div>
        </div>
        <div className="flex gap-x-2">
          <Select>
            <SelectTrigger className="w-[100px] bg-[#f2f6f9] text-[#747070] font-semibold border-0">
              <SelectValue placeholder="By Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[100px] text-[#747070] font-semibold bg-[#f2f6f9] border-0">
              <SelectValue placeholder="Newest" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <ChatItems onIsCheck={ischeck} />

      <div className="flex my-10 gap-x-2 justify-center">
        <Button onClick={() => setActive(0)} variant={`${active===0 ? 'default':'outline'}`}  className={`${active===0 ? 'bg-[#7f63f4]':'bg-[#f2f6f9]' } hover:bg-primary hover:text-white`} size="icon">
          <ChevronsLeft />
        </Button>
        <Button size="sm" onClick={() => setActive(1)} className={`${active===1 ? 'bg-[#7f63f4]':'bg-[#f2f6f9]' } hover:bg-primary hover:text-white`} variant={`${active===1 ? 'default':'outline'}`}>
          1
        </Button>
        <Button size="sm" onClick={() => setActive(2)} className={`${active===2 ? 'bg-[#7f63f4]':'bg-[#f2f6f9]' } hover:bg-primary hover:text-white`} variant={`${active===2 ? 'default':'outline'}`}>
          2
        </Button>
        <Button size="sm" onClick={() => setActive(3)} className={`${active===3 ? 'bg-[#7f63f4]':'bg-[#f2f6f9]' } hover:bg-primary hover:text-white`} variant={`${active===3 ? 'default':'outline' }`}>
          3
        </Button>
        <Button onClick={() => setActive(4)} variant={`${active===4 ? 'default':'outline'}`}  className={`${active===4 ? 'bg-[#7f63f4]':'bg-[#f2f6f9]' } hover:bg-primary hover:text-white`} size="sm">
          <ChevronsRight />
        </Button>
      </div>
    </div>
  );
}
