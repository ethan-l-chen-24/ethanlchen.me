import React, { useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { VscChromeClose } from 'react-icons/vsc'

const Navbar = ( { active, sideBarOpen, openSidebar, closeSidebar, noClose, endNoClose } ) => {

    const isCurrent = (sectionName) => {
        if(active === sectionName) return ' current'
        return ''
    }

    var toClose = false

    useEffect(() => {
        if(toClose) {
            endNoClose()
            toClose = false;
        }
    })

    const getSidebar = () => {
        if(sideBarOpen) {
            toClose = true;
            return (
                <div className='sidebar open'>
                    <div><a href="#aboutMe" className={'sidebarLink' + isCurrent('About Me')} onClick={closeSidebar}> About Me </a></div>
                    <div><a href="#education" className={'sidebarLink' + isCurrent('Education')} onClick={closeSidebar}> Education </a></div>
                    <div><a href="#projects" className={'sidebarLink' + isCurrent('Projects')} onClick={closeSidebar}> Projects </a></div>
                    <div><a href="#abilities" className={'sidebarLink' + isCurrent('Abilities')} onClick={closeSidebar}> Abilities </a></div>
                    <div><a href="#contactMe" className={'sidebarLink' + isCurrent('Contact Me') + ' contactMeLink'} onClick={closeSidebar}> Contact Me </a></div>
                </div>
            )
        } else if(noClose) {
            return null;
        } else {
            return (<div className='sidebar close'>
                    <div><a href="#aboutMe" className={'sidebarLink' + isCurrent('About Me')} onClick={closeSidebar}> About Me </a></div>
                    <div><a href="#education" className={'sidebarLink' + isCurrent('Education')} onClick={closeSidebar}> Education </a></div>
                    <div><a href="#projects" className={'sidebarLink' + isCurrent('Projects')} onClick={closeSidebar}> Projects </a></div>
                    <div><a href="#abilities" className={'sidebarLink' + isCurrent('Abilities')} onClick={closeSidebar}> Abilities </a></div>
                    <div><a href="#contactMe" className={'sidebarLink' + isCurrent('Contact Me') + ' contactMeLink'} onClick={closeSidebar}> Contact Me </a></div>
            </div>)
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
                        <a href="#aboutMe" className={'navLink' + isCurrent('About Me')}>
                            About Me
                        </a>
                        <a href="#education" className={'navLink' + isCurrent('Education')}>
                            Education
                        </a>
                        <a href="#projects" className={'navLink' + isCurrent('Projects')}>
                            Projects
                        </a>
                        <a href="#abilities" className={'navLink' + isCurrent('Abilities')}>
                            Abilities
                        </a>
                        <a href="#contactMe" className={'navLink contactMeLink' + isCurrent('Contact Me')}>
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
