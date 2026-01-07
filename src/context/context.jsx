import React, { createContext, useContext, useState, useRef } from "react";


const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [currentSong, setCurrentSong] = useState(null);
    const [songs, setSongs] = useState([])
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.10);

    const handlePlay = (song, name) => {
      setCurrentSong(name);
      audioRef.current.src = URL.createObjectURL(song); 
      audioRef.current.play();
      console.log(currentSong)
    };

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

    const handleVolumeChange = (e) => {
      const bar = e.currentTarget;
      const rect = bar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
    
      let newVolume = clickX / rect.width;
      newVolume = Math.min(1, Math.max(0, newVolume)); 
    
      setVolume(newVolume);
    };
      

  return (
    <AppContext.Provider
      value={
        {
          currentSong, 
          setCurrentSong,
          songs, 
          setSongs,
          audioRef,
          playing, 
          setPlaying,
          handlePlay,
          togglePlay,
          currentTime, 
          setCurrentTime,
          duration, 
          setDuration,
          volume, 
          setVolume,
          handleVolumeChange
        }
      }
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider; 