export default function caesarCipher(str) {
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
  console.log(str[0])
  return letters
}

console.log(caesarCipher('AB:C'))
