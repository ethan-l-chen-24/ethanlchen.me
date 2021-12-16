import React from 'react'
import { Col } from 'react-bootstrap'

const SchoolTile = ( { school, logo, location, years, degree, activities } ) => {
    return (
        <Col xs={12} lg={6}>
            <div className='boxed schoolBox'>
                <div>{ school }</div>
                <div> { logo }</div>
                <div> { location } </div>
                <div> { years } </div>
                <div> { degree } </div>
                <div> { activities} </div>
            </div>
        </Col>
    )
}

export default SchoolTile
