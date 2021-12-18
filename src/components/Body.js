import React from 'react'
import Title from './Title/Title'
import AboutMe from './AboutMe/AboutMe'
import Education from './Education/Education'
import Abilities from './Abilities/Abilities'
import Projects from './Projects/Projects'
import SliceOfLife from './SliceOfLife/SliceOfLife'
import Contact from './Contact/Contact.js'

const Body = ( { aboutMe, education, projects, abilities, sliceOfLife, contactMe } ) => {
    return (
        <div>
            <Title />
            <div ref={aboutMe}>
                <AboutMe />
            </div>

            <div ref={education}>
                <Education />
            </div>

            <div ref={projects}>
                <Projects />
            </div>

            <div ref={abilities}>
                <Abilities />
            </div>

            <div ref={sliceOfLife}>
                <SliceOfLife />
            </div>

            <div ref={contactMe}>
                <Contact />
            </div>
        </div>
    )
}

export default Body
