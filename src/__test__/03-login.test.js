import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../components/3-Login/Login";

describe("testing Login component", () => {
  it("should find the button in the document", () => {
    render(<Login />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should find the button with the text 'login'", () => {
    render(<Login />);
    expect(screen.getByRole("button", { name: "login" })).toBeInTheDocument();
  });

  it("should change the button text content to logout when clicked", () => {
    render(<Login />);
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    expect(btn.textContent).toBe("logout");
  });
});
