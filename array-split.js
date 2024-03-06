const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const part = nums.slice(2, 5);

const removed = nums.splice(3, 4, 34, 56, 77);
// console.log(removed);
// console.log(nums);

const join = nums.join(", ");
console.log(join);