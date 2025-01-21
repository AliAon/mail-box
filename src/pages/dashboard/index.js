import ChatItem from "@/components/chatItem";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown, EllipsisVertical, RotateCw } from "lucide-react";
import React from "react";

export default function Dashboard() {
  return (
    <div className="px-2 md:px-4 py-8 pb-6 bg-gray-100">
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
      <ChatItem/>
    </div>
  );
}
