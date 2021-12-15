import React from 'react'
import SliceOfLifeData from './SliceOfLifeData'
import SliceOfLifeTile from './SliceOfLifeTile'

const SliceOfLife = () => {
    return (
        <div id="sliceOfLife">
            <h1>Slice Of Life</h1>
            <p className='quote'>
                <i>"I don't know where I'm gonna be in five years. I don't wanna know. I want my life to be an adventure."</i>
                <div>- Robin Scherbatsky</div>
            </p>
            <hr id="sliceOfLifeHR"/>
            {SliceOfLifeData.map((activity) => 
            (<SliceOfLifeTile type={activity.type} description={activity.description} images={activity.images}/>)
            )}
        </div>
    )
}

export default SliceOfLife
