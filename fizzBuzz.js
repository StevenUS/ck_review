function fizzBuzz(nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 3 == 0 && nums[i] % 5 == 0) {
      console.log(nums[i] + " fizzbuzz");
    } else if (nums[i] % 3 == 0) {
      console.log(nums[i] + " fizz");
    } else if (nums[i] % 5 == 0) {
      console.log(nums[i] + " buzz");
    }
  }
}

var fizzBuzzMap = function (nums) {
  return nums.map(x => {
    if (x % 3 == 0 && x % 5 == 0) {
      return "fizzbuzz";
    } else if (x % 3 == 0) {
      return "fizz";
    } else if (x % 5 == 0) {
      return "buzz";
    } else { return x; }
  })
}

var testcase = [];
for (var i = 0; i < 100; i++) {
  testcase.push(i);
}

fizzBuzz(testcase);
console.log(fizzBuzzMap(testcase));