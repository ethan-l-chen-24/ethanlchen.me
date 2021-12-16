import React from 'react'
import { Col, Row } from 'react-bootstrap'

const SchoolTile = ( { school, logo, location, years, degree, activities } ) => {
    return (
        <Col xs={12} lg={6}>
            <div className='boxed schoolBox'>
                <Row>
                    <Col xs={7} sm={6} md={5}>
                        <div id={logo} className="schoolLogo"></div>
                    </Col>
                    <Col xs={5} sm={6} md={7}>
                        <Row>
                            <Col xs={6}>
                            
                            </Col>
                            <Col xs={6}>
                            
                            </Col>
                        </Row>
                        <div> { school }</div>
                        <div class="vl"></div>
                        <div> { location } </div>
                        <div> { years } </div>
                        <div> { degree } </div>
                        <div> { activities} </div>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}

export default SchoolTile
