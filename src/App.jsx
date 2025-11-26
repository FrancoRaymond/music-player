import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Player from './components/Player'
import AllSongs from './components/AllSongs'
import Playlists from './components/Playlists'

const App = () => {
  return (
    <div>
      <Navbar />
      <main className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6'>
        <div className='w-full'>
          <Player />
        </div>
        <div>
          <Routes>
            <Route path='/' element={ <AllSongs /> }/>
            <Route path='/Playlists' element={ <Playlists /> } />
          </Routes>
        </div>
      </main> 
    </div>
  )
}

export default App
