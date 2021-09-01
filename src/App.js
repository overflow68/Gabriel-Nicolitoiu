import React from 'react'
import './styles/app.css'
import Navbar from './components/navbar'
import {ToggleProvider} from './toggleModeContext.js'


function App() {
  return (
    <ToggleProvider>
    <div className="App">
      <Navbar/>
      
    </div>
    </ToggleProvider>
  );
}

export default App;
