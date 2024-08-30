/**
 * @jest-environment node
 */
import { transmutarMatrix } from '../utils/transumutarMatrix';
import React from 'react';

describe('transmutarMatrix', () => {
  test('should transpose a 3x3 matrix', () => {
    const input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const expected = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
    expect(transmutarMatrix(input)).toEqual(expected);
  });

  test('should handle empty matrix', () => {
    expect(transmutarMatrix([])).toEqual([]);
  });

  test('should handle a 2x2 matrix', () => {
    const input = [[1, 2], [3, 4]];
    const expected = [[1, 3], [2, 4]];
    expect(transmutarMatrix(input)).toEqual(expected);
  });

  test('should throw error on non-square matrix', () => {
    const input = [[1, 2, 3], [4, 5]];
    expect(() => transmutarMatrix(input)).toThrow("La matriz no es cuadrada.");
  });
});