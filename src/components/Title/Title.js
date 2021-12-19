import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { BiChevronDownCircle } from 'react-icons/bi'
import { IconContext } from 'react-icons/lib'

const Title = () => {
    return (
        <div id="title">
            <Container>
                <Row>
                    <Col xs={6} className='rightAligned'>
                        <div className='introducing defaultCursor'>
                            <div>
                                <span className='hoverChangeOrange'>I</span>
                                <span className='hoverChangeOrange'>N</span>
                                <span className='hoverChangeOrange'>T</span>
                                <span className='hoverChangeOrange'>R</span>
                                <span className='hoverChangeOrange'>O</span>
                            </div>
                            <div>
                                <span className='hoverChangeOrange'>D</span>
                                <span className='hoverChangeOrange'>U</span>
                                <span className='hoverChangeOrange'>C</span>
                                <span className='hoverChangeOrange'>I</span>
                                <span className='hoverChangeOrange'>N</span>
                                <span className='hoverChangeOrange'>G</span>
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
                                <span className='disappear'>i</span>
                                <span className='disappear'>n</span>
                                <span className='disappear'>t</span>
                                <span className='disappear'>e</span>
                                <span className='disappear'>r</span>
                            </div>
                            <div>
                                <span className='disappear'>a</span>
                                <span className='disappear'>c</span>
                                <span className='disappear'>t</span>
                                <span className='disappear'>i</span>
                                <span className='disappear'>v</span>
                                <span className='disappear'>e</span>
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
            <div className='center'>
                <IconContext.Provider value={{ size: '5em'}}>
                    <a href="#aboutMe" className='downIcon'><BiChevronDownCircle/></a>
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default Title
