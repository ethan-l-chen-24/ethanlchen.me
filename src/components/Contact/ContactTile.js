import React from 'react'
import { AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai'
import { DiReact } from 'react-icons/di'

const ContactTile = ( { name, link } ) => {

    const getIcon = () => {
        if(name === 'Email') {
            return (<DiReact size="4x"/>)
        } else if(name === 'LinkedIn') {
            return (<AiFillLinkedin size="4x" />)
        } else if(name === 'Github') {
            return (<AiOutlineGithub size="4x" />)
        } else if(name === 'Instagram') {
            return (<AiOutlineInstagram size="4x" />)
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
