const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(res);
  writeFile(
    "./content/result-async.txt",
    `Here is combined writing : ${res}`,
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(result);
    }
  );
});
