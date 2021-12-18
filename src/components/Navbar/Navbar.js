import React from 'react'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav>
            <a href="#title">
                <img src="../../images/elc.svg" alt="ethan"></img>
            </a>  
            <FaBars />
            <div>
                <a href="#aboutMe" activeStyle>
                    About Me
                </a>
                <a href="#education" activeStyle>
                    Education
                </a>
                <a href="#projects" activeStyle>
                    Projects
                </a>
                <a href="#abilities" activeStyle>
                    Abilities
                </a>
                <a href="#sliceOfLife" activeStyle>
                    Slice of Life
                </a>
                <a href="#contactMe" activeStyle>
                    Contact Me
                </a>
            </div>
        </nav>  
    )
}

export default Navbar
