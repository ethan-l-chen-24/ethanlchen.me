import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AbilityTile from './AbilityTile'

const AbilitiesSection = ( { sectionName, skills } ) => {
    return (
        <Container className='separate'>
            <Row>
                <Col xs={6} lg={3} xl={2} className="abilityHeader">
                    <h2><u>{ sectionName }</u></h2>
                </Col>
            </Row>
            <Row>
                {skills.map((skill) =>
                    (<AbilityTile skill={skill}/>)
                )}
            </Row>
        </Container>
    )
}

export default AbilitiesSection
