export const validateMatrixPerfect = (matrix = []) => {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    if (!Array.isArray(matrix[i]) || matrix[i].length !== n) {
      throw new Error("La matriz no es cuadrada.");
    }
  }
};
