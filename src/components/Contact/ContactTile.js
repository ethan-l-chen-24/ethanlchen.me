import React from 'react'
import { AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai'
import { DiReact } from 'react-icons/di'

const ContactTile = ( { name, link } ) => {

    const getIcon = () => {
        if(name === 'Email') {
            return (<DiReact />)
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
            {getIcon()}
        </a>
    )
}

export default ContactTile
