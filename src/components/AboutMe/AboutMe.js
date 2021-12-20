import React from 'react'
import AboutMeData from './AboutMeData'
import { Container, Row, Col } from 'react-bootstrap'

const AboutMe = () => {
    return (
        <section id="aboutMe">
            <h1>About Me</h1>
            <div className='quote'>
                    <i>“When I get sad, I stop being sad and be awesome instead. True story.”</i>
                    <div>- Barney Stinson&nbsp;&nbsp;</div>
            </div>
            <hr id="aboutMeHR"/>
            <Container>
                <Row>
                    <Col xs={12} md={7}>
                    <p className="paragraph" id="aboutMeParagraph">{AboutMeData.description}</p>
                    </Col>
                    <Col xs={12} md={5} className='profileDisplay'>
                        <div id="profile"></div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutMe
