import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Experiences from './Experiences'

const SchoolTile = ( { school, logo, location, years, degree, activities } ) => {
    return (
        <Col xs={12} xl={6}>
            <div className='boxed schoolBox'>
                <Row>
                    <Col xs={12} sm={6} md={5} lg={4} xl={5} className='center'>
                        <div id={logo} className="schoolLogo"></div>
                    </Col>
                    <Col xs={12} sm={6} md={7} lg={8} xl={7} className='leftBorder centerText'>
                        <Row>
                            <Col xs={8} sm={12} lg={7} xl={12} className='vlRight'>
                                <div> { school }</div>
                            </Col>
                            <Col xs={4} sm={12} lg={5} xl={12} className='center'>
                                <div> { location } </div>
                            </Col>
                        </Row>
                        <hr className="educationHR"/>
                        
                        <div> { years } </div>
                        <div> { degree } </div>
                        <Experiences activities={activities}/>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}

export default SchoolTile
