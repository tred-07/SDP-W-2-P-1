const array=[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]

const sort=()=>{
    for(let i=0;i<20;i++){
        for(let j=i+1;j<20;j++){
            if(array[i]>array[j]){
                let tmp=array[i]
                array[i]=array[j]
                array[j]=tmp
            }
        }
    }
}

sort()

for(let i=0;i<20;i++){
    console.log(array[i]);
}