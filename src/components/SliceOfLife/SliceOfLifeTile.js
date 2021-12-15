import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const SliceOfLifeTile = ( { type, description, images } ) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h2>{ type }</h2>
                </Col>
                <Col>
                    <p>{ description }</p>
                </Col>
            </Row>
            <Row>

            </Row>
        </Container>
    )
}

export default SliceOfLifeTile
