function task2(){
    let arr = [];
    let multiple = [];
    
    // push all num between 0 and the number to arr
    for (let i = 0; i < 10; i++) {
      arr.push(i);
    }
    
    // if number in arr is a multiple or 3 or 5 push it to multiple
    for (let i = 0; i < arr.length; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        multiple.push(i);
      }
    }
    
    // sum the total of the multiple array
    const sumTotal = multiple.reduce((sum, num) => sum + num, 0);
    
    // console.log(sumTotal);
    return sumTotal;
}  
module.exports = task2;