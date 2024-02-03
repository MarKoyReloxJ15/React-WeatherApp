// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import WeatherCheck from './weatherCheck/weatherCheck.jsx'
import Nav from './Navigation/Nav.jsx'
 import './App.css'
 import React, { useState } from 'react';
 
 function App() {
 
  return (
    <>
      <Nav/>
     <WeatherCheck />
    </>
  );
}

export default App;
