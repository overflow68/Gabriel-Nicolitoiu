import React from 'react'
import './styles/app.css'
import Home from './Pages/Home'
import {ToggleProvider} from './toggleModeContext.js'




function App() {
  
  return (
    <ToggleProvider>
    <div className="App">
    <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      
      <Home/>
      
      </div>
    </ToggleProvider>
  );
}

export default App;
