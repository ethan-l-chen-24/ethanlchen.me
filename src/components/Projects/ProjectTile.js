import React from 'react'

const ProjectTile = ( { name, languages, date, github, description} ) => {
    return (
        <div className='boxed projectBox'>
            <div>{ name + " | " + date }</div>
            <hr className='projectHR'/>
            <p>{ description }</p>
            <div> {languages.map((language, i, arr) => (i === arr.length-1 ? (<span> {language} </span>) : (<span>{language + ', '}</span>)))} </div>
        </div> 
    )
}

export default ProjectTile
