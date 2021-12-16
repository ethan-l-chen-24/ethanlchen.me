import React from 'react'
import { Row, Col } from 'react-bootstrap'

const AbilityTile = ( { skill } ) => {

    const alt = 5 - skill.score;

    return (
        <Col xs={12} md={6} lg={4}>
            <Row>
                <Col xs={8} className='skillCol'>
                    {skill.name}
                </Col>
                <Col xs={4}className='scoreCol'>
                    {[...Array(alt)].map(() => 
                        (<span className="emptyCircle"></span>)
                    )}
                    {[...Array(skill.score)].map(() => 
                        (<span className="fullCircle"></span>)
                    )}
                </Col>
            </Row>
        </Col>
    )
}

export default AbilityTile
