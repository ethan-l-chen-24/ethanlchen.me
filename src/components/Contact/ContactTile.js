import React from 'react'
import { AiOutlineMail, AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai'
import { IconContext } from 'react-icons'

const ContactTile = ( { name, link } ) => {

    const getIcon = () => {
        if(name === 'Email') {
            return (<AiOutlineMail />)
        } else if(name === 'LinkedIn') {
            return (<AiFillLinkedin />)
        } else if(name === 'Github') {
            return (<AiOutlineGithub />)
        } else if(name === 'Instagram') {
            return (<AiOutlineInstagram />)
        } 
    }

    return (
        <div className="dot" id={name}>
            <a className = "icon" 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label={name}
            key={name}> 
                <IconContext.Provider value={{ color: "#1173a8", size: '5em'}}>
                    {getIcon()}
                </IconContext.Provider>
            </a>
        </div>
    )
}

export default ContactTile
