
import CurrencyForm from './CurrencyForm';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

describe('Component CurrencyForm', () => {
  it('should render without crashing', () => {
    render(<CurrencyForm action={() => {}} />);
  });

    it('should run action callback with proper data on form submit', () => {
    const action = jest.fn();

    // render component
    render(<CurrencyForm action={action} />);

    // find “convert” button
    const submitButton = screen.getByText('Convert');

    // simulate user click on "convert" button
    userEvent.click(submitButton);

    // check if action callback was called once
    expect(action).toHaveBeenCalledTimes(1);

  });


const amountField = screen.getByTestId('amount');
const fromField = screen.getByTestId('from');
const toField = screen.getByTestId('to');



});