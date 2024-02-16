export function roundToDecimalDigits(num: number, numOfDecimalDigits: number) {
  return (
    Math.round(num * Math.pow(10, numOfDecimalDigits)) /
    Math.pow(10, numOfDecimalDigits)
  );
}
