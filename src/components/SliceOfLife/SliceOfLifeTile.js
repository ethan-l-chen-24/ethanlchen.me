import React from 'react'

const SliceOfLifeTile = ( { type, description, images } ) => {
    return (
        <div>
            <div>{ type }</div>
            <p>{ description }</p>
        </div>
    )
}

export default SliceOfLifeTile
