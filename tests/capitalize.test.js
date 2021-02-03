import capitalize from '../scripts/capitalize'

test('The input should be a string.', () => {
  expect(capitalize(234)).toBe('The input is not a string')
})

test('The input should not be empty', () => {
  expect(capitalize('')).toBe('The input should not be empty')
})

test('Check if the first character is a letter.', () => {
  expect(capitalize('!hello')).toBe('The first character is not a letter.')
})

test('Not letter characters should be ignored', () => {
  expect(capitalize('ik.raam')).toBe('Ik.raam')
})

test('ikraam should be Ikraam', () => {
  expect(capitalize('ikraam')).toBe('Ikraam')
})

test('iKRAAM should be Ikraam', () => {
  expect(capitalize('iKRAAM')).toBe('Ikraam')
})
