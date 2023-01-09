"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() { // create own methods for object
        console.log("Test");
    }
};
options.makeTest(); // call own method

for (let key in options) {
    if(typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`${i} -> ${options[key][i]}`);
        }
    } else {
        console.log(`${key} -> ${options[key]}`);
    }
}

console.log(Object.keys(options).length); // to find the number of properties (at the top level)

const {border, bg} = options.colors; // destructuring, puts properties into separate variables
console.log(border);