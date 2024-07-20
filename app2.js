console.log("I'm in", __dirname);

const os = require("os");
const path = require("path");

//userInfo
/*
os.uptime

 */

const currentOS = {
  osType: os.type(),
  osPath: path.sep,
};

console.log(currentOS);

path.join("/content", "subfolder");
