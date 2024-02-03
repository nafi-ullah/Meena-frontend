import React from 'react'

const SideBar = () => {
  return (
    <div className="w-1/6 h-screen left-0 top-0 absolute bg-slate-900" >

<div className="w-[1440px] h-[1024px] relative bg-white">
    <div className="w-[271px] h-[1024px] left-0 top-0 absolute bg-slate-900" />
    <div className="w-[223px] h-[45px] left-[24px] top-[100px] absolute">
      <img className="w-[34px] h-9 left-[9px] top-0 absolute" src="https://via.placeholder.com/34x36" />
      <div className="w-[223px] h-[45px] left-0 top-0 absolute rounded-[7px] border border-red-50" />
    </div>
    <div className="w-[271px] h-1 left-0 top-[965px] absolute bg-zinc-300" />
    <div className="left-[86px] top-[113px] absolute text-white text-base font-bold font-['Inter']">My Account</div>
  </div>


    </div>
  )
}

export default SideBar