import React from 'react'
import logo from "../assets/logo.svg";
import plus from "../assets/Plus.svg";
import homeIcon from "../assets/HomeIcon.svg";
import plus2 from "../assets/plus2.svg";
import infoIcon from "../assets/Info-icon.svg";
import user from "../assets/user.svg";
import teamIcon from "../assets/Team-icon.svg";
import projectIcon from "../assets/project-icon.svg";
import hiriginfIcon from "../assets/Hiring-icon.svg";
import reportIcon from "../assets/Report-icon.svg";
import settingIcon from "../assets/setting-icon.svg";

const Sidebar = () => {
  return (
    <div className='bg-[#3D3936] w-[280px] h-[992px] mt-[16px] ml-[16px] rounded-[20px] '>
        <div className='flex items-center justify-between p-[24px]'>
            <div className='w-[101px] h-[44px] ' >
            <img src={logo} alt="logo" />
            </div>
            <div className='flex items-center'>
                <img src={plus} alt="arrow-icon" />
            </div>

        </div>

        <div className='h-[371px] mt-[15px] '>
           <div className='pr-[16px] pl-[16px] opacity-[60%] rounded-[16px]'>
            <div className='flex text-[#FFFFFF] h-[53px] pr-[16px] pl-[16px] gap-[12px] items-center'>
            <div>
              <img src={homeIcon} alt="home-icon" />
            </div>
              <div>Home</div>
           </div>
           </div>

           <div className='pr-[16px] pl-[16px] opacity-[60%] rounded-[16px]'>
            <div className='flex items-center justify-between '>
              <div className='flex text-[#FFFFFF] h-[53px] pr-[16px] pl-[16px] gap-[12px] items-center'>
            <div>
              <img src={infoIcon} alt="home-icon" />
            </div>
              <div>My Info</div>
              </div>
              <div>
                <img src={plus2} alt="" />
              </div>
           </div>
           </div>

           <div className='pr-[16px] pl-[16px] text-[#947550] rounded-[16px]'>
            <div className='flex items-center justify-between bg-[#FFFFFF] rounded-[10px]'>
              <div className='flex text-[#947550] h-[53px] pr-[16px] pl-[16px] gap-[12px] items-center '>
            <div >
              <img src={user} alt="home-icon" className='text-[#947550]'/>
            </div>
              <div>People</div>
              </div>
              
           </div>
           </div>

           <div className='pr-[16px] pl-[16px] opacity-[60%] rounded-[16px]'>
            <div className='flex items-center justify-between '>
              <div className='flex text-[#FFFFFF] h-[53px] pr-[16px] pl-[16px] gap-[12px] items-center'>
            <div>
              <img src={teamIcon} alt="home-icon" />
            </div>
              <div>Team Management</div>
              </div>
              <div>
                <img src={plus2} alt="" />
              </div>
           </div>
           </div>

           <div className='pr-[16px] pl-[16px] opacity-[60%] rounded-[16px]'>
            <div className='flex items-center justify-between '>
              <div className='flex text-[#FFFFFF] h-[53px] pr-[16px] pl-[16px] gap-[12px] items-center'>
            <div>
              <img src={projectIcon} alt="home-icon" />
            </div>
              <div>Project Setup</div>
              </div>
              <div>
                <img src={plus2} alt="" />
              </div>
           </div>
           </div>

           <div className='pr-[16px] pl-[16px] opacity-[60%] rounded-[16px]'> 
            <div className='flex text-[#FFFFFF] h-[53px] pr-[16px] pl-[16px] gap-[12px] items-center'>
            <div>
              <img src={hiriginfIcon} alt="home-icon" />
            </div>
              <div>Hiring</div>
           </div>
           </div>

           <div className='pr-[16px] pl-[16px] opacity-[60%] rounded-[16px]'>
            <div className='flex text-[#FFFFFF] h-[53px] pr-[16px] pl-[16px] gap-[12px] items-center'>
            <div>
              <img src={reportIcon} alt="home-icon" />
            </div>
              <div>Report</div>
           </div>
           </div>

        </div>

         <div className='mt-[455px] h-[53px] border-[1px] w-[248px] rounded-[16px] ml-[12px] border-gray-400 '>
          <div className='flex items-center gap-[12px] mt-[14px] ml-[20px]'>
            <div>
              <img src={settingIcon} alt="" />
            </div>
            <div className='text-[#FFFFFF] '>Setting</div>
          </div>
        </div>

    </div>
  )
}

export default Sidebar