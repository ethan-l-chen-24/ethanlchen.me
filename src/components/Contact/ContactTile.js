import React from 'react'

const ContactTile = ( { name, link, icon } ) => {
    return (
        <div>
            <div>{ name }</div>
            <div>{ link }</div>
            <div>{ icon }</div>
        </div>
    )
}

export default ContactTile
