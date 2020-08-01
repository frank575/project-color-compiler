export default (input, index, returnIndexCallback) => {
  let color = ''
  let colorLen = 0
  let isHashColor = false
  while(input[++index] !== undefined && /[0-9A-z]/.test(input[index])){
    color+=input[index]
    colorLen++
  }
  returnIndexCallback(index)
  if(colorLen > 2) {
    isHashColor = true
  }
  return [`#${color}`, isHashColor]
}