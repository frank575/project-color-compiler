export default (randomCodesHashLength: number = 10): string => {
  const allEnglishBytes: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const allNumberBytes: string = '0123456789'
  const allBytes: string = allEnglishBytes + allNumberBytes
  const allEnglishBytesLength: number = allEnglishBytes.length
  const allNumberBytesLength: number = allNumberBytes.length
  const allBytesLength: number = allEnglishBytesLength + allNumberBytesLength
  const hashVariable: string = Array.from(new Array(randomCodesHashLength), (_, i) => i).reduce((prev, _, i) => prev + (i === 0 ? allEnglishBytes[~~(Math.random() * allEnglishBytesLength)] : allBytes[~~(Math.random() * allBytesLength)]), '')
  return hashVariable
}