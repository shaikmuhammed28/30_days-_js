

// function pattern (input){

//     let out = "";
// for (let i = input-1;i>0;i--){
//     let temp = i+2-1;
//     for(let j =0;j<i;j++){
//         out =  out + " ";
//     }
//     for (let k = temp;k<=(input -1)*2-1;k++){
//         out = out + "* ";
//     }
//     out = out +"\n";
// }


// for (let i = input;i>0;i++){
//     for (let k= i;k<input;k++){
//         out = out + " ";    
//     }
//     let temp = i*2-1;
//     for(let j=0;j<temp;j++){
//         out = out + "\n";
//     }
// }
// console.log(out);

// }
// pattern(6)


function pattern(input) {
  let out = "";

  // 🔺 Top half of diamond
  for (let i = 1; i <= input; i++) {
    // spaces
    for (let s = input; s > i; s--) {
      out += " ";
    }
    // stars
    for (let j = 1; j <= i * 2 - 1; j++) {
      out += "*";
    }
    out += "\n";
  }

  // 🔻 Bottom half of diamond
  for (let i = input - 1; i >= 1; i--) {
    // spaces
    for (let s = input; s > i; s--) {
      out += " ";
    }
    // stars
    for (let j = 1; j <= i * 2 - 1; j++) {
      out += "*";
    }
    out += "\n";
  }

  console.log(out);
}

pattern(6);
