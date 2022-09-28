import React, { createContext, useContext, useState } from 'react';

const AccordionContext = createContext();

export const useAccordion = () => {
    const context = useContext(AccordionContext);
  
    if (!context) {
      throw Error(
        "You need your component to be sat within the accordion to work"
      );
    }
  
    return context;
  };

const Accordion = ({ children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return <AccordionContext.Provider value={{ isExpanded, onClick: () => setIsExpanded(!isExpanded) }}>{children}</AccordionContext.Provider>;
}

export default Accordion;