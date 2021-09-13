import React from "react";
import {AiFillGithub} from 'react-icons/ai';
import {useToggle} from '../toggleModeContext'

function Footer (){
const { returnClass } = useToggle()


    return(
        <div className={returnClass("footer contacto", "light-border-top")}>

            <div><a  href="https://github.com/overflow68"><AiFillGithub size="40" className={returnClass("sun","moon")}/></a></div>
            <div>Copyright © 2021 overflow68</div>

        </div>
    );
}

export default Footer;