
//using array 
//copied code


let height = 5;

for (let i = 1; i <= height; i++) {
    let row = Array.from({ length: i }, () => "*");
    console.log(row.join(" "));
}