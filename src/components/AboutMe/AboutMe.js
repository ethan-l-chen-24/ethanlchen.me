import React from 'react'
import AboutMeData from './AboutMeData'

const AboutMe = () => {
    return (
        <div>
            <div className='title'>{AboutMeData.name}</div>
            About Me
            <p>{AboutMeData.description}</p>
        </div>
    )
}

export default AboutMe
