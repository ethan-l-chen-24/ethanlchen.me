import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const SliceOfLifeTile = ( { type, description, images } ) => {   

    const getMedia = (media, i) => {
        if(media.type === 'photo') {
            return <span key={i} className={'media ' + media.link} ></span>
        } else if(media.type === 'video') {
            return (<iframe key={i} className={'media ' + media.link}
                src="https://www.youtube.com/embed/q38KuSd8IU0">
            </iframe>)
        } else {
            return null;
        }
    }

    return (
        <Container>
            <Row className="activity">
                <Col xs={12} md={3} className='center left-align'>
                    <h2><u>{ type }</u></h2>
                </Col>
                <Col xs={12} md={9} className='center'>
                    <p className="boxed solDescription">{ description }</p>
                </Col>
            </Row>
            <Row className="imageRow">
                {images.map((media, i) => (
                    getMedia(media, i)
                ))}
            </Row>
        </Container>
    )
}

export default SliceOfLifeTile
