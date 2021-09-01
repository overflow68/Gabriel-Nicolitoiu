import '../styles/app.css'
import {FiSun} from 'react-icons/fi'
import {BsMoon} from 'react-icons/bs'
import {useToggle} from '../toggleModeContext'
import { useEffect } from 'react'


function Navbar() {
    const {toggleMode,darkMode} = useToggle()

    useEffect(()=>{
        darkMode === false? document.body.classList.add('light-mode'):document.body.classList.remove('light-mode') 

    }, [darkMode])
  return (
    <div className="navbar">
        <div className="nav-container">

        <ul className="menu-itms">
        {darkMode ===true?<li className="itm1"><span>Projetos</span></li>:<li className="itm1 light-itm"><span>Projetos</span></li>}
        {darkMode ===true?<li className="itm1"><span>Sobre</span></li>:<li className="itm1 light-itm"><span>Sobre</span></li>}
        {darkMode ===true?<li className="itm1"><span>Contacto</span></li>:<li className="itm1 light-itm"><span>Contacto</span></li>}
        </ul>

        <div className = "other-itms">

            <div>{darkMode ===true?<FiSun onClick={toggleMode} className="sun" size="25"/>:<BsMoon onClick={toggleMode} className="moon" size="25"/>}</div>


        </div>

        </div>
    </div>
  );
}

export default Navbar;
