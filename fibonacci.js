var fibonacci = (() => {
  let obj = {
    0 : 0,
    1 : 1,
  }

  return (n) => {
    
    // if (n === 0) {
    //   return obj[0]
    // }
    
    // if (n === 1) {
    //   return obj[1]
    // }
    
    if (obj[n] !== undefined) {

      return obj[n]

    } else {

      obj[n] = fibonacci(n-2, obj) + fibonacci(n-1, obj)

    }
    
    return obj[n]

  }
})();

console.log(fibonacci(5))