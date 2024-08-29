"use client";
import React, { useState } from "react";

export const MatrixInput = ({ setMatrix }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim() === "") {
      setError("");
      setMatrix([]);
      return;
    }

    try {
      const parsedData = JSON.parse(value);

      // Comprobamos si el resultado es un array
      if (!Array.isArray(parsedData)) {
        throw new Error("El valor ingresado debe ser un array de arrays.");
      }

      // Comprobamos si cada elemento del array principal también es un array
      const dimension = parsedData.length;
      if (parsedData.some(element => !Array.isArray(element) || element.length !== dimension)) {
        throw new Error("la matriz debe ser cuadrada perfecta.");
      }

      setMatrix(parsedData);
      setError("");
    } catch (err) {
      // Capturamos y manejamos los diferentes tipos de errores
      if (err instanceof SyntaxError) {
        setError("El valor ingresado debe ser un array de arrays, ej. [[1,2],[3,4]].");
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <div className="w-full">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Introduce matriz cuadrada, ej. [[1,2],[3,4]]"
        className="p-2 border rounded w-4/12"
      />
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
}
