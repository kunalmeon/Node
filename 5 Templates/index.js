let fs = require("fs");
let http = require("http");
let url = require("url");
let template = fs.readFileSync("template.html", "utf-8");
let hosOVerview = fs.readFileSync("hosOVerview.html", "utf-8");
let hosDetail = fs.readFileSync("hosDetail.html", "utf-8");
let data = fs.readFileSync("data.json", "utf-8");
let dataObj = JSON.parse(data);

function templateFilling(htmlFile, elem) {
  /*Note:replace method only works for string. Here we read file in utf-8 format which means string so 
  we dont need to convert the file into string format */
  let filledFile = htmlFile.replace(/{%Discription%}/g, elem.Discription);
  filledFile = filledFile.replace(/{%Name%}/g, elem.Name);
  filledFile = filledFile.replace(/{%Address%}/g, elem.Address);
  filledFile = filledFile.replace(/{%Category%}/g, elem.Category);
  filledFile = filledFile.replace(/{%ID%}/g, elem.id);

  return filledFile;
}
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
    console.log(query)
    res.end(output);
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("server is listening at port 8000");
});
