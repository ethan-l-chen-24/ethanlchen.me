import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const Title = () => {
    return (
        <div id="title">
            <Container>
                <Row>
                    <Col xs={6} className='rightAligned'>
                        <div className='introducing'>
                            <div>
                                INTRO
                            </div>
                            <div>
                                DUCING
                            </div>
                        </div>
                        <div className='name'>
                            <div>
                                ETHAN
                            </div>
                            <div>
                                CHEN
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} className='sideText'>
                        <div className='resume'>
                            <div>
                                inter
                            </div>
                            <div>
                                active
                            </div>
                            <div>
                                resume
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Title
