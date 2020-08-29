/*Api serves us the data. It is like waiter in hotel whose role is to place order from the
customer to the kitchen and back from kitchen to customer. Here server is kitchen ,browser is
user and node programm is waiter */

let http = require("http");
let url = require("url");
let fs = require("fs");

// let server = http.createServer((req, res) => {
//   if (req.url === "/" || req.url === "/api") {
//     fs.readFile("./JSON Data/Api.json", "utf-8", (err, data) => {
//       console.log(data);

//       res.writeHead(200, {
//         "Content-type": "application/json",
//       });
//       res.end(data);
//     });
//   } else {
//     res.writeHead(404, {
//       "Content-type": "text/html",
//     });
//     res.end("<h1>Page Not Found</h1>");
//   }
// });
// server.listen(8000, "127.0.0.1");

/*In above programm we can make changes while reading file. What if the data is always same only the request
are async. In such case we can read file in sync way at the top so that it will save server time from the
second request and so on */

let hospitalData = fs.readFileSync(
  `${__dirname}/JSON Data/hospital.json`,
  "utf-8"
);

let server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/hospital") {
    
      res.writeHead(200, {
        "Content-type": "application/json",
      });
      res.end(hospitalData);
    
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>Page Not Found</h1>");
  }
});
server.listen(8000, "127.0.0.1");
