let out = "";

for (let i=1;i<=4;i++){

    for(let s=4;s>i;s--){
        out +=" ";

    }
    for(let j=1;j<=i;j++){
        out +="*";
    }
    out +="\n";
}
console.log(out)