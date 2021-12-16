import React from 'react'
import { Col } from 'react-bootstrap'

const AbilityTile = ( { skill } ) => {
    return (
        <Col>
            <div> {skill.name} </div>
            <div> {skill.score} </div>
            <div>hello</div> 
        </Col>
    )
}

export default AbilityTile
