import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useAccordion } from '../Accordion/Accordion.component';
import AccordionButton from './AccordionButton.component';

jest.mock('../Accordion/Accordion.component');

const defaultProps = {
    ariaControls: 'panel-id-name',
    id: 'id',
};

const renderComponent = (props = {}) => render(<AccordionButton {...defaultProps} {...props} />)

describe('<AccordionButton />', () => {
    beforeEach(() => {
        useAccordion.mockImplementation(() => ({
            isExpanded: false,
            onClick: jest.fn()
        }))
    });

    afterEach(() => {
        useAccordion.mockReset();
    });

    it('should render a button', () => {
        renderComponent();

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should render with aria-expanded attribute', () => {
        renderComponent();

        expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');
    });

    it('should render with aria-controls attribute', () => {
        renderComponent();

        expect(screen.getByRole('button')).toHaveAttribute('aria-controls', defaultProps.ariaControls);
    });

    it('should render with an id attribute', () => {
        renderComponent();

        expect(screen.getByRole('button')).toHaveAttribute('id', defaultProps.id);
    });

    it('should render with a h3 tag', () => {
        renderComponent();

        expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    });

    it('should render with aria-expanded attribute with the value true', () => {
        useAccordion.mockImplementation(() => ({
            isExpanded: true,
            onClick: jest.fn()
        }));

        renderComponent();

        expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
    });

    it('should fire on click event', () => {
        const onClickMock = jest.fn();

        useAccordion.mockImplementation(() => ({
            isExpanded: false,
            onClick: onClickMock
        }));

        renderComponent();

        userEvent.click(screen.getByRole('button'));

        expect(onClickMock).toHaveBeenCalled();
    });
});