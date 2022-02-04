import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Blog from "./Blog";
import Togglable from "./Togglable";

describe("first test", () => {
  test("renders content", () => {
    const blog = {
      title: "jep",
      author: "pepe",
      url: "jee.com",
      likes: 1,
      user: "idiasd",
    };

    const component = render(<Blog blog={blog} />);
    const div = component.container.querySelector(".togglableContent");

    expect(div).toHaveStyle("display: none");
    expect(component.container).toHaveTextContent("jep");
    expect(component.container).toHaveTextContent("pepe");
  });
});
describe("togglable", () => {
  let component;

  beforeEach(() => {
    component = render(
      <Togglable buttonLabel="view" buttonLabel2="hide">
        <div className="testDiv" />
      </Togglable>
    );
  });
  test("togglable test", () => {
    const button = component.getByText("view");
    fireEvent.click(button);

    const div = component.container.querySelector(".togglableContent");
    expect(div).not.toHaveStyle("display: none");
  });
});

describe("clickin buttons", () => {
  test("click button twice", () => {
    const blog = {
      title: "jep",
      author: "pepe",
      url: "jee.com",
      likes: 1,
      user: "idiasd",
    };

    const mockHandler = jest.fn();

    const component = render(<Blog blog={blog} newLike={mockHandler} />);
    const button = component.getByText("like");
    fireEvent.click(button);
    fireEvent.click(button);

    expect(mockHandler.mock.calls).toHaveLength(2);
  });
});
