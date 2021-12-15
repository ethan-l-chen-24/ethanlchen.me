import React from 'react'
import SliceOfLifeData from './SliceOfLifeData'
import SliceOfLifeTile from './SliceOfLifeTile'

const SliceOfLife = () => {
    return (
        <div id="sliceOfLife">
            <h1>Slice Of Life</h1>
            <p className='quote'>
                <i>"You have to let me dance my own battles."</i>
                <div>- Marshall Erickson</div>
            </p>
            <hr id="sliceOfLifeHR"/>
            {SliceOfLifeData.map((activity) => 
            (<SliceOfLifeTile type={activity.type} description={activity.description} images={activity.images}/>)
            )}
        </div>
    )
}

export default SliceOfLife
