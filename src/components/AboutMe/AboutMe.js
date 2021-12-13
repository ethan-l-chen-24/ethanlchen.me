import React from 'react'
import AboutMeData from './AboutMeData'

const AboutMe = () => {
    return (
        <>
            <div className='title'>{AboutMeData.name}</div>
            About Me
            <p>{AboutMeData.description}</p>
        </>
    )
}

export default AboutMe
