import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

export default function SocialButtons() {
  return (
    <div className="w-full flex items-center gap-x-2">
    <Button
      variant="outline"
      className="w-full bg-[#F0F4F3] border-[#DDE1DF] border"
    >
      <Image
        src="/assets/png/google.png"
        alt=""
        width={20}
        height={20}
        className="w-[20px] h-[20px]"
      />
      Google
    </Button>
    <Button
      variant="outline"
      className="w-full bg-[#F0F4F3] border-[#DDE1DF] border"
    >
      <Image
        src="/assets/png/linkedin.png"
        alt=""
        width={20}
        height={20}
        className="w-[20px] h-[20px]"
      />
      LinkedIn
    </Button>
    <Button
      variant="outline"
      className="w-full bg-[#F0F4F3] border-[#DDE1DF] border"
    >
      <Image
        src="/assets/png/github.png"
        alt=""
        width={20}
        height={20}
        className="w-[20px] h-[20px]"
      />
      GitHub
    </Button>
  </div>
  )
}
