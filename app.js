// let arr = [2, 3, 4, 5];

// let bit = arr.map((square) => {
//   return square * 2;
// });

// // console.log(bit);

//  this is filter method for an array

let num = [1, 3, 4, 2, 5, 7, 8, 9, 0, 2, 3, 34, 4, 53];

let even = num.filter((el) => {
  return el % 2 == 0;
});

let odd = num.filter((el) => {
  return el % 2 != 0;
});

let everymethod = [2, 4, 6].every((el) => {
  return el % 2 == 0;
});

// In which if arr having any odd number it give false  it check every number in arrya

let everymethod2 = [2, 4, 6, 5].every((el) => {
  return el % 2 == 0;
});

// let did = [1, 2, 453, 4].reduce((rel, el) => {
//   console.log(rel);
//   return rel + el;
// });

// write the code using the reduce method to find out the maximum number in it

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 25665165, 9];

let output = arr1.reduce((max, el) => {
  if (max < el) {
    return el;
  } else {
    return max;
  }
});
let arr3 = [10, 20, 30, 45, 852];

let muloften = arr3.filter((el) => {
  return el % 10 == 0;
});

let arr5 = [1, 3, 2, 4, 3];
let min = arr5.reduce((min, el) => {
  if (min < el) {
    return min;
  } else {
    return el;
  }
});

// default parameter

function sum(a, b = 2) {
  return a + b;
}
sum(3);
