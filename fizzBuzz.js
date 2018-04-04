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

function fizzBuzzMap(nums) {
  return nums.map(x => {
    if (x % 3 == 0 && x % 5 == 0) {
      console.log(x + " fizzbuzz");
    } else if (x % 3 == 0) {
      console.log(x + " fizz");
    } else if (x % 5 == 0) {
      console.log(x + " buzz");
    }
  })
}

var testcase = [];
for (var i = 0; i < 100; i++) {
  testcase.push(i);
}

fizzBuzz(testcase);
fizzBuzzMap(testcase);