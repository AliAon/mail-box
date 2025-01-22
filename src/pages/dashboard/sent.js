import ChatItem from "@/components/inbox/chatItem";
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
  return (
    <div className="px-2 md:px-4 py-8 pb-6 bg-[#f2f6f9]">
      {/* header */}
      <div className="flex pb-5 justify-between items-center">
        <div className="flex gap-x-4 items-center">
          <div className="flex items-end">
            <Checkbox name="check" />
            <ChevronDown size={15} />
          </div>
          <div className="flex gap-x-2  items-center">
            <RotateCw size={20} />
            <EllipsisVertical size={25} />
          </div>
        </div>
        <div className="flex gap-x-2">
          <Select>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="By Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[100px]">
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
      <ChatItem />

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
