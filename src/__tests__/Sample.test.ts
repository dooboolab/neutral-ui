import App from "../App.svelte";
import {render} from "@testing-library/svelte";

test("App", () => {
  const renderResult = render(App, {
    props: {
      name: "Hello World!",
    },
  });

  expect(renderResult).toMatchSnapshot();
});
