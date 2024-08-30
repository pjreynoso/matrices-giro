import React from "react";
import { render, screen } from "@testing-library/react";
import { MatrixDisplay } from "../app/components";
import "@testing-library/jest-dom";

describe("MatrixDisplay", () => {
  beforeAll(() => {
    HTMLCanvasElement.prototype.getContext = () => {
      return {
        clearRect: jest.fn(),
        strokeRect: jest.fn(),
        fillText: jest.fn(),
      };
    };
  });
  test("should render message when matrix is empty", () => {
    render(<MatrixDisplay matrix={[]} />);
    expect(
      screen.getByText("Ingresa una matriz para visualizarla")
    ).toBeInTheDocument();
  });

  test("should render canvas when matrix is provided", () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    render(<MatrixDisplay matrix={matrix} />);
    const canvas = screen.getByTestId("matrix-canvas");
    expect(canvas).toBeInTheDocument();
  });
});
