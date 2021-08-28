//Project 005 - Cash Register

function checkCashRegister(price, cash, cid) {
//Set-up return object
  let returnStatus = {
    status: "", 
    change: []
  };
//Calculate change due
  var changeDue = cash - price;
  changeDue = changeDue.toFixed(2);
//Set-up array defining values of each unit of currency
  let unitArray = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
//This lets me copy a deep level array without references, copy of original incoming array
  let copyCID = JSON.parse(JSON.stringify(cid)); 
//Add value of each currency & amount of units of each currency into new array
  let registerArray = [...cid];
  for(let i = 0; i < registerArray.length; i++){
    registerArray[i].push(Math.round(registerArray[i][1] / unitArray[i]));
    registerArray[i].push(unitArray[i]);
  }
//Copy of this new Array before we potentially process changes
let beforeTx = JSON.parse(JSON.stringify(registerArray)); //This lets me copy a deep elevl array without references
//Calculate total value held in register before transaction
let totalCashBefore = 0;
for(let k = 0; k < beforeTx.length; k++){
  totalCashBefore += beforeTx[k][1];
}
totalCashBefore = totalCashBefore.toFixed(2);

//First exit condition - if we don't have enough cash, end now.
if(parseFloat(totalCashBefore) < parseFloat(changeDue)){
  returnStatus.status = "INSUFFICIENT_FUNDS";
  return returnStatus;
}
//Loop through array from largest to smallest
for(let m = registerArray.length-1;m >= 0; m--){
//Check if single value of currency is less than amount due i.e. cant use 100 to pay off 20
  if(registerArray[m][3] <= changeDue){
//if a single note doesnt make changeDue less than 0 && i have more than 0 of them
    if(((changeDue - registerArray[m][3]) > 0) && (registerArray[m][2] > 0)){
//If we pass above tests we can loop through qty of available currency
      for(let n = registerArray[m][2]; n > 0; n--){
//If change is still above zero and a single currency note/coin is less than amount due
        if((changeDue > 0) && (registerArray[m][3] <= changeDue)){
//Reduce change due by amount of 1 unit of this currency
          changeDue = (changeDue - registerArray[m][3]).toFixed(2);
//deduct one unit of currency 
          registerArray[m][2]--;
        }else{
//If we still have currency units but it is more than remaining changeDue, break early and move to next currency.            
          break;
        }
      }
    }
  }
}

//If we have moved through the above for loop we now have an array with reduced values and an array we set-up before 
//that we can calculate the differences from and push them to the returnArray.change array
for(let z = registerArray.length-1; z >= 0; z--){
  if((registerArray[z][2] !== beforeTx[z][2])){
    returnStatus.change.push([registerArray[z][0], ((beforeTx[z][2] - registerArray[z][2]) * registerArray[z][3])]);
  }
}

//We can now also work out how much cash we have leftover
let totalCashAfter = 0;
for(let k = 0; k < registerArray.length; k++){
  totalCashAfter += (registerArray[k][2] * registerArray[k][3]);
}
totalCashAfter = totalCashAfter.toFixed(2);

//Second exit condition - if we have had enough change but still have cash in the register
  if((changeDue == 0.00) && (totalCashAfter != 0.00)){
    returnStatus.status = "OPEN";
    return returnStatus;
  }
//Third exit condition - if we cannot reach amount of change due
  if(changeDue > 0.00){
    returnStatus.status = "INSUFFICIENT_FUNDS";
    returnStatus.change =[];
    return returnStatus;
  }
//Fourth exit condition - if change and total to begin with are equal, return closed and the initial cid
  if((changeDue == 0.00) && (totalCashAfter == 0.00)){
    returnStatus.status = "CLOSED";
    returnStatus.change = copyCID;
    return returnStatus;
  }
}

//Tests
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25],["ONE", 90], ["FIVE", 55], 
["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
//should return {status: "OPEN", change: [["QUARTER", 0.5]]}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], 
["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); 
//should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], 
//["DIME", 0.2], ["PENNY", 0.04]]}.

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], 
["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
//should return {status: "INSUFFICIENT_FUNDS", change: []}.

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], 
["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
//should return {status: "INSUFFICIENT_FUNDS", change: []}.

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], 
["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); 
//should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], 
//["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
