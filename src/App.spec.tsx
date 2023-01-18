import { render, screen } from "./utils/test";
import App from "./App";

describe("App", () => {
  it("should render title", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Vite + React"
    );
  });
});
