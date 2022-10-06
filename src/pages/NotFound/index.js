import React from 'react'
import { useLocation } from 'react-router-dom'
import './style.css'

function NotFound() {

  const location = useLocation()


  return (
    <div className='NotFound'>
      <h1>Sorry, {location.pathname} was not found :(</h1>
    </div>
  );
}

export default NotFound;
