
function groupBy(arr){

return arr.reduce((names,value)=>{

if(value in names){

names[value]++

}
else{
names[value]=1
}
return names,{})

}
                  
console.log(groupBy([1,2,1,23,4,3,2,4,56,3,3,4,2,4,5,6,3,2,3,4,5,4]))
