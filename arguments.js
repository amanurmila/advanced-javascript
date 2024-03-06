function add(num1, num2){
    console.log([...arguments]);
    return num1 + num2 + arguments[2];
}

const result = add(4, 5, 6, 7);
console.log(result);