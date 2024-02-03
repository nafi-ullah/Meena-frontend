import React from 'react'

const SideBar = () => {
  return (
    <div className="w-1/6 h-screen  bg-slate-900 flex flex-col" >


    <div className="w-[310px] h-[45px] my-16 mx-4 flex rounded-[7px] border border-red-50">
      <img className="w-[34px] h-9 m-1" src="https://via.placeholder.com/34x36" />
      <div className=" text-white text-xl px-10 p-2 ">My Account</div>
    </div>

    <div className="w-full h-10 bg-stone-900 rounded-[3px] flexm py-2 px-16" >
  
    <div className=" text-white text-xl  ">Prescription Help</div>
    
   </div>
   
  


    </div>
  )
}

export default SideBar