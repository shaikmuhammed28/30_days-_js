const rl=require("readline").createInterface({input:process.stdin,output:process.stdout});
rl.question("a:",a=>rl.question("b:",b=>{console.log(a>b?a:b);rl.close();}));