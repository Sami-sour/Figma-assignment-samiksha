import React from 'react';
import search from "../assets/search-icon.svg";
import downArrow from "../assets/arrow-down.svg";
import funnel from "../assets/funnel.svg";
import plusIcon from "../assets/plus-icon.svg";
import fourSquare from "../assets/four-square.svg";
import group from "../assets/Group.svg";
import shape from "../assets/shape.svg";
import frame1 from "../assets/Frame1.svg";
import frame2 from "../assets/Frame2.svg";
import frame3 from "../assets/Frame3.svg";
import frame4 from "../assets/Frame4.svg";
import frame5 from "../assets/Frame5.svg";
import frame6 from "../assets/Frame6.svg";
import frame7 from "../assets/Frame7.svg";
import frame8 from "../assets/Frame8.svg";
import frame9 from "../assets/Frame9.svg";
import frame10 from "../assets/Frame10.svg";
import frame11 from "../assets/Frame11.svg";
import frame12 from "../assets/Frame12.svg";
import arrows from "../assets/arrows.svg";
import leftArrow from "../assets/left-arrow.svg";
import rightArrow from "../assets/right-arrow.svg";

const Content = () => {
  return <div className='w-full  m-[16px] rounded-[20px] '>
     <div className='m-[24px] flex   flex-col lg:flex-row justify-between'>
       <div className='flex items-center gap-[12px] p-[16px] w-full lg:max-w-sm'>
        <div><img src={search} alt="search-icon" /></div>
        <div><input type="text" placeholder='Search by Employee Name or Number' className='w-[244px] h-[21px] text-sm outline-none' /></div>
       </div>
       <div className='m-[24px] w-[320px] h-[48px] flex gap-[10px] flex-wrap items-center'>
          <div className='flex gap-[8px] w-[104px] h-[48px] items-center'>
            <div className='p-[12px]'>
            <img src={downArrow} alt="down-arrow" className='w-[24px] h-[24px] '/>
            </div>
            <div className='p-[12px]'>
            <img src={funnel} alt="funnel" className='w-[24px] h-[24px] '/>
            </div>
          </div>
          <div className='bg-[#3D3936] w-[48px] h-[48px] p-[12px] rounded-[14px]'>
            <img src={plusIcon} alt="" className=' w-[24px] h-[24px]'/>
          </div>
          <div className='flex w-[136px] h-[48px] gap-[4px] items-center'>
            <div className='bg-[#3D3936] rounded-[12px] p-[8px]'>
            <img src={fourSquare} alt="fourSquare" className='w-[24px] h-[24px] ' />
            </div>
            <div className='p-[8px]'>
            <img src={group} alt="group"  className='w-[24px] h-[24px] '/></div>
            <div className='p-[8px]'>
            <img src={shape} alt="shape"  className='w-[24px] h-[24px]'/></div>
          </div>

       </div>
     </div>


     <div className='w-[1064px] h-[849px] m-[16px]'>
       
       <div className='grid grid-rows-3    grid gap-4
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        xl:grid-cols-4'>
         <div className='w-[248px] h-[267px] p-[24px] text-center'>
            
           <div className='flex justify-center'>
            <img src={frame1} alt="frame1" className='w-[133px] h-[133px]'/>
            </div>
           

          <div className='text-[#3D3936] text- mt-[10px]'>Ethan Lee</div>
          <div className='text-[#947550]'>IT Specialist</div>

          <div className='flex justify-center gap-[3px] mt-[8px]'>
            <div className='bg-[#FFC83E] w-[10px] h-[10px] rounded-[50%]'></div>
            <div className='bg-[#70D32E] w-[10px] h-[10px] rounded-[50%]'></div>
            <div className='bg-[#6194EC] w-[10px] h-[10px] rounded-[50%]'></div>
            <div className='bg-[#FB8C3D] w-[10px] h-[10px] rounded-[50%]'></div>
          </div>
         </div>


         <div className='w-[248px] h-[267px] p-[24px] text-center'>
            
           <div className='flex justify-center'>
            <img src={frame2} alt="frame1" className='w-[133px] h-[133px]'/>
            </div>
           

          <div className='text-[#3D3936] text- mt-[10px]'>Emily Baker</div>
          <div className='text-[#947550]'>Marketing Manager</div>

          <div className='flex justify-center gap-[3px] mt-[8px]'>
            <div className='bg-[#FFC83E] w-[10px] h-[10px] rounded-[50%]'></div>
            <div className='bg-[#70D32E] w-[10px] h-[10px] rounded-[50%]'></div>
            <div className='bg-[#6194EC] w-[10px] h-[10px] rounded-[50%]'></div>
            <div className='bg-[#FB8C3D] w-[10px] h-[10px] rounded-[50%]'></div>
          </div>
         </div>

         <div className='w-[248px] h-[267px] p-[24px] text-center'>
            
           <div className='flex justify-center'>
            <img src={frame3} alt="frame1" className='w-[133px] h-[133px]'/>
            </div>
           

          <div className='text-[#3D3936] text- mt-[10px]'>Micheal Shaun</div>
          <div className='text-[#947550]'>Sales Director</div>

          <div className='flex justify-center gap-[3px] mt-[8px]'>
            <div className='bg-[#FFC83E] w-[10px] h-[10px] rounded-[50%]'></div>
            <div className='bg-[#70D32E] w-[10px] h-[10px] rounded-[50%]'></div>
            <div className='bg-[#6194EC] w-[10px] h-[10px] rounded-[50%]'></div>
            <div className='bg-[#FB8C3D] w-[10px] h-[10px] rounded-[50%]'></div>
          </div>
         </div>

         <div className='w-[248px] h-[267px] p-[24px] text-center'>
            
           <div className='flex justify-center'>
            <img src={frame4} alt="frame1" className='w-[133px] h-[133px]'/>
            </div>
           

          <div className='text-[#3D3936] text- mt-[10px]'>Liam Carter</div>
          <div className='text-[#947550]'>Product Designer</div>

          <div className='flex justify-center gap-[3px] mt-[8px]'>
            <div className='bg-[#FFC83E] w-[10px] h-[10px] rounded-[50%]'></div>
            <div className='bg-[#70D32E] w-[10px] h-[10px] rounded-[50%]'></div>
            <div className='bg-[#6194EC] w-[10px] h-[10px] rounded-[50%]'></div>
            <div className='bg-[#FB8C3D] w-[10px] h-[10px] rounded-[50%]'></div>
          </div>
         </div>

         <div className='w-[248px] h-[267px] p-[24px] text-center'>
            
           <div className='flex justify-center'>
            <img src={frame5} alt="frame1" className='w-[133px] h-[133px]'/>
            </div>
           

          <div className='text-[#3D3936] text- mt-[10px]'>Grace Kim</div>
          <div className='text-[#947550]'>Customer Lead</div>

          <div className='flex justify-center gap-[3px] mt-[8px]'>
            <div className='bg-[#FFC83E] w-[10px] h-[10px] rounded-[50%]'></div>
            <div className='bg-[#70D32E] w-[10px] h-[10px] rounded-[50%]'></div>
            <div className='bg-[#6194EC] w-[10px] h-[10px] rounded-[50%]'></div>
            <div className='bg-[#FB8C3D] w-[10px] h-[10px] rounded-[50%]'></div>
          </div>
         </div>

         <div className='w-[248px] h-[267px] p-[24px] text-center'>
            
           <div className='flex justify-center'>
            <img src={frame6} alt="frame1" className='w-[133px] h-[133px]'/>
            </div>
           

          <div className='text-[#3D3936] text- mt-[10px]'>Noah Williams</div>
          <div className='text-[#947550]'>Finance Head</div>

          <div className='flex justify-center gap-[3px] mt-[8px]'>
            <div className='bg-[#FFC83E] w-[10px] h-[10px] rounded-[50%]'></div>
            <div className='bg-[#70D32E] w-[10px] h-[10px] rounded-[50%]'></div>
            <div className='bg-[#6194EC] w-[10px] h-[10px] rounded-[50%]'></div>
            <div className='bg-[#FB8C3D] w-[10px] h-[10px] rounded-[50%]'></div>
          </div>
         </div>

         <div className='w-[248px] h-[267px] p-[24px] text-center'>
            
           <div className='flex justify-center'>
            <img src={frame7} alt="frame1" className='w-[133px] h-[133px]'/>
            </div>
           

          <div className='text-[#3D3936] text- mt-[10px]'>Isabella Rossi</div>
          <div className='text-[#947550]'>Operations Manager</div>

          <div className='flex justify-center gap-[3px] mt-[8px]'>
            <div className='bg-[#FFC83E] w-[10px] h-[10px] rounded-[50%]'></div>
            <div className='bg-[#70D32E] w-[10px] h-[10px] rounded-[50%]'></div>
            <div className='bg-[#6194EC] w-[10px] h-[10px] rounded-[50%]'></div>
            <div className='bg-[#FB8C3D] w-[10px] h-[10px] rounded-[50%]'></div>
          </div>
         </div>

         <div className='w-[248px] h-[267px] p-[24px] text-center'>
            
           <div className='flex justify-center'>
            <img src={frame8} alt="frame1" className='w-[133px] h-[133px]'/>
            </div>
           

          <div className='text-[#3D3936] text- mt-[10px]'>Ava Thompson</div>
          <div className='text-[#947550]'>HR Executive</div>

          <div className='flex justify-center gap-[3px] mt-[8px]'>
            <div className='bg-[#FFC83E] w-[10px] h-[10px] rounded-[50%]'></div>
            <div className='bg-[#70D32E] w-[10px] h-[10px] rounded-[50%]'></div>
            <div className='bg-[#6194EC] w-[10px] h-[10px] rounded-[50%]'></div>
            <div className='bg-[#FB8C3D] w-[10px] h-[10px] rounded-[50%]'></div>
          </div>
         </div>

         <div className='w-[248px] h-[267px] p-[24px] text-center relative'>
            
           <div className='flex justify-center'>
            <img src={frame9} alt="frame1" className='w-[133px] h-[133px]'/>
            </div>
           

         </div>

         <div className='w-[248px] h-[267px] p-[24px] text-center relative'>
            
           <div className='flex justify-center'>
            <img src={frame10} alt="frame1" className='w-[133px] h-[133px]'/>
            </div>
           

         </div>

         <div className='w-[248px] h-[267px] p-[24px] text-center relative'>
            
           <div className='flex justify-center'>
            <img src={frame11} alt="frame1" className='w-[133px] h-[133px]'/>
            </div>
           

         </div>

         <div className='w-[248px] h-[267px] p-[24px] text-center relative'>
            
           <div className='flex justify-center'>
            <img src={frame12} alt="frame1" className='w-[133px] h-[133px]'/>
            </div>
           

         </div>


         <div className=' relative
  flex flex-col gap-4 items-start
  md:absolute md:bottom-[-432px] md:left-80
  md:flex-row md:items-center md:gap-[32px] [@media(min-width:752px)_and_(max-width:1200px)]:hidden  '>
        <div className='flex  items-center gap-[16px]'>
         <div>Rows per page: <span>100</span></div>
         
         <div className='flex items-center'>
            <img src={arrows} alt="" />
         </div>
        </div>

        <div className='flex gap-[16px]'>
           <div>1-100 of 500</div>
           <div className='flex items-center gap-[12px]'>
            <div>
                <img src={leftArrow} alt="left-arrow" />
            </div>
            <div>
                <img src={rightArrow} alt="right-arrow" />
            </div>
           </div>
        </div>
     </div>


       </div>

    

     </div>

  </div>
}

export default Content;