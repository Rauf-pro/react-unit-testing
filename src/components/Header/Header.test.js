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
});