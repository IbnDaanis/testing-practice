import array from '../scripts/array'

test('arr', () => {
  expect(array([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  })
})

test('arr', () => {
  expect(array([1])).toStrictEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  })
})

test('arr', () => {
  expect(array(['H', 8, 3, 4, 2, 6])).toStrictEqual(
    'Not all items in the input are numbers.'
  )
})

test('arr', () => {
  expect(array('[1, 8, 3, 4, 2, 6]')).toStrictEqual(
    'The input is not an Array.'
  )
})
