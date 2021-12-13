import React from 'react'
import ContactData from './ContactData'
import ContactTile from './ContactTile'

const Contact = () => {
    return (
        <div>
            Contact Me
            { ContactData.map((contact) => 
            (<ContactTile name={contact.name} link={contact.link} icon={contact.icon}/>)
            )}
        </div>
    )
}

export default Contact
