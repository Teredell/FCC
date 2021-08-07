//Lesson 012 - Sum All Odd Fibonacci Numbers

function sumFibs(num) {
  let totalNum = [1];
  let previousNum = 1;
  let i = 0;

  do{
    totalNum.push(previousNum);
    previousNum = previousNum + totalNum[i];
    console.log("previousNum is now " + previousNum);
    console.log("totalNum array looks like " + totalNum);  
    i++;
  } while(previousNum <= num);


let sumOfOdd = 0;
  for(j = 0; j < totalNum.length; j++){
    if(totalNum[j] % 2 !=  0){
      console.log("im gunna add " + totalNum[j]);
      sumOfOdd += totalNum[j];
    }
  }
  console.log(sumOfOdd);
  return sumOfOdd;
}

sumFibs(75025);