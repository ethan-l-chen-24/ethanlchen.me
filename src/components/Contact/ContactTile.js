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
        <a href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label={name}
        key={name}> 
            <IconContext.Provider value={{ color: 'black', size: '4em'}}>
                {getIcon()}
            </IconContext.Provider>
        </a>
    )
}

export default ContactTile
