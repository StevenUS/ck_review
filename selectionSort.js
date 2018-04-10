function selectionSort(nums) {
  let swapIdx = 0;
  let minIdx = 0;
  while (swapIdx < nums.length){
    minIdx = swapIdx
    for (let i = swapIdx+1; i < nums.length; i++) {
      if (nums[i] < nums[minIdx]) {
        
        minIdx = i;
      }
    }
    debugPrint(swapIdx, nums);
    let temp = nums[minIdx];
    nums[minIdx] = nums[swapIdx];
    nums[swapIdx] = temp;
    swapIdx ++;
    debugPrint(minIdx, nums, true);
    
  }


}

selectionSort([8,5,2,6,9,3,1,5,4,0,7])

function debugPrint(i, nums, addSpace = false) {
  let printStr = "";
  nums.forEach( (val, x) => {
    if (x === i) {
      printStr += "|" + val + "|";
    }
    else {
      printStr += " " + val + " ";
    }
  })
  if (addSpace) {
    printStr += "\n"
  }
  console.log(printStr);
}

