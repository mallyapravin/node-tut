// const amount = 4;

// if (amount < 10) {
//   console.log("Small number");
// } else {
//   console.log("Large number");
// }

//Sync - Blocking
//Async - Non-blocking

const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");

console.log(first);

writeFileSync("./content/result-sync.txt", `Here is the result : ${first}`);
