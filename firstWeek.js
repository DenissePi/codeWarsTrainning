// Kata 1
const invert = array => {
  return array.map(number => number*(-1))
}

// Kata 2          
const countSheeps = arrayOfSheep => {
  return arrayOfSheep.filter(sheep => sheep === true).length
}

// Kata 3
const clean = arr => {
  return arr.filter(element => Boolean)
}
