import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import Props from './Props';
afterEach(cleanup);

/**
 * propTypes() is used runtime type checking for React props and similar objects.
 * 
 */
describe('Props Component', () => {

    test('Should have a title', () => {
        render(<Props header="Props Title" description="Props Description" />);
        expect(screen.getByText("Props Title")).toBeInTheDocument();
    })

    test('Should have a description', () => {
        render(<Props header="Props Title" description="Props Description" />);
        expect(screen.getByText("Props Description")).toBeInTheDocument();
    })

    test('Description Initial Color', () => {
        render(<Props />);
        expect(screen.getByLabelText("description")).toHaveStyle({ color: "red" });
    })

    test('Checkbox Initial Condition', () => {
        render(<Props />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).not.toBeChecked();
    })

    test('Description color after checkbox checked', () => {
        render(<Props />);
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(screen.getByLabelText("description")).toHaveStyle({ color: "green" });
    })
})