import React, { useEffect } from 'react'
import { useAppContext } from '../context/context'

const VolumeSlider = () => {
  const { audioRef, volume, handleVolumeChange } = useAppContext()

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const volumePercent = Math.round(volume * 100);

   
  return (
    <div className='flex items-center gap-3.5 w-full mt-6'>
        <span className='text-xs text-gray-300'>{volumePercent}%</span>
        <div className='grow h-0.5 bg-gray-500 rounded-lg cursor-pointer' onClick={handleVolumeChange}>
          <div style={{ width: `${volumePercent}%` }} className='progressBar h-full rounded-lg w-[20%] bg-lime-400 relative after:size-2 after:bg-lime-400 after:absolute after:-right-0.5 after:rounded-full after:-mt-1 after:shadow after:shadow-white after:cursor-pointer'></div>
        </div>
    </div>
  )
}

export default VolumeSlider
