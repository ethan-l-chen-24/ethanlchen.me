import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const Title = () => {
    return (
        <div id="title">
            <Container>
                <Row>
                    <Col xs={6} className='rightAligned'>
                        <div>
                            INTRO
                        </div>
                        <div>
                            DUCING
                        </div>
                        <div>
                            ETHAN
                        </div>
                        <div>
                            CHEN
                        </div>
                    </Col>
                    <Col xs={6}>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Title
