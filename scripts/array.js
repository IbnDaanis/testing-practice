export default function array(arr) {
  if (!Array.isArray(arr)) return 'Not an Array'
  if (arr.every(item => item == +item)) {
    const sorted = arr.sort((a, b) => a - b)
    const average = arr.reduce((acc, curr) => acc + +curr, 0) / arr.length
    return {
      average,
      min: sorted[0],
      max: sorted[sorted.length - 1],
      length: arr.length,
    }
  } else {
    return 'Not numbers'
  }
}

console.log(array([1, '2', 3, 4, 2, 6]))
