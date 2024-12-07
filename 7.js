var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var ans=[];
const removeDuplicate=()=>{
    for(let i of numbers){
        if(!ans.includes(i))ans.push(i)
    }
}
removeDuplicate()
console.log(ans);