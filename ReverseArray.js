console.log(reverseArray(['a','b','c']))

function reverseArray(arr){
  let result=[];
  if(arr && arr.length>0){
    for(let i=arr.length-1;i>-1;i--){
      result.push(arr[i])
    }
    return result;
  }
  
}
