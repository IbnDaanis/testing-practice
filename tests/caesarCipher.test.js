import caesarCipher from '../scripts/caesarCipher'

test('abc should be bcd', () => {
  expect(caesarCipher('abc')).toBe('bcd')
})
