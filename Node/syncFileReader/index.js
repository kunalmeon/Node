/*For reading a file we require filesystem object noted as 'fs'. This object has got file reading and writing
methods in both sync and async ways. Well to be honest async is preferred but let us know about both */

const filesystem = require("fs");

/*Reading a file needs readFileSync method in which which file and the format in which we want to read
file is passed. After reading the file we need to store that read out content so we will make new variable */

const whatWasInFile = filesystem.readFileSync("abouthospital.txt", "utf-8");
console.log(whatWasInFile);
/*To run we type node and file name in terminal like node index.js. Remember that we are compiling using
Node.js so we need to reach to that specific folder using cd Node cd FileIO cd syncFileReader and then 
node index.js*/

/*Writing into file is also similar to reading. We can write into same file or we can make new file.
I dont know why vscode is not showing realTime file creation but in workspace folder i can see that.  */

const newContent = ` ${whatWasInFile}\n this hospital is providing service from many decades 
which is good thing ok ok`;
filesystem.writeFileSync("file.txt", newContent);
console.log("file was written");
