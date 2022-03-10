function getEven(arr) {
    /* 
        Return an array containing only even numbers as a result
        Example
            Input: [1,4,5,77,8,90]
            Output: [4,8,90]

        Write you code below
    */
   let res = [];
   for(ele of arr){
    if(ele%2===0){
      res.push(ele)
    }
  }
   return res
//    return ans.filter((ele)=>ele%2===0)
}

function multiplyByN(arr, n) {
    /* 
        Return an array whose elements are multiplied by n
        Example
            Input: [1,3,4,55], 3
            Output: [3,9,13,165]
        Write you code below
    */
   let res = [];
   let mul;
   for(let j=0; j<arr.length;j++){
       mul = arr[j]*n;
       res.push(mul);
   }
   return res
   //    return arr.map((ele)=>ele*n)
}

function removeNthElement(arr, n) {
    /*
        Return the array with the element present at index n removed
        Example
            Input: [1,3,4,6,7] 3
            Output: [1,3,4,7]
        Write you code below
    */
   for(let k=0; k<arr.length; k++){
       if(k===n){
           arr.splice(k, 1);
       }
   }
   return arr
}
module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}