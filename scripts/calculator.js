export default function calculator({ type, num1, num2 }) {
  if (!['ADD', 'SUBTRACT', 'MULTIPLY', 'DIVIDE'].includes(type)) {
    return "The type is not valid. Must be either 'ADD', 'SUBTRACT', 'MULTIPLY' or 'DIVIDE'."
  }

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'Either num1, num2, or both are not valid numbers.'
  }

  switch (type) {
    case 'ADD':
      return num1 + num2
    case 'SUBTRACT':
      return num1 - num2
    case 'MULTIPLY':
      return num1 * num2
    case 'DIVIDE':
      return num1 / num2
    default:
      return ''
  }
}
