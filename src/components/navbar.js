import '../styles/app.css'
import {FiSun} from 'react-icons/fi'
import {BsMoon} from 'react-icons/bs'
import {useToggle} from '../toggleModeContext'
import { useEffect } from 'react'


function Navbar() {
    const {toggleMode,darkMode,returnClass,returnBgClass} = useToggle()


    
    useEffect(()=>{
        darkMode === false? document.body.classList.add('light-mode'):document.body.classList.remove('light-mode') 

    }, [darkMode])
  return (
    <div className="navbar">
        <div className="nav-container">

        <ul className="menu-itms">
        <li className={returnClass("dropdown")}><span>Projetos</span>
        <div className={returnBgClass("dropdown-content")}>
          <a target="_blank" rel="noopener noreferrer" href="https://overflow68.github.io/My-Gram"><div className={returnClass("dropdown-item")}>Sistema de Login</div></a>
          <a target="_blank" rel="noopener noreferrer" href="https://overflow68.github.io/shopping-cart"><div className={returnClass("dropdown-item")}>Carrinho de compras</div></a>
          <a target="_blank" rel="noopener noreferrer" href="https://overflow68.github.io/CV-app"><div className={returnClass("dropdown-item")}>Cv-maker</div></a>
          <a target="_blank" rel="noopener noreferrer" href="https://overflow68.github.io/Battleship"><div className={returnClass("dropdown-item")}>Batalha naval</div></a>
          <a target="_blank" rel="noopener noreferrer" href="https://overflow68.github.io/speed-typing"><div className={returnClass("dropdown-item")}>Speed-typing</div></a>
          <a target="_blank" rel="noopener noreferrer" href="https://overflow68.github.io/weather_app"><div className={returnClass("dropdown-item")}>Meteorologia</div></a>
          <a target="_blank" rel="noopener noreferrer" href="https://overflow68.github.io/memory-game"><div className={returnClass("dropdown-item")}>Jogo de memória</div></a>
        </div>
        </li>





        <li className={returnClass("dropdown")}><span>Sobre</span>
        <div className={returnBgClass("dropdown-content")}>
          <div className={returnClass("dropdown-item")}>Quem sou</div>
          <div className={returnClass("dropdown-item")}>Habilitações</div>
        </div>
        </li>

        <li className={returnClass("dropdown")}><span>Contacto</span></li>
       
        </ul>

        <div className = "other-itms">

            <div>{darkMode ===true?<FiSun onClick={toggleMode} className="sun" size="25"/>:<BsMoon onClick={toggleMode} className="moon" size="25"/>}</div>


        </div>

        </div>
    </div>
  );
}

export default Navbar;