import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
    it('renders the button with the correct text', () => {
        const { getByText } = render(<Button>Click me</Button>);
        const buttonElement = getByText('Click me');
        expect(buttonElement).toBeTruthy();
    });

    it('calls the onClick handler when the button is clicked', () => {
        const handleClick = jest.fn();
        const { getByText } = render(<Button onClick={handleClick}>Click me</Button>);
        const buttonElement = getByText('Click me');
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    // Add more test cases as needed
});