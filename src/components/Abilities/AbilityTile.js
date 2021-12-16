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
