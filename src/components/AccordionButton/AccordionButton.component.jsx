import React from 'react';
import { useAccordion } from '../Accordion/Accordion.component';

const AccordionButton = (props) => {
    const { isExpanded, onClick } = useAccordion();
    
    return (
        <h3><button type="button" aria-expanded={isExpanded} aria-controls={props.ariaControls} id={props.id} onClick={onClick}>yooooo it's friyay</button></h3>
    );
}

export default AccordionButton;