import React from 'react'
import ContactData from './ContactData'
import ContactTile from './ContactTile'
import { Container, Col, Row } from 'react-bootstrap'

const Contact = () => {
    return (
        <section id="contactMe">
            <h1>Contact Me</h1>
            <p className='quote'>
                <i>"When I get sad, I just stop being sad and be awesome instead. True story"</i>
                <div>- Barney Stinson</div>
            </p>
            <Container>
                <Row>
                    { ContactData.map((contact) => 
                    (<Col xs={6} md={3} className='center'>
                        <ContactTile name={contact.name} link={contact.link} icon={contact.icon}/>
                    </Col>)
                    )}

                </Row>      
            </Container>
            
        </section>
    )
}

export default Contact
