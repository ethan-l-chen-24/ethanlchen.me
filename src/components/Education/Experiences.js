import React, { useContext } from 'react'
import { Accordion, AccordionContext, Card, useAccordionButton } from 'react-bootstrap'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

function ContextAwareToggle({ children, eventKey, callback, name }) {
    const { activeEventKey } = useContext(AccordionContext);
  
    const onClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = activeEventKey === eventKey;
  
    return (
      <div onClick={onClick} className="experiencesDropdown">
        {children}
        <u>{name}</u> {isCurrentEventKey ? <FaChevronUp /> : <FaChevronDown />}
      </div>
    );
}
  
  function Experiences( { activities, name } ) {

    return (
      <div>
      <Accordion>
        <Card className="experiences">
          <Card.Header>
            <ContextAwareToggle eventKey="0" name={name} />
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <div>
                {activities.map((activity, i) => (<div key={i}> {activity} </div>))}
            </div>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      </div>
    );
  }
  
export default Experiences
