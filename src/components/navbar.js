import "../styles/app.css";
import { FiSun } from "react-icons/fi";
import { BsMoon } from "react-icons/bs";
import { useToggle } from "../toggleModeContext";
import { useEffect, useState } from "react";

function Navbar() {
  const [showModal, setToggle] = useState(false);
  const { toggleMode, darkMode, returnClass } = useToggle();

  const toggleModal = ()=>{
    setToggle(!showModal)
  }

  useEffect(() => {
    darkMode === false
      ? document.body.classList.add("light-mode")
      : document.body.classList.remove("light-mode");
  }, [darkMode]);
  return (
    <div className={returnClass("navbar", "light-header")}>
      <div className="nav-container">
        <ul className="menu-itms">
          <li className={returnClass("dropdown", "light-itm")}>
            <span>Projetos</span>
            <div className={returnClass("dropdown-content", "light-mode")}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://overflow68.github.io/My-Gram"
              >
                <div className={returnClass("dropdown-item", "light-itm")}>
                  Sistema de Login
                </div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://overflow68.github.io/shopping-cart"
              >
                <div className={returnClass("dropdown-item", "light-itm")}>
                  Carrinho de compras
                </div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://overflow68.github.io/CV-app"
              >
                <div className={returnClass("dropdown-item", "light-itm")}>
                  Cv-maker
                </div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://overflow68.github.io/Battleship"
              >
                <div className={returnClass("dropdown-item", "light-itm")}>
                  Batalha naval
                </div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://overflow68.github.io/speed-typing"
              >
                <div className={returnClass("dropdown-item", "light-itm")}>
                  Speed-typing
                </div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://overflow68.github.io/weather_app"
              >
                <div className={returnClass("dropdown-item", "light-itm")}>
                  Meteorologia
                </div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://overflow68.github.io/memory-game"
              >
                <div className={returnClass("dropdown-item", "light-itm")}>
                  Jogo de memória
                </div>
              </a>
            </div>
          </li>

          <li className={returnClass("dropdown", "light-itm")}>
            <span>Sobre</span>
            <div className={returnClass("dropdown-content", "light-mode")}>
              <a href="#sobre">
                <div className={returnClass("dropdown-item", "light-itm")}>
                  Sobre mim
                </div>
              </a>
              <a href="#percurso">
                <div className={returnClass("dropdown-item", "light-itm")}>
                  Percurso
                </div>
              </a>
              <a href="#skillset">
                <div className={returnClass("dropdown-item", "light-itm")}>
                  Habilitações
                </div>
              </a>
            </div>
          </li>

          <li onClick={toggleModal} className={returnClass("dropdown", "light-itm")}>
            <span>Contacto</span>
          </li>
        </ul>

        <div className="other-itms">
          <div>
            {darkMode === true ? (
              <FiSun onClick={toggleMode} className="sun" size="25" />
            ) : (
              <BsMoon onClick={toggleMode} className="moon" size="25" />
            )}
          </div>
        </div>
      </div>
      <div className={showModal ? "darkBg active": "darkBg"} onClick={toggleModal}></div>
      <div className={showModal ? "contact-info active": "contact-info"} onClick={toggleModal}>
        <div>E-mail: nicolitoiu.gabriel23@gmail.com</div>
        <div>Telemóvel: 961192877</div>
        <div>Github: overflow68</div>
      </div>
    </div>
  );
}

export default Navbar;