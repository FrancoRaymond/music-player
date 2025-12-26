import React,{useRef} from 'react'
import play from '../assets/icons/play.svg'

const AllSongs = ({currentSong, setCurrentSong, songs, setSongs,  handlePlay, audioRef}) => {
  const fileInputRef = useRef(null);
  

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    setSongs((prev) => [...files, ...prev]) 
  };


  return (
    <div className='mt-6 sm:mt-0 px-2 sm:px-5 md:px-10 py-6 bg-gray-500/50 rounded-lg border border-lime-50/30 flex flex-col'>
      <div className='flex items-center justify-between'>
        <h1 className='text-white font-semibold text-sm'>All songs({songs.length})</h1>
        <input
          type="file"
          accept=".mp3"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <button onClick={handleClick} className='text-white cursor-pointer px-3 py-1 bg-white/10 rounded-lg border border-lime-50/30 text-xs'>Add songs</button>
      </div>
      <div className='mt-3'>
        {
          songs.map((song, index) => (
            <div onClick={() => handlePlay(song, song.name)} key={song.name} className={`p-2 rounded-lg mt-2 cursor-pointer flex gap-3 items-center ${song.name === currentSong ? 'bg-lime-400/30' : 'bg-white/10'}`}>
              <div className='grow'>
                <p className='text-xs font-semibold text-white'>{song.name.slice(0, 30) + '...'}</p>
                <p className='text-gray-400 text-xs mt-1'>{(song.size / 1000000).toFixed(1) + "mb"}</p>
              </div>
              <img src={play} alt="" className={`size-3.5 ${song.name === currentSong ? 'animate-pulse' : 'hidden'}`}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default AllSongs
