// Draw a triangle with asterisks

// accidental solution
let temp = " ";
for (let i = 1; i < 7; i++) {
    temp = temp + "*";
    console.log(temp);
}

// right solution
let result = '';
const length = 7;

for (let i = 1; i < length; i++) {
  for (let j = 0; j < i; j++) {
    result += "*";
  }
  result += '\n';
}
console.log(result);
