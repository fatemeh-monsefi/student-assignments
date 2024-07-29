import { render, screen, fireEvent } from "@testing-library/react";
import LiveInput from "../components/4-LiveInput/LiveInput";

describe("testing LiveInput component", () => {
  it('should render the input with the placeholder "Enter a text"', () => {
    render(<LiveInput />);
    expect(screen.getByPlaceholderText("Enter a text"));
  });

  it("should render an h2 element", () => {
    render(<LiveInput />);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("should render the h2 with the input value", () => {
    render(<LiveInput />);
    const input = screen.queryByPlaceholderText("Enter a text");
    const h2 = screen.getByRole("heading", { level: 2 });
    fireEvent.change(input, { target: { value: "hello" } });
    expect(h2.textContent).toBe(input.value);
  });
});
