// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// console.log(output);



// const nums = [2, 3, 4, 5, 6, 7, 8, 9];
// const result = nums.map(function(element){
//     return element * element;
// })
// console.log(result);



// const numbers = [2, 3, 4, 5, 6, 7];
// const result = numbers.map( x => x * x);
// console.log(result);



const nums = [2, 3, 4, 5, 6, 7, 8, 9];
const bigger = nums.filter( x => x >= 5);
console.log(bigger);