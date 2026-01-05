import React, { createContext, useContext, useState, useRef } from "react";


const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [currentSong, setCurrentSong] = useState(null);
    const [songs, setSongs] = useState([])
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false)

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
            togglePlay
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