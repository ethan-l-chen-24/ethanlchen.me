import React from 'react'
import AbilitiesData from './AbilitiesData'
import AbilitiesSection from './AbilitiesSection'

const Languages = () => {
    return (
        <section id="abilities">
            <h1>Abilities</h1>
            <div className='quote'>
                <i>“Oprah wasn't built in a day.”</i>
                <div>- Lily Aldrin</div>
            </div>
            <hr id="abilitiesHR"/>
            { AbilitiesData.map((section, i) =>
                (<AbilitiesSection key={i} sectionName={section.sectionName} skills={section.skills} />)
            )}
        </section>
    )
}

export default Languages
