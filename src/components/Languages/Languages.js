import React from 'react'
import LanguagesData from './LanguagesData'

const Languages = () => {
    return (
        <div>
            Languages
            { LanguagesData.map((language) =>
            (<Languages/>)
            )}
        </div>
    )
}

export default Languages
