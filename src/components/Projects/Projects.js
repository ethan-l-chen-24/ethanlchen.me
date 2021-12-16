import React from 'react'
import ProjectsData from './ProjectsData'
import ProjectTile from './ProjectTile'
import { Container, Row, Col } from 'react-bootstrap'

const Projects = () => {
    return (
        <section id="projects">
            <h1>Projects</h1>  
            <p className='quote'>
                <i>“It’s funny sometimes you walk into a place and you know you’re exactly where you’re supposed to be.”</i>
                <div>- Ted Mosby</div>
            </p>
            <hr id="projectsHR"/>
             <Container>
                <Row>
                    {ProjectsData.map((project) =>
                    (<Col xs={6} lg={3} className='center'>
                        <ProjectTile name={project.name} languages={project.languages} date={project.date} github={project.github} description={project.description}/>
                    </Col>)
                    )}
                </Row>      
            </Container> 
        </section>
    )
}

export default Projects
