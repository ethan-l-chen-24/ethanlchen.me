import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Body from './components/Body'
import { useInView } from 'react-intersection-observer'

function App() {

  const options = {
    threshold: 0.2
  }

  const [aboutMe, aboutMeView] = useInView(options);
  const [education, educationView] = useInView(options);
  const [projects, projectsView] = useInView(options);
  const [sliceOfLife, sliceOfLifeView] = useInView(options);
  const [contactMe, contactMeView] = useInView(options);
  const [abilities, abilitiesView] = useInView(options);

  const getActive = () => {
    if(aboutMeView) {
      return 'About Me'
    } else if(educationView) {
      return 'Education'
    } else if(projectsView) {
      return 'Projects'
    } else if(sliceOfLifeView) {
      return 'Slice of Life'
    } else if(contactMeView) {
      return 'Contact Me'
    } else if(abilitiesView) {
      return 'Abilities'
    } else {
      return 'Title'
    }
  }

  return (
      <div className="App">
        <Navbar active={getActive()} />
        <Body 
          aboutMe={aboutMe}
          education={education}
          projects={projects}
          sliceOfLife={sliceOfLife}
          contactMe={contactMe}
          abilities={abilities}
        />
      </div>
  );
}

export default App;
