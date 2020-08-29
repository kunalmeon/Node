let fs = require("fs");
let http = require("http");
let url = require("url");

let server = http.createServer((req, res) => {
  // let { query, pathname } = url.parse(req.url, true);

  //OverViewPage
  if (req.url === "/" || req.url === "overview") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });

    res.end("package Installtions and many more");
  }

  //detail page
  else if (req.url === "/detail") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });

    res.end("see the text file for more details ");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("server is listening at port 8000");
});
