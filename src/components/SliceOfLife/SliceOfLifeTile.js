import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const SliceOfLifeTile = ( { type, description, images } ) => {
    return (
        <Container>
            <Row className="activity">
                <Col xs={12} md={3} className='center left-align'>
                    <u><h2>{ type }</h2></u>
                </Col>
                <Col xs={12} md={9} className='center left-align'>
                    <p className="boxed">{ description }</p>
                </Col>
            </Row>
            <Row>

            </Row>
        </Container>
    )
}

export default SliceOfLifeTile
