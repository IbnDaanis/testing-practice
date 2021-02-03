import calculator from '../scripts/calculator'

test('The type must be valid.', () => {
  expect(calculator({ type: 'Hello', num1: 1, num2: 1 })).toBe(
    "The type is not valid. Must be either 'ADD', 'SUBTRACT', 'MULTIPLY' or 'DIVIDE'."
  )
})

test('Both input numbers must be numbers.', () => {
  expect(calculator({ type: 'ADD', num1: 1, num2: [1] })).toBe(
    'Either num1, num2, or both are not valid numbers.'
  )
})

test('Testing Addition', () => {
  expect(calculator({ type: 'ADD', num1: 2, num2: 2 })).toBe(4)
})

test('Testing Subtraction', () => {
  expect(calculator({ type: 'SUBTRACT', num1: 20, num2: 1 })).toBe(19)
})

test('Testing Multiplication', () => {
  expect(calculator({ type: 'MULTIPLY', num1: 10, num2: 2 })).toBe(20)
})

test('Testing Division', () => {
  expect(calculator({ type: 'DIVIDE', num1: 10, num2: 2 })).toBe(5)
})
