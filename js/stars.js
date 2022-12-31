// Draw a triangle with asterisks

// accidental solution
let temp = " ";
for (let i = 1; i < 7; i++) {
  temp = temp + "*";
  console.log(temp);
}

// right solution
let result = "";
const length = 7;

for (let i = 1; i < length; i++) {
  for (let j = 0; j < i; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);

// with mark solution

first: for (let i = 0; i < 3; i++) {
  console.log(`First level: ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`Second level: ${j}`);
    for (let k = 0; k < 3; k++) {
        if (k === 2) break first;
        // if (k === 2) continue first;
      console.log(`Third level: ${k}`);
    } 
  }
}
