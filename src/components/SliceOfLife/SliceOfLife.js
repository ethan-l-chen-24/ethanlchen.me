import React from 'react'
import SliceOfLifeData from './SliceOfLifeData'
import SliceOfLifeTile from './SliceOfLifeTile'

const SliceOfLife = () => {
    return (
        <div>
            <h1>Slice Of Life</h1>
            {SliceOfLifeData.map((activity) => 
            (<SliceOfLifeTile type={activity.type} description={activity.description} images={activity.images}/>)
            )}
        </div>
    )
}

export default SliceOfLife
