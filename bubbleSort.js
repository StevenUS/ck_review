function bubbleSort(nums) {
  let swap = true;
  let count = 0;
  while(swap) {
    count = 0;
    console.log("\n new iteration \n");
    for (let i = 0; i < nums.length; i++) {
      let printStr = "";
      
      debugPrint(i, nums);
  
      if (nums[i] > nums[i+1]) {
        let temp = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = temp;
        printStr = "";
        count ++;
        debugPrint(i, nums, true);
  
      }
    }
    if (count === 0) {
      swap = false;
    }
  }
}

function debugPrint(i, nums, addSpace = false) {
  let printStr = "";
  nums.forEach( (val, x) => {
    if (x === i) {
      printStr += "|" + val;
    }
    else if (x === i+1) {
      printStr += val + "|";
    }
    else {
      printStr += val;
    }
  })
  if (addSpace) {
    printStr += "\n"
  }
  console.log(printStr);
}

bubbleSort([6,5,4,3,2,1])