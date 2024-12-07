var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const findMax=()=>{
    let mx=0;
    for(let i of numbers){
        if(i>mx){
            mx=i;
        }
    }
    return mx;
}

console.log(findMax());

