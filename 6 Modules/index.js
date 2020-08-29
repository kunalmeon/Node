let fs = require("fs");
let http = require("http");
let url = require("url");
let template = fs.readFileSync("template.html", "utf-8");
let hosOVerview = fs.readFileSync("hosOVerview.html", "utf-8");
let hosDetail = fs.readFileSync("hosDetail.html", "utf-8");
let data = fs.readFileSync("data.json", "utf-8");
let dataObj = JSON.parse(data);

/*Here we will use separate module that contains our templateFilling Fucntion.
Like http fs and url we need require method and inside it we have to specify the path.
In the path file we need to call module obejct's export property
*/
let templateFilling = require("./modules/templateFilling");

let server = http.createServer((req, res) => {
  let { query, pathname } = url.parse(req.url, true);

  //OverViewPage
  if (pathname === "/" || pathname === "overview") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    let outPut = dataObj
      .map((elem) => templateFilling(template, elem))
      .join("");
    console.log(url.parse(req.url, true));
    /*Now these template will be used in hosOverview.html file */
    let overview = hosOVerview.replace(/{%AllHospitals%}/g, outPut);
    res.end(overview);
  }

  //detail page
  else if (pathname === "/detail") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    console.log(url.parse(req.url));
    let output = templateFilling(hosDetail, dataObj[query.id]);
    console.log(query);
    res.end(output);
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("server is listening at port 8000");
});
