// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ProofGate title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ProofGate/i);
    expect(titleElement).toBeInTheDocument();
});
