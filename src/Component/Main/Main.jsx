import React from 'react'
import Footer from '../Footer/Footer'
import LeftQues from '../LeftQues/LeftQues'
import RightEdi from '../RightEdi/RightEdi'

const Main = () => {
  return (
    <div className='w-full h-[86.9vh] bg-[#F2F4F7] pt-2 px-2 flex'>
    <div className='w-[7vw] h-[100%] mt-auto bg-white flex flex-col justify-between z-20' >
      <div className='flex py-3 justify-around'>
        <div className='flex justify-center items-center bg-[#32CD32]  px-[0.6rem] py-1 text-base rounded-md text-white border-2 border-blue-500'>1</div>
        <div className='flex justify-center items-center bg-[#FF5E5B] px-[0.7rem] py-1 text-base rounded-md text-white'>2</div>
      </div>

      <div className='flex  flex-col pb-2'>
        <div className='border-b-[0.2rem] pt-1 border-green-600 text-[0.7rem] flex justify-center flex-col gap-1 bg-[#F2FAF1]'>
          <p className='text-center font-[100]'>Answered</p>
          <span className='text-center  text-green-600 pb-1'>1/2</span>
        </div>
        <div className='border-b-[0.2rem] pt-1 border-[#FFAD3A] text-[0.7rem] flex justify-center flex-col gap-1 bg-[#FFF9F2]'>
          <p className='text-center font-[100]'>Bookmarked</p>
          <span className='text-center  text-[#FFAD3A] pb-1'>0/2</span>
        </div>
        <div className='border-b-[0.2rem] pt-1 border-[#FF5E5B] text-[0.7rem] flex justify-center flex-col gap-1 bg-[#FEF2EF]'>
          <p className='text-center font-[100]'>Skipped</p>
          <span className='text-center  text-[#FF5E5B] pb-1'>1/2</span>
        </div>
        <div className='border-b-[0.2rem] pt-1 border-[#666666] text-[0.7rem] flex justify-center flex-col gap-1 bg-[#FBFCFE]'>
          <p className='text-center font-[100]'>Not Viewed</p>
          <span className='text-center  text-[#666666] pb-1'>1/2</span>
        </div>
        <div className=' text-[0.7rem] pt-1 flex justify-center flex-col gap-1 bg-[#FFFFFF]'>
          <p className='text-center font-[100]'>Saved in Server</p>
          <span className='text-center  text-black pb-1'>1/2</span>
        </div>
        
        <h1 className='text-[#3456FF] text-center text-sm font-medium my-1'>View More</h1>
      </div>
    </div>

    <div className='w-[93vw] h-[90%] flex flex-col '>
    <div className='w-full h-[100%] flex '>
        <div className='w-[37%]'>
          <LeftQues />
        </div>

        <div className='w-[63%] '> 
         <RightEdi/>
        </div>
    </div>
    <div className='h-[55px] flex justify-end flex-col z-20 '>
    <Footer/>
    </div>
    </div>
    </div>
  )
}

export default Main