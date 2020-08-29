/*Note: Sync means blocking as all other execution of programm is blocked unless we current one
is finished and other thing is Async which means nonBocking. In case of nonBLocking we need call
back function which will be called incase of data is present or not. Similar to promises.
*/

let fs = require("fs");
let reading = fs.readFile("step1.txt", "utf-8", (err, data1) => {
  if (err) return console.log("error");
  fs.readFile("step2.txt", "utf-8", (err, data2) => {
    if (err) return console.log("error");
    fs.readFile("step3.txt", "utf-8", (err, data3) => {
      if (err) return console.log("error");
      fs.readFile("step4.txt", "utf-8", (err, data4) => {
        if (err) return console.log("error");
        console.log(data1 + " " + data2 + " " + data3 + " " + data4);
        fs.writeFile(
          "fullsteps.txt",
          `${data1}${data2}${data3}${data4}`,
          () => {
            return;
          }
        );
      });
    });
  });
});

/*This above is called callback hell. As progaram goes on increasing it also goes on increasing which reduces
readability.The solution is we use async and await.  */
