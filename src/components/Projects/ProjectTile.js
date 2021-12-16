import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ProjectTile = ( { name, languages, date, github, description} ) => {

    const getProjectDescription = () => {
       return (
        <div>
        <div>{ name + " | " + date }</div>
            <hr className='projectTileHR'/>
            <p>{ description }</p>
            <Row>
                <Col xs={8}>
                    <div> <u>Tags</u> </div>
                    <p>{languages.map((language, i, arr) => (i === arr.length-1 ? (<span> {language} </span>) : (<span>{language + ', '}</span>)))}</p>
                </Col>
                <Col xs={4}>
                
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
