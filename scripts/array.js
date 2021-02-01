export default function array(arr) {
  const sorted = arr.sort((a, b) => a - b)
  const average = arr.reduce((acc, curr) => acc + curr, 0) / arr.length

  return {
    average,
    min: sorted[0],
    max: sorted[sorted.length - 1],
    length: arr.length,
  }
}

console.log(array([1, 8, 3, 4, 2, 6]))
