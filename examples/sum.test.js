// Cada archivo es una suite de tst
// y puede contener uno o varios tests

// const sum = require('./sum'); DE AHORA EN ADELANTE CON IMPORT

import sum from "./sum";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 5 + 5 to equal 10', () => {
  expect(sum(5, 5)).toBe(10);
});

// si un test falla, toda la suite falla
// podemos tener todas las hipótesis

// 0 + 0 -> 0

test('adds 0 + 0 to equal 0', () => {
    expect(sum(0,0)).toBe(0);
});

// 0 + 1 -> 1
test('adds 0 + 1 to equal 1', () => {
    expect(sum(0,1)).toBe(1);
});

// 1 + -3 -> -2
test('adds 1 + -3 to equal -2', () => {
    expect(sum(1,-3)).toBe(-2);
});

