import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('<App />', () => {
  it('should open the AccordionPanel when AccordionButton is click', () => {
    render(<App />);

    userEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('region')).toBeInTheDocument();
  });
});