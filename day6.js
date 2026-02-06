let out = "";

for (let i=0;i<=4;i++){
    for(let j=0;j<i;j++){
        out = out +(i%2)+' ';

    }
    out = out +"\n";
}
console.log(out)