import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Body from './components/Body'
import { useInView } from 'react-intersection-observer'

function App() {

  const options = {
    threshold: 0.15
  }

  var [sideBarOpen, setSideBar] = useState(true)
  var [noClose, setNoClose] = useState(true)
  const openSidebar = () => {
    setSideBar(true)
    setNoClose(false)
  }
  const closeSidebar = () => {setSideBar(false)}
  const endNoClose = () => {setNoClose(false)}

  const [aboutMe, aboutMeView] = useInView(options);
  const [education, educationView] = useInView(options);
  const [projects, projectsView] = useInView(options);
  const [abilities, abilitiesView] = useInView(options);
  const [contactMe, contactMeView] = useInView(options);

  const getActive = () => {
    if(aboutMeView) {
      return 'About Me'
    } else if(educationView) {
      return 'Education'
    } else if(projectsView) {
      return 'Projects'
    } else if(contactMeView) {
      return 'Contact Me'
    } else if(abilitiesView) {
      return 'Abilities'
    } else {
      if(sideBarOpen) {
        setSideBar(false)
      } if(!noClose) {
        setNoClose(true)
      }
      return 'Title'
    }
  }

  return (
      <div className="App">
        <Navbar active={getActive()} sideBarOpen={sideBarOpen} openSidebar={openSidebar} closeSidebar={closeSidebar} noClose={noClose} endNoClose={endNoClose} />
        <Body 
          aboutMe={aboutMe}
          education={education}
          projects={projects}
          contactMe={contactMe}
          abilities={abilities}
        />
      </div>
  );
}

export default App;
