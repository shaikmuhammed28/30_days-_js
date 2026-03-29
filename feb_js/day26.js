const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter numbers separated by space: ", function(input) {

  let arr = input.split(" ").map(Number);

  function findLeaders(arr) {
    let leaders = [];
    let maxFromRight = arr[arr.length - 1];
    leaders.push(maxFromRight);

    for (let i = arr.length - 2; i >= 0; i--) {
      if (arr[i] > maxFromRight) {
        maxFromRight = arr[i];
        leaders.push(arr[i]);
      }
    }

    return leaders.reverse();
  }

  console.log("Leaders:", findLeaders(arr).join(" "));
  rl.close();
});