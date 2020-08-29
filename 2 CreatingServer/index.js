/*Creating Server :For that we require http module which gives us networking capability.
Like file reading we require http module. Now to create server we need createServer() which have
 callback function with two parameter one for listening client request and second for giving 
 response and this callback will be called for every new response .
*/

let http = require("http");

//We are just creatin server below.
let server = http.createServer((req, res) => {
  console.log(req);
  res.end("hello from server");
});

//The create server is given certain place(port number) so that it can stay there and serve us

server.listen(7000, "127.0.0.1", () => {
  console.log("listennig at port 7000");
});
