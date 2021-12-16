import React from 'react'
import AbilitiesData from './AbilitiesData'
import AbilitiesSection from './AbilitiesSection'

const Languages = () => {
    return (
        <section id="abilities">
            <h1>Abilities</h1>
            { AbilitiesData.map((language) =>
                (<AbilitiesSection sectionName={language.sectionName} skills={language.skills} />)
            )}
        </section>
    )
}

export default Languages
