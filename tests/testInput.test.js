import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MatrixInput } from "../app/components";
import "@testing-library/jest-dom";

describe("MatrixInput", () => {
  test("should render input field", () => {
    render(<MatrixInput setMatrix={jest.fn()} />);
    const input = screen.getByPlaceholderText(
      "Introduce matriz cuadrada, ej. [[1,2],[3,4]]"
    );
    expect(input).toBeInTheDocument();
  });

  test("should show error on invalid JSON", () => {
    render(<MatrixInput setMatrix={jest.fn()} />);
    const input = screen.getByPlaceholderText(
      "Introduce matriz cuadrada, ej. [[1,2],[3,4]]"
    );
    fireEvent.change(input, { target: { value: "invalid json" } });
    expect(
      screen.getByText(
        "El valor ingresado debe ser un array de arrays, ej. [[1,2],[3,4]]."
      )
    ).toBeInTheDocument();
  });

  test("should call setMatrix with correct matrix", () => {
    const setMatrixMock = jest.fn();
    render(<MatrixInput setMatrix={setMatrixMock} />);
    const input = screen.getByPlaceholderText(
      "Introduce matriz cuadrada, ej. [[1,2],[3,4]]"
    );
    fireEvent.change(input, { target: { value: "[[1,2],[3,4]]" } });
    expect(setMatrixMock).toHaveBeenCalledWith([
      [1, 2],
      [3, 4],
    ]);
  });

  test("should show error on non-square matrix", () => {
    render(<MatrixInput setMatrix={jest.fn()} />);
    const input = screen.getByPlaceholderText(
      "Introduce matriz cuadrada, ej. [[1,2],[3,4]]"
    ); // Cambia el texto para que coincida
    fireEvent.change(input, { target: { value: "[[1,2],[3,4,5]]" } });
    expect(
      screen.getByText("la matriz debe ser cuadrada perfecta.")
    ).toBeInTheDocument();
  });
});
