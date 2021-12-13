import React from 'react'

const SchoolTile = ( { school, logo, location, years, degree, activities } ) => {
    return (
        <div>
            <div>{ school }</div>
            <div> { logo }</div>
            <div> { location } </div>
            <div> { years } </div>
            <div> { degree } </div>
            <div> { activities} </div>
        </div>
    )
}

export default SchoolTile
