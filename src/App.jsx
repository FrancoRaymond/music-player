import React,{useState, useRef} from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Player from './components/Player'
import AllSongs from './components/AllSongs'
import Playlists from './components/Playlists'

const App = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [songs, setSongs] = useState([])
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false)

  const handlePlay = (song, name) => {
    setCurrentSong(name);
    audioRef.current.src = URL.createObjectURL(song); 
    audioRef.current.play();
  };

  return (
    <div>
      <Navbar />
      <main className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6'>
        <div className='w-full'>
          <Player audioRef={audioRef} currentSong={currentSong} playing={playing} setPlaying={setPlaying} />
        </div>
        <div>
          <Routes>
            <Route path='*' element={ <AllSongs currentSong={currentSong} setCurrentSong={setCurrentSong} songs={songs} setSongs={setSongs} audioRef={audioRef} handlePlay={ handlePlay} playing={playing} setPlaying={setPlaying}/> }/>
            <Route path='/' element={ <AllSongs currentSong={currentSong} setCurrentSong={setCurrentSong} songs={songs} setSongs={setSongs} audioRef={audioRef} handlePlay={ handlePlay} playing={playing} setPlaying={setPlaying}/> }/>
            <Route path='/Playlists' element={ <Playlists /> } />
          </Routes>
        </div>
      </main> 
    </div>
  )
}

export default App
