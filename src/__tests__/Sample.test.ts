import App from "../App.svelte";
import {render} from "@testing-library/svelte";

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  // eslint-disable-next-line arrow-parens
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), 
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

test("App", () => {
  const renderResult = render(App);

  expect(renderResult).toMatchSnapshot();
});
