import capitalize from '../scripts/capitalize'

test('ikraam should be Ikraam', () => {
  expect(capitalize('ikraam')).toBe('Ikraam')
})

// test('iKRAAM should be Ikraam', () => {
//   expect(capitalize('iKRAAM')).toBe('Ikraam')
// })

// test('Return empty for empty string', () => {
//   expect(capitalize('')).toBe('')
// })
