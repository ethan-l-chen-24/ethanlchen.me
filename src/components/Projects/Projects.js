import React from 'react'
import ProjectsData from './ProjectsData'
import ProjectTile from './ProjectTile'

const Projects = () => {
    return (
        <div>
            Projects   
            {ProjectsData.map((project) =>
            (<ProjectTile name={project.name} languages={project.languages} date={project.date} github={project.github} description={project.description}/>)
            )}
        </div>
    )
}

export default Projects
