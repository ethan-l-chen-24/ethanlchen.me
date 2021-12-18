import React from 'react'
import Title from './Title/Title'
import AboutMe from './AboutMe/AboutMe'
import Education from './Education/Education'
import Abilities from './Abilities/Abilities'
import Projects from './Projects/Projects'
import SliceOfLife from './SliceOfLife/SliceOfLife'
import Contact from './Contact/Contact.js'

const Body = ( { title, aboutMe, education, projects, abilities, sliceOfLife, contact } ) => {
    return (
        <div>
            <Title />
            <AboutMe />
            <Education />
            <Projects />
            <Abilities />
            <SliceOfLife />
            <Contact />
        </div>
    )
}

export default Body
