import React, { useEffect, useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { GoChevronRight } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
const Header = () => {
  const [time, setTime] = useState('59:59');
  // setTime('59:59')
  // let seconds = 35; // 1 hour in seconds
  let seconds = 3599; // 1 hour in seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        seconds -= 1;
        const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        setTime(`${minutes}:${secs}`);
      } else {
        clearInterval(interval); // Stop the interval when time is up
      }
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [seconds]);
  return (
    <div className='w-full h-[3.5rem] bg-[#F7F9FC] px-5 py-1 flex items-center'>
      <div className='w-[44vw] h-[85%]  border-[#d6d6d6] bg-white border flex items-center'>
        <div className='w-[50%] flex items-center font-medium'>
          <h2 className='text-gray-600 pl-5 text-md'>Section 1 /</h2>
          <h2 className='text-black border-r-2 border-gray-700 pr-3 mr-3 ml-1  text-lg'>1.</h2>
          <h2 className='text-gray-600   text-lg'> CPP Coding (2)</h2>
        </div>
        <div className='w-[50%] text-black flex justify-end pr-4  text-lg'><FaAngleDown /></div>
      </div>

      <div className='w-[25vw] h-[85%] overflow-x-auto  flex items-center ml-8'
        style={{
          scrollbarWidth: 'none', /* Firefox */
          msOverflowStyle: 'none', /* Internet Explorer 10+ */
        }}
      >
        <div className='flex items-center gap-2 border-r pr-3 whitespace-nowrap'>
          <label htmlFor="" className='text-gray-500 font-medium'>Name:</label>
          <p className='text-black font-semibold text-[0.95rem]'>Aditya Sharma</p>
        </div>

        <div className='flex items-center gap-2 border-r pr-3 ml-4 whitespace-nowrap'>
          <label htmlFor="" className='text-gray-500 font-medium'>Roll Number:</label>
          <p className='text-black font-semibold text-[0.95rem]'>12317692</p>
        </div>

        <div className='flex items-center gap-2 border-r pr-3 ml-4 whitespace-nowrap'>
          <label htmlFor="" className='text-gray-500 font-medium'>Email:</label>
          <p className='text-black font-semibold text-[0.95rem]'>aditya@lpu.in</p>
        </div>

        <div className='flex items-center gap-2 border-r pr-3 ml-4 whitespace-nowrap'>
          <label htmlFor="" className='text-gray-500 font-medium'>Degree:</label>
          <p className='text-black font-semibold text-[0.95rem]'>B.Tech CSE</p>
        </div>

        <div className='flex items-center gap-2 border-r pr-3 ml-4 whitespace-nowrap'>
          <label htmlFor="" className='text-gray-500 font-medium'>Batch:</label>
          <p className='text-black font-semibold text-[0.95rem]'>2026</p>
        </div>

        <div className='flex items-center gap-2 pr-3 ml-4 whitespace-nowrap'>
          <label htmlFor="" className='text-gray-500 font-medium'>Test Name:</label>
          <p className='text-black font-semibold text-[0.95rem]'>CPP_DSA_CA3_Mock Test</p>
        </div>
      </div>
        <div className='py-2 px-1 rounded-md  bg-gray-200 ml-1'>
          <GoChevronRight className='font-thin text-lg'/>
        </div>
        <div className='w-[30vw]'>
          <div className='flex  justify-end items-center gap-6'>
          <h2 className='text-gray-600 pl-5 text-md flex items-center gap-2'>
            <IoMdTime className='text-2xl text-gray-400'/> <p className='text-[#55BA45] font-medium text-lg'>{time}</p>
          </h2>
            <button className='text-white bg-blue-600 px-3 py-[0.55rem] rounded-md font-semibold text-sm'>Submit Test</button>
          </div>
        </div>
    </div>
  )
}

export default Header