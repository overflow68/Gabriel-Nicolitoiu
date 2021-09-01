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
          <div className={returnBgClass("dropdown-item")}>Sistema de Login</div>
          <div className={returnBgClass("dropdown-item")}>Carrinho de compras</div>
          <div className={returnBgClass("dropdown-item")}>Cv-maker</div>
          <div className={returnBgClass("dropdown-item")}>Batalha naval</div>
          <div className={returnBgClass("dropdown-item")}>Speed-typing</div>
          <div className={returnBgClass("dropdown-item")}>Meteorologia</div>
          <div className={returnBgClass("dropdown-item")}>Jogo de memória</div>
        </div>
        </li>





        <li className={returnClass("dropdown")}><span>Sobre</span>
        <div className={returnBgClass("dropdown-content")}>
          <div className={returnBgClass("dropdown-item")}>Quem sou</div>
          <div className={returnBgClass("dropdown-item")}>Habilitações</div>
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