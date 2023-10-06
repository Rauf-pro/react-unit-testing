import {cleanup,render, screen} from '@testing-library/react';
import Header from './Header';
afterEach(cleanup);


/**
 * Component Testing
 */

describe('Header Component', () => {
    /**
     * getByLabelText()
     */

    test('should check the menu icon', () => {
        render(<Header />);
        expect(screen.getByLabelText("menu")).toBeInTheDocument();
    })

    /**
     * getByText()
     */
    test('should check the text', () => {
        render(<Header />);
        expect(screen.getByText("React Unit Testing using Jest")).toBeInTheDocument();
    })

     /**
     * toHaveStyle(): using Accessibility
     */
     test('should have a login button', () => {
        render(<Header />);
        const loginButton = screen.getByRole('button', {
            name: 'Login'
        })
        expect(loginButton).toBeInTheDocument();
    })
});