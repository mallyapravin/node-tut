const http = require("http");
const PORT = 5000;

const server = http.createServer((req, res) => {
  res.write(`Hello welcome to the server  : Listening to PORT ${PORT}`);
  res.end();
});

server.listen(PORT);
