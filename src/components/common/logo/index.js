import Image from 'next/image'
import React from 'react'

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Renders a logo image with a responsive display based on the `isOpen` state.
/******  bcb5b0c5-b5dd-4a0d-8941-b7cddb8403ab  *******/
export default function Logo({isOpen}) {
  return (
    <Image
              src={"/assets/png/logo.png"}
              alt=""
              width={756}
              height={117}
              className={`w-[188px] ${isOpen ? "block" : "hidden"}`}
            />
  )
}
