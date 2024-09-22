import React from 'react'
import { PiWarningOctagonLight } from "react-icons/pi";
import wish from '../../assets/a.png'
import error from '../../assets/error.svg'
import WaterMarkQues from './WaterMarkQues';
import splitter from '../../assets/splitter.svg'
const LeftQues = () => {
  return (
    <>
      <div className='w-[full] h-full  ml-3 flex'>
      <div className='w-[100%] h-full bg-[#EAEEFF] ml-3'>
        <div className='px-6 flex justify-between items-center h-[13%] '>
          <h1 className='text-[#666666] font-medium text-lg'>Question No : 1 / 2</h1> 
          <div className='flex gap-2 items-center'>
            <span className='border border-[#FFAD3A] p-2 rounded-lg'><img src={wish} alt="" srcset="" className='w-[1.3rem] h-[1.3rem]' /></span>
            <span className='border border-[#FF5E5B] p-2 rounded-lg'><img src={error} alt="" srcset="" className='w-[1.3rem] h-[1.3rem]' /></span>
{/* <PiWarningOctagonLight className='text-red-600 text-4xl p-2 border border-red-600 rounded-lg'/> */}
          </div>
        </div>
        <div className='  w-[100%] h-[87%]'>
          <WaterMarkQues/>
        </div>
      </div>
      <div className='flex flex-col w-[3%] h-full justify-center'>
<img src={splitter} alt="" srcset="" className='w-4 h-3' />
      </div>
      </div>
    </>
  )
}

export default LeftQues