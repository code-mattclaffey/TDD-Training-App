import { render, screen } from '@testing-library/react';
import Accordion, { useAccordion } from './Accordion.component';

const defaultProps = {};

const renderComponent = (props = {}) => render(<Accordion {...defaultProps} {...props} />);

const StubComponent = () => {
    const { isExpanded } = useAccordion();

    return <p>{`${isExpanded}`}</p>;
}

describe('<Accordion />', () => {
    it('should render with children', () => {
        renderComponent({ children: <p>Hello World</p> });

        expect(screen.getByText('Hello World')).toBeInTheDocument();
    });

    it('should pass down isExpanded state to the component', () => {
        renderComponent({
            children: <><StubComponent /></>
        })

        expect(screen.getByText('false')).toBeInTheDocument();
    });
});