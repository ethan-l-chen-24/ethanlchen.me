import React from 'react'
import AboutMeData from './AboutMeData'

const AboutMe = () => {
    return (
        <section id="aboutMe">
            <h1>About Me</h1>
            <p className='quote'>
                    <i>“When I get sad, I stop being sad and be awesome instead. True story.”</i>
                    <div>- Barney Stinson</div>
            </p>
            <hr id="aboutMeHR"/>
            <p className="paragraph" id="aboutMeParagraph">{AboutMeData.description}</p>
        </section>
    )
}

export default AboutMe
