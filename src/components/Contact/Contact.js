import React from 'react'
import ContactData from './ContactData'
import ContactTile from './ContactTile'
import { Container, Col, Row } from 'react-bootstrap'

const Contact = () => {
    return (
        <div>
            <h1>Contact Me</h1>
            <Container>
                <Row>

                    { ContactData.map((contact) => 
                    (<Col xs={6} md={3} >
                        <ContactTile name={contact.name} link={contact.link} icon={contact.icon}/>
                    </Col>)
                    )}

                </Row>      
            </Container>
            
        </div>
    )
}

export default Contact
