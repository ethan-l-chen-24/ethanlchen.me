import React from 'react'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className='nav'>
            <a href="#title" className='navLink'>
                <span className="logo"></span>
            </a>  
            <FaBars className='bars'/>
            <div className='navMenu'>
                <a href="#aboutMe" className='navLink'>
                    About Me
                </a>
                <a href="#education" className='navLink'>
                    Education
                </a>
                <a href="#projects" className='navLink'>
                    Projects
                </a>
                <a href="#abilities" className='navLink'>
                    Abilities
                </a>
                <a href="#sliceOfLife" className='navLink'>
                    Slice of Life
                </a>
                <a href="#contactMe" className='navLink'>
                    Contact Me
                </a>
            </div>
        </nav>  
    )
}

export default Navbar
