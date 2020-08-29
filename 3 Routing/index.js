/*Routing is changing action based on the change in url. To keep record of url we have to use
URL module. Suppose www.facebook.com is home page then the '/' will be root. If i enter
www.facebook.com/photo.php..... then my profile picture will be open. This is called routing */

let http = require("http");
let url = require("url");

let server = http.createServer((req, res) => {
  //Tracking change in url using simple if and else statement
  console.log(req.url);
  if (req.url === "/home" || req.url === "/") {
    //default url is root i.e "/" which means first page
    res.end("welcome to home page");
  } else {
    /*Page not found message will be displayed but the status code will show 200 ok which is not good thing
    So we can write headers for unknown url where status code will be 400 which means no such page found
    */
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>Page Not Found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("server is listening at port 8000");
});
