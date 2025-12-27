import React from 'react'

const ProgressBar = () => {
  return (
    <div className='flex items-center gap-3.5 w-full mt-6'>
        <span className='text-xs text-gray-300'>02:17</span>
        <div className='grow h-1.5 bg-gray-500 rounded-lg'>
          <div className='progressBar h-full rounded-lg w-[50%] bg-lime-400 relative after:size-3.5 after:bg-lime-400 after:absolute after:-right-0.5 after:rounded-full after:-mt-1 after:shadow after:shadow-white after:cursor-pointer'></div>
        </div>
        <span className='text-xs text-gray-300'>04:34</span>
    </div>
  )
}

export default ProgressBar
