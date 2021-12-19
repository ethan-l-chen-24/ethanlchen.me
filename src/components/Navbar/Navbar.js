import React from 'react'
import { FaBars } from 'react-icons/fa'
import { VscChromeClose } from 'react-icons/vsc'

const Navbar = ( { active, sideBarOpen, openSidebar, closeSidebar } ) => {

    const isCurrent = (sectionName) => {
        if(active === sectionName) return ' current'
        return ''
    }

    const getSidebar = () => {
        if(sideBarOpen) {
            return (
                <div className='sidebar'>
                    <div><a href="#aboutMe" className={'sidebarLink' + isCurrent('About Me')} onClick={closeSidebar}> About Me </a></div>
                    <div><a href="#education" className={'sidebarLink' + isCurrent('Education')} onClick={closeSidebar}> Education </a></div>
                    <div><a href="#projects" className={'sidebarLink' + isCurrent('Projects')} onClick={closeSidebar}> Projects </a></div>
                    <div><a href="#abilities" className={'sidebarLink' + isCurrent('Abilities')} onClick={closeSidebar}> Abilities </a></div>
                    <div><a href="#sliceOfLife" className={'sidebarLink' + isCurrent('Slice of Life')} onClick={closeSidebar}> Slice Of Life </a></div>
                    <div><a href="#contactMe" className={'sidebarLink' + isCurrent('Contact Me') + ' contactMeLink'} onClick={closeSidebar}> Contact Me </a></div>
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
                <>
                <nav className='nav'>
                    <a href="#title" className='navLink'>
                        <span className="logo"></span>
                    </a>  
                    {sideBarOpen 
                    ? <VscChromeClose className='x' onClick={closeSidebar} />
                    : <FaBars className='bars' onClick={openSidebar} />}
                    
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
                        <a href="#contactMe" className='navLink contactMeLink'>
                            Contact Me
                        </a>
                    </div>
                </nav> 
                {getSidebar()}
                </>
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
