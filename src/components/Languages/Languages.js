import React from 'react'
import LanguagesData from './LanguagesData'
import LanguageTile from './LanguageTile'

const Languages = () => {
    return (
        <div>
            Languages
            { LanguagesData.map((language) =>
            (<LanguageTile name={language.name} logo={language.logo} />)
            )}
        </div>
    )
}

export default Languages
