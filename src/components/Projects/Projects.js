import React from 'react'
import ProjectsData from './ProjectsData'
import ProjectTile from './ProjectTile'
import { Container, Row, Col } from 'react-bootstrap'

const Projects = () => {
    return (
        <section id="projects">
            <h1>Projects</h1>  
            <p className='quote'>
                <i>“I don’t know where I’m gonna be in five years. I don’t wanna know. I want my life to be an adventure.”</i>
                <div>- Robin Scherbatsky</div>
            </p>
            <hr id="projectsHR"/>
             <Container>
                <Row>
                    {ProjectsData.map((project) =>
                    (<Col xs={12} lg={6} className='center'>
                        <ProjectTile name={project.name} languages={project.languages} date={project.date} github={project.github} description={project.description}/>
                    </Col>)
                    )}
                </Row>      
            </Container> 
        </section>
    )
}

export default Projects
