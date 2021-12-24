import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'

const ProjectTile = ( { name, languages, date, github, description, image } ) => {

    const [focused, setFocus] = useState(false);

    const focus = () => {
        setFocus(true)
    }

    const losefocus = () => {
        setFocus(false)
    }

    const getRepoBox = (classname) => {
        if(github !== '') {
            return (<a className={"boxed repoLink" + classname} href={github}  >
                    Repo
                </a>)
        } else {
            return null;
        } 
    }

    const getDescription = () => {
        var classname = ""
        if(focused) {
            classname=""
        } else {
            classname="invisible";
        }

        return (<div className={classname}>
            <hr className='projectTileHR' />
            <p>{ description }</p>
            <Row className='center'>
                <Col xs={8}>
                    <span  >Tags:&nbsp;</span>
                    {languages.map((language, i, arr) => (i === arr.length-1 ? (<span key={i}> {language} </span>) : (<span key={i}>{language + ', '}</span>)))}
                </Col>
                <Col xs={4}>
                    {getRepoBox(classname)}
                </Col>
            </Row>
        </div>
    )
    }

    const getProjectDescription = () => {
       return (
        <div className={focused ? '' : 'center'}>
            <div className={focused ? 'nameDateContainer' : 'nameDateContainer boxed projectTitleBox'}>
                <div className='projectName'><b>{name}</b></div>
                <div className='projectDate'><i>{date}</i></div>
            </div>
            {getDescription()}
        </div>
       )
    }

    return (
        <div className='boxed projectBox center' onMouseOver={focus} onMouseOut={losefocus}>
            <div className={!focused ? ('projectImage ' + image) : ('projectImage projectImageHover ' + image)}></div>
           {getProjectDescription()}
        </div> 
    )
}

export default ProjectTile
