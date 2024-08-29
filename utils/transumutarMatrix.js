import { validateMatrixPerfect } from './validateMatrixPerfect.js';

export const transmutarMatrix = (matrix = []) => {
  if(matrix.length === 0) return [];
  validateMatrixPerfect(matrix);
  const matrixTransmuted = matrix[0]?.map((_, colIndex) => matrix.map(row => row[colIndex]));
  return matrixTransmuted;
}