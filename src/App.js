import React from 'react'
import AboutMe from './components/AboutMe/AboutMe'
import Education from './components/Education/Education'
import Abilities from './components/Abilities/Abilities'
import Projects from './components/Projects/Projects'
import SliceOfLife from './components/SliceOfLife/SliceOfLife'
import Contact from './components/Contact/Contact.js'

function App() {
  return (
      <div className="App">

        <AboutMe />
        <Education />
        <Projects />
        <Abilities />
        <SliceOfLife />
        <Contact />


      </div>
  );
}

export default App;
