import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AbilityTile from './AbilityTile'

const AbilitiesSection = ( { sectionName, skills } ) => {
    return (
        <Container className='separate'>
            <div className='categories'>
            <h2 className='skillHeader'><u>{ sectionName }</u></h2>
            <Row>
                {skills.map((skill) =>
                    (<AbilityTile skill={skill}/>)
                )}
            </Row>
            </div>
        </Container>
    )
}

export default AbilitiesSection
