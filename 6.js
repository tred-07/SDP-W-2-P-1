var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let ans=" ";

const maxName=()=>{
    let max=0;
    for(let i of friends){
        if(i.length>max){
            ans=i;
            max=i.length
        }
    }
}

maxName()
console.log(ans);