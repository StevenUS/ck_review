
// different ways to add elements to an array

// myArr.push(element);
// myArr.push(e1, e2, e3);

// myArr.unshift(e1);
// myArr.unshift(e1, e2, e3);

// myArr.splice(1, 0, e1); at index position 1, remove 0 elemnts, add e1
// myArr.splice(1, 0, e1, e2);

// myArr.concat(e1, e2,...); creates a new array and combines values

// myArr[i] = element;


// duplicate([1,2,3,4,5]);
// [1,2,3,4,5,1,2,3,4,5]

function duplicate(nums) {
  var len = nums.length
  for (var i = 0; i < len; i++) {
    nums.push(nums[i]);
  }
  return nums;
}

function duplicateConcat(nums) {
  return nums.concat(nums);
}

console.log(duplicate([1,2,3,4,5]));
console.log(duplicateConcat([1,2,3,4,5]));

