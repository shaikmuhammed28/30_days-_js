//printing sum of even numbers in 0 to 100  

let total = 0;

for (let num=1;num<=100;num++){
    if (num%2==0){
        total= total+num;
    }

}
console.log(total);