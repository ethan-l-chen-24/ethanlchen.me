import React, { useContext } from 'react'
import { Accordion, AccordionContext, Card, useAccordionButton, Button } from 'react-bootstrap'

function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);
  
    const onClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = activeEventKey === eventKey;
  
    return (
      <div
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
  
  function Experiences() {
    return (
      <Accordion>
        <Card className="experiences">
          <Card.Header>
            <ContextAwareToggle eventKey="0">Relevant Experiences</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <div>WHERE IS THE BODY</div>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
  
export default Experiences
