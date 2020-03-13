import React from 'react';
import { render, fireEvent, findAllByText } from '@testing-library/react';
import ContactForm from './ContactForm';

test("contact form renders without crashing", () => {
    render(<ContactForm />);
});

test("contact form adds new contact details to screen", () => {
    const { getByLabelText, findByRole, findAllByText } = render(<ContactForm />)

    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);

    fireEvent.change(firstNameInput, {
        target: { name: 'firstName', value: 'Elysia'}
    })
    fireEvent.change(lastNameInput, {target: { name: 'lastName', value: 'Gabe'}
    })
    fireEvent.change(emailInput, {
        target: { name: 'email', value: 'elysiagabe@gmail.com'}
    })
    fireEvent.change(messageInput, {
        target: { name: 'message', value: 'Hi there. Let\'s get lunch'}
    })

    findByRole('button').then((res) => {
        fireEvent.click(res);
    })


    

    
})