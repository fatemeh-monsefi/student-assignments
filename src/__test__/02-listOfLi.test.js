import { render, screen } from "@testing-library/react";
import ListOfLi from "../components/2-ListOfLi/ListOfLi";

describe("testing ListOfLi component", () => {
  it("should render correct number of lis", () => {
    const usernames = ["john", "sam", "jasem", "tom"];
    render(<ListOfLi usernames={usernames} />);
    const lis = screen.getAllByRole("listitem");
    expect(lis).toHaveLength(usernames.length);
  });
});
