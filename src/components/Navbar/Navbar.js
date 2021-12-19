import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'

const Navbar = ( { active } ) => {

    const [sideBarOpen, setSideBar] = useState(false)

    const onOpen = () => { setSideBar(true) }
    const onClose = () => { setSideBar(false) }

    const getSidebar = () => {
        if(sideBarOpen) {
            return (
                <div className='sidebar'>
                    <a href="#aboutMe" className='sidebarLink'> AboutMe </a>
                    <a href="#education" className='sidebarLink'> Education </a>
                    <a href="#projects" className='sidebarLink'> Projects </a>
                    <a href="#abilities" className='sidebarLink'> Abilities </a>
                    <a href="#sliceOfLife" className='sidebarLink'> Slice Of Life </a>
                    <a href="#contactMe" className='sidebarLink'> Contact Me </a>
                </div>
            )
        } else {
            return null;
        }
    }

    const getNavbar = () => {
        if(active === 'Title') {
            return null;
        } else {
            return (
                <nav className='nav'>
                <a href="#title" className='navLink'>
                    <span className="logo"></span>
                </a>  
                <FaBars className='bars' onClick />
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
                {getSidebar()}
            </nav> 
            )
        }
    }

    return (
        <div>
            {getNavbar()}
        </div>   
    )
}

export default Navbar
