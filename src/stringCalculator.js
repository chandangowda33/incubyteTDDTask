function add(numberString) {
  //checking if string is an empty string, if its empty at first step only it will return so no need of checking other code
  if (numberString === "") return 0;

  //initially delimiter is ','
  // let numberArray = numberString.split(",");

  //step 1: when only upto 2 numbers
  //checking if input string have only one number
  // if (numberArray.length === 1) return parseInt(numberArray[0]);
  // else return parseInt(numberArray[0]) + parseInt(numberArray[1]);

  //step2:To handle n number of inputs
  //here we can use if to check if there is only one number and return to avoid going to reduce but I am keeping it simple with using reduce which handles both single and n numbers
  // if (numberArray.length === 1) return parseInt(numberArray[0]);
  // else
  // return numberArray.reduce((total, number) => (total += parseInt(number)), 0);

  //step3: Now delimiter is ',' and new line
  let delimiter = /[\n,]/;
  // let numberArray = numberString.split(delimiter);

  //step4:Support different delimiters
  if (numberString.startsWith("//")) {
    const parts = numberString.split("\n");
    delimiter = new RegExp(parts[0][2]);
    numberString = parts[1];
  }

  let numberArray = numberString.split(delimiter);

  //step5:To throw error when negative number is there
  let negativeNumArray = numberArray.filter((num) => parseInt(num) < 0);
  if (negativeNumArray.length)
    throw new Error(
      `negative numbers not allowed ${negativeNumArray.join(",")}`
    );
  return numberArray.reduce((total, number) => (total += parseInt(number)), 0);
}

module.exports = { add };
