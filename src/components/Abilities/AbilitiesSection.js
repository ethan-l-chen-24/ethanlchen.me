import React from 'react'
import { Container, Row } from 'react-bootstrap'
import AbilityTile from './AbilityTile'

const AbilitiesSection = ( { sectionName, skills } ) => {
    return (
        <Container className='separate'>
            <div className='categories'>
            <h2 className='skillHeader'><u>{ sectionName }</u></h2>
            <Row>
                {skills.map((skill, i) =>
                    (<span key={i}><AbilityTile skill={skill}/></span>)
                    
                )}
            </Row>
            </div>
        </Container>
    )
}

export default AbilitiesSection
