import React from 'react'

const AllSongs = () => {
  return (
    <div className='mt-6 sm:mt-0 px-2 sm:px-5 md:px-10 py-6 bg-gray-500/50 rounded-lg border border-lime-50/30 flex flex-col'>
      <div className='flex items-center justify-between'>
        <h1 className='text-white font-semibold text-sm'>All songs(1)</h1>
        <button className='text-white cursor-pointer px-3 py-1 bg-white/10 rounded-lg border border-lime-50/30 text-xs'>Add songs</button>
      </div>
    </div>
  )
}

export default AllSongs
