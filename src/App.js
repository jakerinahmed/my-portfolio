import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css';
import { NavBar, Headshot } from './Layout'
import { About } from './pages'

function App() {
  return (
    <div className='display'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Headshot />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>

  );
}

export default App;
