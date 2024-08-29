"use client";
import React, { useRef, useEffect } from "react";

export const MatrixDisplay = ({ matrix = [] }) => {
  const dimension = matrix.length;
  const canvasSize = dimension > 0 ? 400 : 0;  // Solo asigna tamaño si la matriz no está vacía
  const canvasRef = useRef(null);

  useEffect(() => {
    // Asegura que el canvas existe
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const tamañoCuadro = canvasSize / dimension;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
          const x = j * tamañoCuadro;
          const y = i * tamañoCuadro;
          const numero = matrix[i][j];

          ctx.strokeRect(x, y, tamañoCuadro, tamañoCuadro);
          ctx.font = `${tamañoCuadro / 3}px Arial`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(numero, x + tamañoCuadro / 2, y + tamañoCuadro / 2);
        }
      }
    }
  }, [matrix, canvasSize]);  // Agrega canvasSize a las dependencias para asegurar la recarga

  return (
    <div>
      {dimension > 0 ? (
        <canvas ref={canvasRef} width={canvasSize} height={canvasSize} data-testid="matrix-canvas"></canvas>
      ) : (
        <p>Ingresa una matriz para visualizarla</p>
      )}
    </div>
  );
}
