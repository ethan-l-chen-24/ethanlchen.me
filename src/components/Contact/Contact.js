import React from 'react'
import ContactData from './ContactData'
import ContactTile from './ContactTile'
import { Container, Col, Row } from 'react-bootstrap'

const Contact = () => {
    return (
        <section id="contactMe">
            <h1>Contact Me</h1>
            <p className='quote'>
                <i>“I don’t know where I’m gonna be in five years. I don’t wanna know. I want my life to be an adventure.”</i>
                <div>- Robin Scherbatsky</div>
            </p>
            <hr id="contactMeHR"/>
            <Container>
                <Row>
                    { ContactData.map((contact) => 
                    (<Col xs={6} lg={3} className='center'>
                        <ContactTile name={contact.name} link={contact.link} icon={contact.icon}/>
                    </Col>)
                    )}

                </Row>      
            </Container>
            <p className='copyright'>
                Copyright &copy; 2021 by Ethan Chen. All rights reserved.
            </p>
            
        </section>
    )
}

export default Contact
