import React from "react";
import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Header from ".";

describe("<Header />", () => {
  it("renders component correctly", () => {
    const history = createMemoryHistory();
    history.push("/");

    const { container } = render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );

    const label = screen.getByText("할 일 목록");
    expect(label).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it("renders component correctly with /add URL", () => {
    const history = createMemoryHistory();
    history.push("/add");

    const { container } = render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );

    const label = screen.getByText("할 일 추가");
    expect(label).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it("renders component correctly with /detail/:id URL", () => {
    const history = createMemoryHistory();
    history.push("/detail/1");

    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );

    const label = screen.getByText("할 일 상세");
    expect(label).toBeInTheDocument();
  });

  it("renders component correctly with NotFound", () => {
    const history = createMemoryHistory();
    history.push("/not_found");

    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );

    const label = screen.getByText("에러");
    expect(label).toBeInTheDocument();
  });
});
