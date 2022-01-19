export function analyzeArray(arr) {
  const obj = {
    average: arr.reduce((a, b) => a + b, 0) / arr.length,
    length: arr.length,
    max: Math.max(...arr),
    min: Math.min(...arr),
  };
  console.log(obj);
  return obj;
}
