import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { BiChevronDownCircle } from 'react-icons/bi'
import { IconContext } from 'react-icons/lib'

const Title = () => {
    return (
        <div id="title">
            <Container>
                <Row className='main'>
                    <Col xs={6} className='rightAligned'>
                        <div className='introducing defaultCursor'>
                            <div>
                                <span className='hoverChangeOrange'>M</span>
                                <span className='hoverChangeOrange'>E</span>
                                <span className='hoverChangeOrange'>E</span>
                                <span className='hoverChangeOrange'>T</span>
                            </div>
                        </div>
                        <div className='name defaultCursor'>
                            <div>
                                <span className='hoverChangePurple'>E</span>
                                <span className='hoverChangePurple'>T</span>
                                <span className='hoverChangePurple'>H</span>
                                <span className='hoverChangePurple'>A</span>
                                <span className='hoverChangePurple'>N</span>
                            </div>
                            <div>
                                <span className='hoverChangePurple'>C</span>
                                <span className='hoverChangePurple'>H</span>
                                <span className='hoverChangePurple'>E</span>
                                <span className='hoverChangePurple'>N</span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} className='sideText'>
                        <div className='resume defaultCursor'>
                            <div>
                                <span className='disappear'>v</span>
                                <span className='disappear'>i</span>
                                <span className='disappear'>s</span>
                                <span className='disappear'>u</span>
                                <span className='disappear'>a</span>
                                <span className='disappear'>l</span>
                            </div>
                            <div>
                                <span className='disappear'>r</span>
                                <span className='disappear'>e</span>
                                <span className='disappear'>s</span>
                                <span className='disappear'>u</span>
                                <span className='disappear'>m</span>
                                <span className='disappear'>e</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='center bottom'>
                <IconContext.Provider value={{ size: '5em'}}>
                    <a href="#aboutMe" className='downIcon'><BiChevronDownCircle/></a>
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default Title
