import React from 'react'
import AbilitiesData from './AbilitiesData'
import AbilitiesSection from './AbilitiesSection'

const Languages = () => {
    return (
        <div>
            <h1>Languages</h1>
            { AbilitiesData.map((language) =>
            (<AbilitiesSection name={language.name} logo={language.logo} />)
            )}
        </div>
    )
}

export default Languages
