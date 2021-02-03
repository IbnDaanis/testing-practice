import reverseString from '../scripts/reverseString'

test('The input should be a string.', () => {
  expect(reverseString({ hi: [234] })).toBe('The input is not a string')
})

test('The input should not be empty', () => {
  expect(reverseString('')).toBe('The input should not be empty')
})

test('Ikraam should be maarkI', () => {
  expect(reverseString('Ikraam')).toBe('maarkI')
})

test('Any character should work', () => {
  expect(reverseString('0p;]')).toBe('];p0')
})
