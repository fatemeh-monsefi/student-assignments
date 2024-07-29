import { render, screen } from "@testing-library/react";
import Text from "../components/1-Text/Text";

describe("testing Text component", () => {
  it("should render Text with the provided props", () => {
    render(<Text headingText="heading" />);
    expect(screen.getByText("heading")).toBeInTheDocument();
  });

  it("should find the the matching element with the text 'Welcome To APS'", () => {
    render(<Text />);
    expect(screen.getByText("Welcome To APS")).toBeInTheDocument();
  });
});
