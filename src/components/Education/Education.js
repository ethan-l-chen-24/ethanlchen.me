import React from 'react'
import SchoolTile from './SchoolTile'
import EducationData from './EducationData'
import { Container, Row } from 'react-bootstrap'

const Education = () => {
    return (
        <section id="education">
            <h1>Education</h1>
            <p className='quote'>
                <i>“It’s funny sometimes you walk into a place and you know you’re exactly where you’re supposed to be.”</i>
                <div>- Ted Mosby</div>
            </p>
            <hr id="projectsHR"/>
            <Container>
                <Row>
                    { EducationData.map((school) => 
                    (<SchoolTile school={school.school} logo={school.logo} location={school.location} years={school.years} degree={school.degree} activities={school.activities} />)
                    )}  
                </Row>
            </Container>

        </section>
    )
}

export default Education
