function getTarget(arr,target)
  {
    const res=[];
    if(arr.length>0)
    {
      for(let i=0;i<arr.length;i++)
        {
          const subT=target-arr[i];

          if(res.includes(subT))
          {
            const index=res.indexOf(subT)
            return  [index,i]
          }
          res.push(arr[i])
        }
    }
  }

  console.log(getTarget([2,7,9,5,3,2],9))