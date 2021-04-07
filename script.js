//(0°C × 9/5) + 32 = 32°F


const celToFah = (temp) =>{
  let fahernheit = (temp * (9/5)) + 32

  return `${temp}°C converts to  ${fahernheit}°F`

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
  //created an empty array to store prime values
  let primes = []
  //Off the bat...if num equals 1 should return false as prime numbers have to be greater than 1
  if (num === 1) return false
  //assuming num is greater than 1
  else if (num > 1){
  //loop through numbers starting a second iteration based on rule above
  for (let i = 2; i < num; i++){
  //will set isPrime to true by default
  let isPrime = true
    //checking if the iteration its on is a prime number
    for (let j = 2; j < i; j++){
    //it that iteration is even....its automatically flagged as not prime
    if (i % j === 0) {
      isPrime = false
    } 
  }
  //the ending number (num) is greater than 1 and the iteration (i) is prime...the current iteration (i) will get pushed into array
  if (num > 1 && isPrime === true) {
        primes.push(i)
    }
  }
    //returns list of primes up to specified ending number (num)  
    return primes
  }
  
  
}
