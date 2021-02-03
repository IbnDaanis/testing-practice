export default function caesarCipher(str) {
  if (typeof str !== 'string') return 'The input is not a string.'
  const letters = str
    .toLowerCase()
    .split('')
    .map(letter => {
      if (!letter.match(/[a-z]/)) {
        return letter
      }

      const code = ((letter.charCodeAt(0) - 96) % 26) + 97
      return String.fromCharCode(code)
    })
    .join('')
  return letters
}
