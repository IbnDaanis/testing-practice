import calculator from '../scripts/calculator'

test('1 + 1 = 2', () => {
  expect(calculator({ type: 'ADD', num1: 1, num2: 1 })).toBe(2)
})
