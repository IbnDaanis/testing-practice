export default function capitalize(str) {
  if (typeof str !== 'string') {
    return 'The input is not a string'
  }
  if (!str.length) {
    return 'The input should not be empty'
  }
  if (!/[A-Za-z]/.test(str.charAt(0))) {
    return 'The first character is not a letter.'
  }
  return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)
}
