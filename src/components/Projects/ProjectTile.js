import React from 'react'

const ProjectTile = ( { name, languages, date, github, description} ) => {
    return (
        <div>
            <div>{ name }</div>
            <div> {languages.map((language, i, arr) => (i == arr.length-1 ? (<span> {language} </span>) : (<span>{language + ', '}</span>)))} </div>
            <div>{ date }</div>
            <div>{ github }</div>
            <p>{ description }</p>
        </div> 
    )
}

export default ProjectTile
