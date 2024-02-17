import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignIn from '../components/SignIn'; // Adjust the path as necessary
import useSignIn from '../hooks/useSignIn';

jest.mock('../hooks/useSignIn', () => {
    return jest.fn(() => [jest.fn()]);
});

jest.mock('react-router-native', () => ({
    ...jest.requireActual('react-router-native'), // This preserves other exports from the module
    useNavigate: () => jest.fn(), // Mock implementation of useNavigate
}));

describe('SignIn', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
        const signInMock = jest.fn();
        useSignIn.mockImplementation(() => [signInMock]); // Use the mock implementation for useSignIn

        const { getByPlaceholderText, getByText } = render(<SignIn />);

        // Simulate user input
        fireEvent.changeText(getByPlaceholderText('Username'), 'kalle');
        fireEvent.changeText(getByPlaceholderText('Password'), 'password');

        // Simulate form submission
        fireEvent.press(getByText('Sign In'));

        await waitFor(() => {
            // Check if signInMock was called once and with the expected arguments
            expect(signInMock).toHaveBeenCalledTimes(1);
            expect(signInMock).toHaveBeenCalledWith({
                username: 'kalle',
                password: 'password',
            });
        });
    });
});
