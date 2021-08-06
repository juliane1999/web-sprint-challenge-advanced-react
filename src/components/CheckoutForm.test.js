import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const header = screen.getByText(/Checkout Form/i);
    expect(header).toBeInTheDocument();
    expect(header).toBeTruthy();
    expect(header).toHaveTextContent(/Checkout Form/i);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    const handleSubmit = screen.getByRole('button');
    userEvent.click(handleSubmit);
    
});
