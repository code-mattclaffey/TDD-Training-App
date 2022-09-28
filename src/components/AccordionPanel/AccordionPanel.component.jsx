import React from 'react';
import { useAccordion } from '../Accordion/Accordion.component';

const AccordionPanel = (props) => {
    const { isExpanded } = useAccordion();

    return <div role="region" aria-labelledby={props.buttonId} id={props.id} hidden={!isExpanded}>Hello World</div>;
}

export default AccordionPanel;