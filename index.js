// Code your solution
function printString(myString){
  console.log(myString[0])
  if (myString.length>1){
    printString(myString.substring(1,myString.length))
  }else{
    return true
  }
}

function reverseString(myString){
  //let reverse=myString[myString.length-1]
  if (myString.length>1){
    return myString[myString.length-1]+reverseString(myString.substring(0,myString.length-1))
  }else{
    return myString[0]
  }
}

function isPalindrome(myString){
  //console.log(myString)
  if (myString.length<2){
    return true
  }

  if (myString[0]===myString[myString.length-1] ){
      return isPalindrome(myString.substring(1,myString.length-1))
  }

  return false
  }

  function addUpTo(arr,num){
    if (num>0) {
      return arr[num]+addUpTo(arr,num-1)
    } else {
      return arr[num]
    }
  }

  function maxOf(arr){
    let newArr=arr.slice()

    if (newArr.length===1){
      return newArr[0]
    }

    if (newArr[0]<newArr[1]){
      newArr.splice(0,1)
    } else {
      newArr.splice(1,1)
    }
    return maxOf(newArr)
  }

  function includesNumber(arr,num){
    let newArr=arr.slice()
    if (arr[0]==num) {
        return true
      } else {
        if (newArr.length>1){
          newArr.splice(0,1)
          return includesNumber(newArr,num)
        } else {
          return false
        }
      }
    }


function cmp(a, b) { return a - b; }

  function solution(A, B) {
      var n = A.length;
      var m = B.length;
      A.sort(cmp)
      B.sort(cmp)
      //let uA=A.filter((v, i, a) => a.indexOf(v) === i);
      //let uB=B.filter((v, i, a) => a.indexOf(v) === i);
      console.log("array")
      //console.log(uA)
      //console.log(uB)
      var i = 0;
      for (var k = 0; k < n; k++) {
          while (i < m - 1 && B[i] < A[k])
              i += 1;
              //console.log(i, k, uA[k], uB[i])

          if (A[k] == B[i])
              return A[k];
      }
      return -1;
  }




  function solution1(S) {
      // write your code in JavaScript (Node.js 8.9.4)
       let decimal=0
       let index=S.length-1
       let stepCount=0
        for (let i=0; i<S.length; i++){
           decimal=decimal + Number(S[i])*Math.pow(2,index)
           index--
        }

       while (decimal>0){
           if(decimal%2===1){
               decimal--
           } else{
               decimal=decimal/2
           }
           stepCount++
       }

       return stepCount

  }

  function solution3(A) {
      let castleCount=2
      let start=0
      let current=A[0]

      let i=0
      console.log(A.length)
      while( i<A.length){
          //console.log("**********")
          while(current==A[i])  i++

          console.log("**********")
          console.log(i)

          if (start!==0 && i!==A.length-1){
            if (A[start-1]>A[start]&&A[i]>A[i-1] || A[start-1]<A[start]&&A[i]<A[i-1] ){
              castleCount++
            }
          }


  }
  return castleCount
  }

console.log("***************************************************")
console.log([2, 2, 3, 4, 3, 3, 2, 2, 1, 1, 2, 5])
console.log(solution3([2, 2, 3, 4, 3, 3, 2, 2, 1, 1, 2, 5]))
console.log("*************************************************")
