import AssignmentIcon from '@mui/icons-material/Assignment';
import MedicationIcon from '@mui/icons-material/Medication';
import MessageIcon from '@mui/icons-material/Message';
import HealingIcon from '@mui/icons-material/Healing';
import DescriptionIcon from '@mui/icons-material/Description';

const SideBar = () => {
  return (
    <div className="w-1/6 h-screen  bg-slate-900 flex flex-col" >


    <div className="w-full h-[45px] my-5 mb-10  flex rounded-[7px] border border-red-50">
      <img className="w-[34px] h-9 m-1" src="https://via.placeholder.com/34x36" alt="logo" />
      <div className=" text-white text-xl px-10 p-2 ">My Account</div>
    </div>

    <div className="w-full h-10 mb-3  bg-stone-900 rounded-[3px] flex py-2 px-16" >
    <AssignmentIcon color="secondary" fontSize = "medium"/>
  
    <div className=" text-white text-xl mx-4 ">Prescription Help</div>
    
   </div>
   <button className="w-full h-10 mb-3 bg-stone-900 rounded-[3px] flex py-2 px-16 hover:bg-white hover:text-black text-white ">
  <MedicationIcon color="secondary" fontSize="medium" />

  <div className=" text-xl mx-4">Emergency Help</div>
</button>
   <div className="w-full h-10 mb-3 bg-stone-900 rounded-[3px] flex py-2 px-16" >
    <MessageIcon color="secondary" fontSize = "medium"/>
  
    <div className=" text-white text-xl mx-4 ">Health Guide</div>
    
   </div>
   <div className="w-full h-10 mb-3 bg-stone-900 rounded-[3px] flex py-2 px-16" >
    <HealingIcon color="secondary" fontSize = "medium"/>
  
    <div className=" text-white text-xl mx-4 ">Pharmacy</div>
    
   </div>
   <div className="w-full h-10 mb-3 bg-stone-900 rounded-[3px] flex py-2 px-16" >
    <DescriptionIcon color="secondary" fontSize = "medium"/>
  
    <div className=" text-white text-xl mx-4 ">Previous Scripts</div>
    
   </div>
   
   

   
   
  


    </div>
  )
}

export default SideBar