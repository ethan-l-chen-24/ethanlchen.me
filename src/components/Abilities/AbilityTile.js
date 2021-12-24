import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'

const AbilityTile = ( { skill, category } ) => {

    const alt = 5 - skill.score;

    const [focused, setFocus] = useState(false);

    const focus = () => {
        setFocus(true)
    }

    const losefocus = () => {
        setFocus(false)
    }

    const getCircles = () => {
        return (
            <span className='scoreCol' >
                {
                [...Array(skill.score)].map((num, i) => 
                    (<span key={i} className="fullCircle"></span>)
                )}
                {[...Array(alt)].map((num, i) => 
                    (<span key={i} className="emptyCircle"></span>)
                )}
            </span>
        )    
    }

    return (
        <Col xs={12} lg={6} xl={4} className='skill' onMouseOver={focus} onMouseOut={losefocus}>
            <Row>
                <Col xs={6} className='skillCol' >
                    {skill.name}
                </Col>
                <Col xs={6}>
                    {focused ? (
                        <span className='skillCol'>{(category === 'Soft Skills') ? skill.years : (skill.years + " years")}</span>
                    ) : (
                        getCircles()
                    )}
                </Col>
            </Row>
        </Col>
    )
}

export default AbilityTile
