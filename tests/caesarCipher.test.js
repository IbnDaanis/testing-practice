import caesarCipher from '../scripts/caesarCipher'

test('Check if the input is a string.', () => {
  expect(caesarCipher({ test: 'test' })).toBe('The input is not a string.')
})

test('abc should be bcd.', () => {
  expect(caesarCipher('abc')).toBe('bcd')
})

test('xyz should be yza, letters should wrap and go back to the start of the alphabet.', () => {
  expect(caesarCipher('xyz')).toBe('yza')
})

test('Non-letter characters should be ignored and not changed.', () => {
  expect(caesarCipher('a.b')).toBe('b.c')
})

test('Capital letters should be converted to lowercase letters.', () => {
  expect(caesarCipher('A!BCD')).toBe('b!cde')
})
