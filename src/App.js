import React from 'react'
import './styles/app.css'
import Navbar from './components/navbar'
import {ToggleProvider} from './toggleModeContext.js'
import mainpic from './images/main.png'



function App() {
  return (
    <ToggleProvider>
    <div className="App">
      
      <Navbar/>
      <div className="main-container">
        <div className="img-cont"><img className="main-img" alt="" src={mainpic}></img></div>
        <div className="welcome-div"><h1>Bem-vindo, o meu nome é Gabriel Nicolitoiu</h1></div>
        
      </div>
      </div>
    </ToggleProvider>
  );
}

export default App;
