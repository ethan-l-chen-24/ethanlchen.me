import React, { useContext } from 'react'
import { Accordion, AccordionContext, Card, useAccordionButton, Button } from 'react-bootstrap'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

var state = false;

function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);
  
    const onClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = activeEventKey === eventKey;
  
    return (
      <div onClick={onClick} className="experiencesDropdown">
        {children}
        <u>Relevant Experiences</u> {isCurrentEventKey ? <FaChevronUp /> : <FaChevronDown />}
      </div>
    );
}
  
  function Experiences( { activities } ) {

    return (
      <Accordion>
        <Card className="experiences">
          <Card.Header>
            <ContextAwareToggle eventKey="0" />
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <div>
                {activities.map((activity) => (<div>{activity.name + " | " + activity.position}</div>))}
            </div>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
  
export default Experiences
