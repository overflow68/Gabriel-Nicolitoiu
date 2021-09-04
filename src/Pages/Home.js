import React from 'react'
import Navbar from '../components/navbar'
import mainpic from '../images/main.png'
import {useToggle} from '../toggleModeContext.js'


function Home() {
  const {returnClassExtra} = useToggle()
    return (
        <div className="home">
        <Navbar/>
      <div className="main-container">
        <div className="img-cont"><img className="main-img" alt="" src={mainpic}></img></div>
        <div className="small-item"><h2>Bem-vindo,</h2><p>O meu nome é Gabriel Nicolitoiu.</p></div>
        <div className={returnClassExtra("item-container","item-color1","light-color1")}></div>
        <div className={returnClassExtra("item-container","item-color2","light-color2")}></div>
        <div className={returnClassExtra("item-container","item-color3","light-color3")}></div>
        <div className={returnClassExtra("item-container","item-color4","light-color4")}></div>
        <div className={returnClassExtra("item-container","item-color1","light-color1")}></div>
        <div className={returnClassExtra("item-container","item-color2","light-color2")}></div>
        
      </div>
      </div>
    );
}

export default Home;