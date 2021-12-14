import React from 'react'
import SchoolTile from './SchoolTile'
import EducationData from './EducationData'

const Education = () => {
    return (
        <div>
            <h1>Education</h1>
            { EducationData.map((school) => 
            (<SchoolTile school={school.school} logo={school.logo} location={school.location} years={school.years} degree={school.degree} activites={school.activities} />)
            )}

        </div>
    )
}

export default Education
