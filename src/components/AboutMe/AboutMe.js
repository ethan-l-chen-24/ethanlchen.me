import React from 'react'
import AboutMeData from './AboutMeData'

const AboutMe = () => {
    return (
        <>
            <div className='title'>{AboutMeData.name}</div>
            <h1>About Me</h1>
            <p>{AboutMeData.description}</p>
        </>
    )
}

export default AboutMe
