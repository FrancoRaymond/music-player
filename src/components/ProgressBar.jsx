import React, {useEffect} from 'react'
import { useAppContext } from '../context/context';

const ProgressBar = () => {
  const { audioRef, currentTime, setCurrentTime, duration, setDuration } = useAppContext()

  const formatTime = (time = 0) => {
    const totalSeconds = Math.floor(time);
  
    const minutes = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, "0");
  
    const seconds = (totalSeconds % 60)
      .toString()
      .padStart(2, "0");
  
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
  
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };
  
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };
  
    const handleEnded = () => {
      setPlaying(false);
      setCurrentTime(0);
    };
  
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);
  
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [audioRef]);

  const progress = duration ? (currentTime / duration) * 100 : 0;


  return (
    <div className='flex items-center gap-3.5 w-full mt-6'>
      <span className='text-xs text-gray-300'>{formatTime(currentTime)}</span>
        <div className='grow h-1.5 bg-gray-500 rounded-lg'>
          <div  style={{ width: `${progress}%` }} className='progressBar h-full rounded-lg bg-lime-400 relative after:size-3.5 after:bg-lime-400 after:absolute after:-right-0.5 after:rounded-full after:-mt-1 after:shadow after:shadow-white after:cursor-pointer'></div>
        </div>
        <span className='text-xs text-gray-300'>{formatTime(duration)}</span>
    </div>
  )
}

export default ProgressBar