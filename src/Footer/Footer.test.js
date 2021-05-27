import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer link testing", () => {
  test("includes contact us link", () => {
    const { getByText } = render(<Footer />);
    getByText("Contact Us");
  });

  test("includes cookies link", () => {
    const { getByText } = render(<Footer />);
    getByText("Cookies");
  });

  test("includes privacy link", () => {
    const { getByText } = render(<Footer />);
    getByText("Privacy");
  });

  test("includes terms of use link", () => {
    const { getByText } = render(<Footer />);
    getByText("Terms of Use");
  });
});
