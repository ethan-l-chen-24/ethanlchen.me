import React from 'react'
import { Row, Col } from 'react-bootstrap'

const AbilityTile = ( { skill } ) => {

    const alt = 5 - skill.score;

    return (
        <Col xs={12} lg={6} xl={4}>
            <Row>
                <Col xs={6} className='skillCol'>
                    {skill.name}
                </Col>
                <Col xs={6} className='scoreCol'>
                    {[...Array(skill.score)].map((num, i) => 
                        (<span key={i} className="fullCircle"></span>)
                    )}
                    {[...Array(alt)].map((num, i) => 
                        (<span key={i} className="emptyCircle"></span>)
                    )}
                </Col>
            </Row>
        </Col>
    )
}

export default AbilityTile
