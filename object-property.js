const students = [
    {id: 21, name: 'Aman'},
    {id: 31, name: 'Urmi'},
    {id: 41, name: 'Israt'},
    {id: 51, name: 'Irfan'}
];

// const nameOutput = [];

// for(let i = 0; i < students.length; i++){
//     const element = students[i];
//     const result = element.name;
//     nameOutput.push(result);
// }

// console.log(nameOutput);


const names = students.map( x => x.name);
const bigger = students.filter( x => x.id > 40);
const find = students.find( x => x.id > 30);

console.log(names);
console.log(bigger);
console.log(find);