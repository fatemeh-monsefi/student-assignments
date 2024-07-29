import { render, screen, fireEvent } from "@testing-library/react";
import TodoContainer from "../components/5-TodoApp/TodoContainer";

describe("testing TodoContainer component", () => {
  it("should render one li with the input value", () => {
    render(<TodoContainer />);
    const input = screen.getByPlaceholderText("write a todo");
    fireEvent.change(input, { target: { value: "workout" } });
    fireEvent.submit(input);
    const li = screen.getByRole("listitem");
    expect(li.textContent).toBe("workout");
  });

  it("should render multiple li when different input values are passed", () => {
    render(<TodoContainer />);

    const todos = [
      "washing the dishes",
      "working out",
      "coding",
      "doing the laundry",
    ];

    const input = screen.getByPlaceholderText("write a todo");

    todos.forEach((todo) => {
      fireEvent.change(input, { target: { value: todo } });
      fireEvent.submit(input);
    });

    const lis = screen.getAllByRole("listitem");

    lis.forEach((li, index) => {
      expect(li.textContent).toBe(todos[index]);
    });
  });
});
