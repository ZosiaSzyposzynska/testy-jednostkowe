import ResultBox from './ResultBox';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const testCases = [
    { amount: '50', from: 'PLN', to: 'USD', expect: 'PLN 50.00 = $14.29' },
    { amount: '100', from: 'PLN', to: 'USD', expect: 'PLN 100.00 = $28.57' },
    { amount: '50', from: 'USD', to: 'PLN', expect: '$50.00 = PLN 175.00' },
    { amount: '100', from: 'USD', to: 'PLN', expect: '$100.00 = PLN 350.00' },
    { amount: '20', from: 'PLN', to: 'PLN', expect: 'PLN 20.00 = PLN 20.00' },
    { amount: '100', from: 'PLN', to: 'PLN', expect: 'PLN 100.00 = PLN 100.00' },
    { amount: '50', from: 'USD', to: 'USD', expect: '$50.00 = $50.00' },
    { amount: '70', from: 'USD', to: 'USD', expect: '$70.00 = $70.00' },
    { amount: '-100', from: 'PLN', to: 'USD', expect: 'Wrong value…' },
    { amount: '-50', from: 'USD', to: 'PLN', expect: 'Wrong value…' },
    { amount: '-200', from: 'PLN', to: 'PLN', expect: 'Wrong value…' },
    { amount: '-20', from: 'USD', to: 'USD', expect: 'Wrong value…' },
];

describe('Component ResultBox', () => {
    it('should render component without crashing', () => {
        render(<ResultBox from="PLN" to="USD" amount={100} />);
    });

    for (const testCase of testCases) {
        if (((testCase.from === 'PLN' && testCase.to === 'USD') || 
        (testCase.from === 'USD' && testCase.to === 'PLN') ||
        (testCase.from === 'PLN' && testCase.to === 'PLN')) || 
        ((testCase.from === 'USD' && testCase.to === 'USD') && 
        parseInt(testCase.amount) > 0)) {
            it('should render proper conversion', () => {
                render(<ResultBox from={testCase.from} to={testCase.to} amount={parseInt(testCase.amount)} />);
                const output = screen.getByTestId('resultbox');
                expect(output).toHaveTextContent(testCase.expect);
            })
        }
        if (parseInt(testCase.amount) < 0) {
            it('should return zero when input is lower than zero', () => {
                render(<ResultBox from={testCase.from} to={testCase.to} amount={parseInt(testCase.amount)} />);
                const output = screen.getByTestId('resultbox');
                expect(output).toHaveTextContent(testCase.expect);
            });
        }
        cleanup();
    };
});