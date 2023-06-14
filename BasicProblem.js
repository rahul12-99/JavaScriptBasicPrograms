/*Read a single digit number and write the number in word */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a single-digit number: ", function(number) {
  let word = '';

  if (number === '0') {
    word = 'Zero';
  } else if (number === '1') {
    word = 'One';
  } else if (number === '2') {
    word = 'Two';
  } else if (number === '3') {
    word = 'Three';
  } else if (number === '4') {
    word = 'Four';
  } else if (number === '5') {
    word = 'Five';
  } else if (number === '6') {
    word = 'Six';
  } else if (number === '7') {
    word = 'Seven';
  } else if (number === '8') {
    word = 'Eight';
  } else if (number === '9') {
    word = 'Nine';
  } else {
    word = 'Invalid number';
  }

  console.log("Number in word : " + word);

  rl.close();
});
