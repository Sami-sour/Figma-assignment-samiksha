import React from 'react';
import clock from "../assets/clock.svg";
import editIcon from "../assets/edit-icon.svg";
import icon from "../assets/icon.svg";
import adminPhoto from "../assets/admin-photo.svg";

const Navbar = () => {
    
   return <div className='w-full bg-white shadow-sm px-4 md:px-6 py-3 rounded-b-2xl'>
    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-3'>


    <div className='text-lg md:text-xl font-semibold'>
        People
    </div>


    <div  className='flex flex-wrap items-center gap-3 md:gap-4'>
        <div className='text-sm p-[16px]  rounded-lg'>MST</div>
        <div className='flex gap-[10px] p-[16px]'>
        <div>
            <img src={clock} alt="clock-icon" />
        </div>
        <div>02:03:02</div>
        <div>
            <img src={editIcon} alt="edit-icon" />
        </div>
        </div>


        <div className='flex items-center'>
            <img src={icon} alt="icon" className='p-[20px]'/>
            <img src={adminPhoto} alt="admin-photo" className='w-[48px] h-[48px]' />
        </div>
    </div>


   </div>
   </div>
}

export default Navbar

