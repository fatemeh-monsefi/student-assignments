import { render, screen } from "@testing-library/react";
import UserTable from "../components/6-UserTable/UserTable";
import fetchMock from "jest-fetch-mock";
import data from "../mockData.json";

fetchMock.enableMocks();

describe("testing UserTable component", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("should fetch data and render a table of users", async () => {
    fetch.mockResponseOnce(JSON.stringify(data));
    render(<UserTable />);
    const rows = await screen.findAllByTestId("user-row");
    expect(rows).toHaveLength(data.length);
  });
});
