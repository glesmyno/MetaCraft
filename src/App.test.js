// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MetaCraft title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MetaCraft/i);
    expect(titleElement).toBeInTheDocument();
});
