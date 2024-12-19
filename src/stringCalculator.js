function add(numberString) {
  //checking if string is an empty string, if its empty at first step only it will return so no need of checking other code
  if (numberString === "") return 0;

  //initially delimiter is ','
  let numberArray = numberString.split(",");

  //step 1: when only upto 2 numbers
  //checking if input string have only one number
  if (numberArray.length === 1) return parseInt(numberArray[0]);
  else return parseInt(numberArray[0]) + parseInt(numberArray[1]);
}

module.exports = { add };