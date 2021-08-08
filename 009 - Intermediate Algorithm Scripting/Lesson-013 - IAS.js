//Lesson 013 - Sum All Primes



function sumPrimes(num) {
  // Helper function to check primality
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0)
        return false;
    }
    return true;
  }

  // Check all numbers for primality
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)){
    //console.log(i);
      sum += i;
      console.log(sum);
    }
  }
  return sum;
}


/*
function sumPrimes(num) {
let primeNUmbersSum = 0;


function checkPrime(num){
for(let i = 2; i <= Math.sqrt(num); i++){
  if((num % i) == 0){
    return false;
  }
  console.log(i + "is prime");
  return true;
  }
}

for(let i = 2;i <= num; i++){
  if(checkPrime(i) == true){
    console.log(i + " will be added");
  primeNUmbersSum += i;
  }
}
return primeNUmbersSum;
}
*/
console.log(sumPrimes(10));