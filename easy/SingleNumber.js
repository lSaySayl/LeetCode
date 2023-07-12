  //Primera solución
let singleNumber = function (nums) {

  let num = 0;
  for (let i = 0; i < nums.length; i++) {
    num ^= nums[i];
  }
  return num;
};

 //Segunda solución
let singleNumberTwo = (nums) => {
 

  const numUnico = [...new Set(nums)];
  return numUnico.find((num) => nums.filter((n) => n === num).length === 1);
};

console.log(singleNumber([2, 4, 4]));
console.log(singleNumberTwo([1, 4, 4]));
