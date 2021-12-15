import React from 'react'
import AboutMeData from './AboutMeData'

const AboutMe = () => {
    return (
        <section id="AboutMe">
            <h1>About Me</h1>
            <p className="paragraph">{AboutMeData.description}</p>
        </section>
    )
}

export default AboutMe
