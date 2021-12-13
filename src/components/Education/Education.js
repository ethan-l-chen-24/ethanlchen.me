import React from 'react'
import SchoolTile from './SchoolTile'
import EducationData from './EducationData'

const Education = () => {
    return (
        <>
            Education
            { EducationData.map((school) => 
            (<SchoolTile />)
            )}

        </>
    )
}

export default Education
