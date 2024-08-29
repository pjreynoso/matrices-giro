"use client";
import styles from "./page.module.css";
import MatrixInput from "./components/MatrixInput";
import MatrixDisplay from "./components/MatrixDisplay";
import { transmutarMatrix } from "@/utils/transumutarMatrix";
import { useEffect, useState } from 'react'

export default function Home() {
  const [matrix, setMatrix] = useState([]);
  const [matrixRotatedLeft, setMatrixRotatedLeft] = useState([]);

  useEffect(() => {
  if (matrix.length > 0) {
    // Transponemos la matriz
    const matrixTransmuted = transmutarMatrix(matrix);
    // Para rotar a la izquierda, invertimos las columnas después de transponer.
    // Esto se logra invirtiendo el orden de las filas en la matriz transpuesta.
    const matrixRotated = matrixTransmuted.reverse();
    setMatrixRotatedLeft(matrixRotated);
  }
  }, [matrix])


  return (
    <main className={styles.main}>
      <p className="font-bold text-xl">Ingresa tu matriz</p>
      <div className="w-full flex justify-center mb-10">
        <MatrixInput setMatrix={setMatrix}/>
      </div>
      <div>
          <MatrixDisplay matrix={matrixRotatedLeft}/>
      </div>
    </main>
  );
}
