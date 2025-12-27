import React,{ useState, useEffect } from 'react'
import play from '../assets/icons/play.svg'
import pause from '../assets/icons/pause.svg'
import next from '../assets/icons/next.svg'

const Player = ({audioRef, currentSong, playing, setPlaying}) => {
  

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
    console.log(playing)
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onEnded = () => setPlaying(false);
    audio.addEventListener("ended", onEnded);

    return () => audio.removeEventListener("ended", onEnded);
  }, []);
  
  return (
    <div className='px-2 sm:px-5 md:px-10 py-6 bg-gray-500/50 rounded-lg border border-lime-50/30 flex flex-col items-center'>
      <h1 className='text-white font-semibold'>Find my way</h1>
      <p className='text-gray-400 text-sm mt-2'>Nasty c</p>
      <div className='rounded-lg border border-lime-50/30 bg-black/10 w-[60%] h-[40vw] sm:w-[60%] sm:h-[20vw] mt-6'>

      </div>
      <div className='flex items-center gap-3.5 w-full mt-6'>
        <span className='text-xs text-gray-300'>02:17</span>
        <div className='grow h-1.5 bg-gray-500 rounded-lg'>
          <div className='progressBar h-full rounded-lg w-[50%] bg-lime-400 relative after:size-3.5 after:bg-lime-400 after:absolute after:-right-0.5 after:rounded-full after:-mt-1 after:shadow after:shadow-white after:cursor-pointer'></div>
        </div>
        <span className='text-xs text-gray-300'>04:34</span>
      </div>
      <div className='flex items-center gap-5 mt-6'>
        <button className='rounded-full p-2 bg-white/15 cursor-pointer border border-lime-50/30'><img src={next} alt="" className='rotate-180 size-3'/></button>
        <button onClick={togglePlay} className='rounded-full bg-lime-400 p-2 border border-lime-50/30 cursor-pointer'>{playing ? (<img src={pause} alt="" className=' size-5'/>) : (<img src={play} alt="" className=' size-5'/>)}</button>
        <button className='rounded-full p-2 bg-white/15 cursor-pointer border border-lime-50/30'><img src={next} alt="" className='size-3'/></button>
      </div>
      <div className='flex items-center gap-3.5 w-full mt-6'>
        <span className='text-xs text-gray-300'>20%</span>
        <div className='grow h-0.5 bg-gray-500 rounded-lg'>
          <div className='progressBar h-full rounded-lg w-[20%] bg-lime-400 relative after:size-2 after:bg-lime-400 after:absolute after:-right-0.5 after:rounded-full after:-mt-1 after:shadow after:shadow-white after:cursor-pointer'></div>
        </div>
      </div>
      <audio ref={audioRef} controls src={currentSong} className='hidden' />
    </div>
  )
}

export default Player
