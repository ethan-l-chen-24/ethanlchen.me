import React from 'react'
import SliceOfLifeData from './SliceOfLifeData'
import SliceOfLifeTile from './SliceOfLifeTile'

const SliceOfLife = () => {
    return (
            <section id="sliceOfLife">
                <div className="fall half-opacity"></div>
                <h1>Slice Of Life</h1>
                <div className='quote'>
                    <i>“Look at us, riding around in a limo, eating hot dogs… It’s like we’re the president.”</i>
                    <div>- Marshall Erickson&nbsp;&nbsp;</div>
                </div>
                <hr id="sliceOfLifeHR"/>
                {SliceOfLifeData.map((activity, i) => 
                    (<SliceOfLifeTile key={i} type={activity.type} description={activity.description} images={activity.images} />)
                )}
            </section>
    )
}

export default SliceOfLife
