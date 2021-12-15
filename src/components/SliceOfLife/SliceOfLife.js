import React from 'react'
import SliceOfLifeData from './SliceOfLifeData'
import SliceOfLifeTile from './SliceOfLifeTile'

const SliceOfLife = () => {
    return (
        <div id="sliceOfLife">
            <h1>Slice Of Life</h1>
            <p className='quote'>
                <i>“Look at us, riding around in a limo, eating hot dogs…it’s like we’re the president.”</i>
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
