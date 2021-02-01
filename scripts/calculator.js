export default function calculator({ type, num1, num2 }) {
  switch (type) {
    case 'ADD':
      return num1 + num2
    case 'SUBTRACT':
      return num1 - num2
    case 'MULTIPLY':
      return num1 * num2
    case 'DIVIDE':
      return num1 / num
    default:
      return ''
  }
}
