import React from 'react'
import './styles/app.css'
import Home from './Pages/Home'
import {ToggleProvider} from './toggleModeContext.js'




function App() {
  
  return (
    <ToggleProvider>
    <div className="App">
      <Home/>
      
      </div>
    </ToggleProvider>
  );
}

export default App;
