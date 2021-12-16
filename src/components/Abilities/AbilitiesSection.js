import React from 'react'
import { Container, Row } from 'react-bootstrap'
import AbilityTile from './AbilityTile'

const AbilitiesSection = ( { sectionName, skills } ) => {
    return (
        <Container>
            <h2>{ sectionName }</h2>
            <Row>
                {skills.map((skill) =>
                    (<AbilityTile skill={skill}/>)
                )}
            </Row>
        </Container>
    )
}

export default AbilitiesSection
