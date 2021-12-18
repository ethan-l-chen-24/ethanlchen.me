import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ProjectTile = ( { name, languages, date, github, description} ) => {

    const getProjectDescription = () => {
       return (
        <div className='projectBox'>
            <div>
                <div className='projectName'><b>{name}</b></div>
                <div className='projectDate'><i>{date}</i></div>
            </div>
        <hr className='projectTileHR'/>
        <p>{ description }</p>
        <Row className='center'>
            <Col xs={8}>
                <span><u>Tags</u>:&nbsp;</span>
                {languages.map((language, i, arr) => (i === arr.length-1 ? (<span> {language} </span>) : (<span>{language + ', '}</span>)))}
            </Col>
            <Col xs={4}>
                <a className="boxed repoLink" href={github}>
                    Repo
                </a>
            </Col>
        </Row>

        </div>
       )
    }

    return (
        <div className='boxed projectBox center'>
           {getProjectDescription()}
        </div> 
    )
}

export default ProjectTile
