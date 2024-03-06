const numbers = [
    {id: 11, name: 'Muhammad Amanullah', age: 23},
    {id: 21, name: 'Mosammad Urmi Belaly', age: 18},
    {id: 51, name: 'Israt Jahan Tanisha', age: 5},
    {id: 61, name: 'BM Irfan Hossain', age: 2}
]
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element.name;
//     output.push(result);
// }

// console.log(output);




// const result = numbers.map(x => x.name);
// console.log(result);



// const bigger = numbers.filter(x => x.age < 5);
// console.log(bigger);


const find = numbers.find(x => x.id > 30);
console.log(find);