import React from 'react'

export default function Navbar() {
  return (
    <>
   <div class="nav bg-[#1F2833] py-2 rounded-lg items-center justify-center">
        <div class="font-mono text-[#66FCF1] mx-2 cursor-pointer hover:text-[#45A29E]">Home</div>
        <div class="font-mono text-[#66FCF1] mx-2 cursor-pointer hover:text-[#45A29E]">About</div>
        <div class="font-mono text-[#66FCF1] mx-2 cursor-pointer hover:text-[#45A29E]">Skills</div>
        <div class="font-mono text-[#66FCF1] mx-2 cursor-pointer hover:text-[#45A29E]">Achivment</div>
        <div class="font-mono text-[#66FCF1] mx-2 cursor-pointer hover:text-[#45A29E]">Portfoliyo</div>
        <div class="font-mono text-[#66FCF1] mx-2 cursor-pointer hover:text-[#45A29E]">Contact</div>
        <button class="text-[#66FCF1] border rounded-lg px-2 text-sm mx-2 border-[#66FCF1] hover:fill-current">Download CV</button>
    </div>
    </>
  )
}
