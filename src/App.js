import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion.component';
import AccordionButton from './components/AccordionButton/AccordionButton.component';
import AccordionPanel from './components/AccordionPanel/AccordionPanel.component';

function App() {
  return (
    <div className="App">
      <Accordion>
        <AccordionButton id="buttonId" ariaControls="panelId" />
        <AccordionPanel id="panelId" buttonId="buttonId" />
      </Accordion>
    </div>
  );
}

export default App;
