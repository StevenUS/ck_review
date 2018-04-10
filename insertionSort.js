// More efficient in practice than most other simple quadratic (i.e., O(n2)) 
// algorithms such as selection sort or bubble sort

function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    debugPrint(i, nums);
    for (let x = i -1; x >= 0; x--) {
      
      if (nums[i] < nums[x]) {
          let temp = nums[i];

          for (let z = i; z >= 0; z--) {
            if (nums[z-1] > temp) {
              nums[z] = nums[z-1];
            }
            else {
              nums[z] = temp;
              debugPrint(z, nums, true);
              break;
            }
          }
        }
      }
    }
}



insertionSort([6,5,4,3,2,1])
insertionSort([6,5,3,1,8,7,2,4])


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
    printStr += "\n";
  }
  console.log(printStr);
}