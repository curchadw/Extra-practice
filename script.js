//(0°C × 9/5) + 32 = 32°F


const celToFah = (temp) =>{
  let faherheit = (temp * (9/5)) + 32

  return `${temp}°C converts to  ${faherheit}°F`

}


//calculate the sum of nums in array
let array = [1,100]

const sumArray = array =>{
  let sum = 0
  for (let num of array){
    sum += num
  }
  
  return sum
}

console.log(sumArray(array))


//print first 100 prime numbers


const primeNums = (num) =>{
  let primes = []
  
  if (num === 1) return false
  
  else if (num > 1){
  for (let i = 2; i < num; i++){
  let isPrime = true
    for (let j = 2; j < i; j++){
   
    if (i % j === 0) {
      isPrime = false
    } 
  }

  if (num > 1 && isPrime === true) {
        primes.push(i)
    }
  }
    return primes
  }
  
  
}
