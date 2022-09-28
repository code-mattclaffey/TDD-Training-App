import { render, screen } from '@testing-library/react';
import AccordionPanel from './AccordionPanel.component';
import { useAccordion } from '../Accordion/Accordion.component';

jest.mock('../Accordion/Accordion.component');

const defaultProps = {
    buttonId: 'buttonIdValue',
    id: 'id',
};

const renderComponent = (props = {}) => render(<AccordionPanel {...defaultProps} {...props} />);


describe('<AccordionPanel />', () => {
    beforeEach(() => {
        useAccordion.mockImplementation(() => ({
            isExpanded: true,
            onClick: jest.fn()
        }))
    });

    afterEach(() => {
        useAccordion.mockReset();
    });

    it('should render with the correct aria role', () => {
        renderComponent();

        expect(screen.getByRole('region')).toBeInTheDocument();
    });

    it('should render with aria labelled by attribute', () => {
        renderComponent();

        expect(screen.getByRole('region')).toHaveAttribute('aria-labelledby', defaultProps.buttonId);
    });

    it('should render with an id attribute', () => {
        renderComponent();

        expect(screen.getByRole('region')).toHaveAttribute('id', defaultProps.id);
    });

    it('should not render when hidden', () => {
        useAccordion.mockImplementation(() => ({
            isExpanded: false,
            onClick: jest.fn()
        }))
    
        renderComponent();

        expect(screen.queryByRole('region')).not.toBeInTheDocument();
    });
});