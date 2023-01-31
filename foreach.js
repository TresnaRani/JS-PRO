

/*
var nums = [10,20,30,40];
var sqrtnums = [];
nums.forEach(function(x){
    sqrtnums.push(x*x);
})
console.log(sqrtnums);
*/


var nums = [10,20,30,40];
console.log(nums);
nums.forEach(function(x,index,arr){
    arr[index] = x+5;
})
console.log(nums);
