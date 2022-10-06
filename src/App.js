import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css';
import { NavBar, Headshot } from './Layout'
import { About, Projects, NotFound } from './pages'

function App() {
  return (
    <div className='display'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Headshot />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>

  );
}

export default App;
