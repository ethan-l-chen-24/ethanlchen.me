import React, { useState } from 'react'
import { Accordion, Button } from 'react-bootstrap'

const Experiences = ( { activities } ) => {

    const [active, setActive] = useState(false);

    return (
        <div>
            <Accordion>
                <Accordion.Toggle as={Button}
                variant="link"
                eventKey="0"
                onClick={(() => setActive(!active))}
                >
                    Relevant Coursework
                </Accordion.Toggle>
            </Accordion>
            <Accordion.Collapse>
                hello
            </Accordion.Collapse>
        </div>
    )
}

export default Experiences
