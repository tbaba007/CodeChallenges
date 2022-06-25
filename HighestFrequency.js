

function HighestFrequency(arr){

    const result = {};
    for (let i = 0; i < arr.length; i++)
    {
        result.hasOwnProperty(arr[i]) ? result[arr[i]] = result[arr[i]] + 1 : Object.assign(result, {
            [arr[i]]:1
        })    
    }

    return Object.keys(result).reduce((a,b)=>result[a]>result[b]?a:b)
}


console.log(HighestFrequency([1,2,1,23,4,3,2,4,56,3,3,4,2,4,5,6,3,2,3,4,5,4]))