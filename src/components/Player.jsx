import React,{ useEffect } from 'react'
import { useAppContext } from '../context/context'
import play from '../assets/icons/play.svg'
import pause from '../assets/icons/pause.svg'
import next from '../assets/icons/next.svg'
import ProgressBar from './ProgressBar'
import VolumeSlider from './VolumeSlider'

const Player = () => {
  const {audioRef, currentSong, playing, setPlaying, togglePlay} = useAppContext()
  

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onEnded = () => setPlaying(false);
    audio.addEventListener("ended", onEnded);

    return () => audio.removeEventListener("ended", onEnded);
  }, []);
  
  return (
    <div className='px-2 sm:px-5 md:px-10 py-6 bg-gray-500/50 rounded-lg border border-lime-50/30 flex flex-col items-center'>
      <h1 className='text-white font-semibold overflow-hidden text-center'>{currentSong ? currentSong.split('-')[1] : 'Unknown'}</h1>
      <p className='text-gray-400 text-sm mt-2 overflow-hidden'>{currentSong ? currentSong.split('-')[0] : 'Unknown'}</p>
      <div className='rounded-lg border border-lime-50/30 bg-black/10 w-[60%] h-[40vw] sm:w-[60%] sm:h-[20vw] mt-6'>
      </div>
      <ProgressBar />
      <div className='flex items-center gap-5 mt-6'>
        <button className='rounded-full p-2 bg-white/15 cursor-pointer border border-lime-50/30'><img src={next} alt="" className='rotate-180 size-3'/></button>
        <button onClick={togglePlay} className='rounded-full bg-lime-400 p-2 border border-lime-50/30 cursor-pointer'>{playing ? (<img src={pause} alt="" className=' size-5'/>) : (<img src={play} alt="" className=' size-5'/>)}</button>
        <button className='rounded-full p-2 bg-white/15 cursor-pointer border border-lime-50/30'><img src={next} alt="" className='size-3'/></button>
      </div>
      <VolumeSlider />
      <audio ref={audioRef} controls src={currentSong} className='hidden' />
    </div>
  )
}

export default Player 