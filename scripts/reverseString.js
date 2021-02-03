export default function reverseString(str) {
  if (typeof str !== 'string') {
    return 'The input is not a string'
  }
  if (!str.length) {
    return 'The input should not be empty'
  }
  return str.split('').reverse().join('')
}
