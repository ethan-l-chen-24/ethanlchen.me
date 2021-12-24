import React from 'react'
import ProjectsData from './ProjectsData'
import ProjectTile from './ProjectTile'
import { Container, Row, Col } from 'react-bootstrap'

const Projects = () => {
    return (
        <section id="projects">
            <h1>Projects</h1>  
            <div className='quote'>
                <i>“I don’t know where I’m gonna be in five years. I don’t wanna know. I want my life to be an adventure.”</i>
                <div>- Robin Scherbatsky&nbsp;&nbsp;</div>
            </div>
            <hr id="projectsHR"/>
             <Container>
                <Row>
                    {ProjectsData.map((project, i) =>
                    (<Col key={i} xs={12} lg={6} className='center'>
                        <ProjectTile key={i} name={project.name} languages={project.languages} date={project.date} github={project.github} description={project.description} image={project.image}/>
                    </Col>)
                    )}
                </Row>      
            </Container> 
        </section>
    )
}

export default Projects
