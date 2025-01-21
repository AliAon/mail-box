import { Checkbox } from '@/components/ui/checkbox'
import { ChevronDown, EllipsisVertical, RotateCw } from 'lucide-react'
import React from 'react'

export default function Dashboard() {
  return (
    <div className='px-2 md:px-4'>
    {/* header */}
    <div className="flex justify-between items-center">
      <div className="flex gap-x-4 items-center">
        <div className="flex items-end">
        <Checkbox name="check"/>
        <ChevronDown size={15}/>
        </div>
        <div className="flex gap-x-2  items-center">
          <RotateCw size={20}/>
          <EllipsisVertical size={25}/>
        </div>
      </div>
      <div></div>
    </div>

  </div>
  )
}