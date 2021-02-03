import array from '../scripts/array'

test('Check if the input is even an array', () => {
  expect(array('[1, 8, 3, 4, 2, 6]')).toStrictEqual(
    'The input is not an Array.'
  )
})

test('Checks if all array items are numbers', () => {
  expect(array(['H', 8, 3, 4, 2, 6])).toStrictEqual(
    'Not all items in the input are numbers.'
  )
})

test('Check if only one number works', () => {
  expect(array([1])).toStrictEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  })
})

test('Check if the answers are correct', () => {
  expect(array([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  })
})
