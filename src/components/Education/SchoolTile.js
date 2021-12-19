import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Experiences from './Experiences'

const SchoolTile = ( { school, logo, location, years, degree, activities, classes } ) => {
    return (
        <Col xs={12} xl={6}>
            <div className='boxed schoolBox'>
                <Row>
                    <Col xs={12} sm={6} md={5} lg={4} xl={5} className='center'>
                        <div id={logo} className="schoolLogo"></div>
                    </Col>
                    <Col xs={12} sm={6} md={7} lg={8} xl={7} className='leftBorder centerText'>
                        <Row>
                            <Col xs={7} sm={12} lg={7} xl={12} className='vlRight'>
                                <div className='schoolName'> <b>{ school }</b></div>
                            </Col>
                            <Col xs={5} sm={12} lg={5} xl={12} className='center'>
                                <div className='schoolLocation'> <i>{ location }</i> </div>
                            </Col>
                        </Row>
                        <hr className="educationHR"/>
                        
                        <div> { years } </div>
                        <div> { degree } </div>
                        <div className='invisibleSm'> 
                            <Experiences activities={activities} name='Activities'/> 
                            <Experiences activities={classes} name='Relevant Coursework'/>
                        </div>
                    </Col>
                </Row>
                <Row className='center visibleSm bottomDropdowns'>
                        <Experiences activities={activities} name='Activities'/>
                        <Experiences activities={classes} name='Relevant Coursework'/>
                    </Row>
            </div>
        </Col>
    )
}

export default SchoolTile
