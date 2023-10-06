import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Events from "./Events";
afterEach(cleanup);

describe("Events Component", () => {
  /**
   * getByText()
   */
  test("Should have a title", () => {
    render(<Events />);
    expect(screen.getByText(/Event Testing/i)).toBeInTheDocument();
  });

  /**
   * getByText(): initial Value
   */
  test("Should have initial value 0", () => {
    render(<Events />);
    expect(screen.getByText(0)).toBeInTheDocument();
  });

  /**
   * userEvent(): increment value
   */
  test("Should have increment value", async () => {
    
    render(<Events />);

    const incrementBtn = screen.getByRole("button", {
      name: /Increment/i,
    });
    await userEvent.click(incrementBtn);
    expect(screen.getByText(1)).toBeInTheDocument();
  });

  /**
   * userEvent(): decrement value
   */

  test("Should have decrement value", async () => {
    render(<Events />);

    const decrementBtn = screen.getByRole("button", {
      name: /Decrement/i,
    });
    await userEvent.click(decrementBtn);
    expect(screen.getByText(-1)).toBeInTheDocument();
  });
});
