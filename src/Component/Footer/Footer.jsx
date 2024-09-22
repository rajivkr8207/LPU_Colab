import React from 'react'

const Footer = () => {
  return (
    // bg-[#F7F9FC]
    <div className='w-full h-full bg-[#EAEEFF]  px-5 pt-8 pb-8 flex items-center justify-between'>
      <div className='w-[50%] flex items-center justify-between pr-16'>
      <div className='text-[#66667F] flex gap-3 items-center font-medium'>
      <span>
      Marks : 10
      </span>
      <span>
      Negative Marks : 0
      </span>
      </div>
      <div>
        <button className='text-[#66667F] border border-[#9e9e9e] px-4 py-2 rounded-lg'>Clear</button>
      </div>
      </div>
      
      <div className='w-[50%] flex items-center justify-between pl-16'>
      <div  className='flex gap-3'>
      <button className='text-[#66667F] border border-[#9e9e9e] px-4 py-2 rounded-lg'>Compile & Run</button>
      <button className='text-white border bg-[#3456FF] rounded-lg px-4 py-2'>Submit Code</button>
      </div>
      <div  className='flex gap-3'>
      <button className='text-[#66667F] border border-[#9e9e9e] px-4 py-2 rounded-lg'>Prev</button>
      <button className='text-[#66667F] border border-[#9e9e9e] px-4 py-2 rounded-lg'>Next</button>
      </div>
      </div>
    </div>
  )
}

export default Footer