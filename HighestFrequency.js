Question: Given an array of numbers, write a function to return the highest frequency of items in the array

function HighestFrequency(arr){

    
    const result = {};
    for (let i = 0; i < arr.length; i++)
    {
      if(result.hasOwnProperty(arr[i])){
        result[arr[i]]=result[arr[i]]+1;
      }
      else{
        result[arr[i]]=1;
      }   
    }

    return result
}


console.log(HighestFrequency([1,2,1,23,4,3,2,4,56,3,3,4,2,4,5,6,3,2,3,4,5,4]))
