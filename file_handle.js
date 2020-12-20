const fs = require("fs");
const path = require("path");

// ---> To find the file path using path module:-

// console.log(path.basename(__filename));
// console.log(path.dirname(__filename));
// console.log(path.parse(__filename));

// ----------------------------------------------------------
// to handle file in js import -->fs module

//------> To read read file
// fs.readFile("handling1_file.txt", "utf8", function (err, data) {
//   console.log(data);
// });

// -----> To write to a file
// fs.writeFile("handling1_file.txt", "writing file", function (err) {
//   console.log("Written");
// });

// -----> To append a file
// fs.appendFile("handling1_file.txt", "\nAppending the file", function (err) {
//   console.log("File appended");
// });

// -----> To delete a file
// fs.unlink("file.txt", function (err) {
//   console.log("Deleted done!");
// });

// -----> To create a directory
// fs.mkdir(path.join(__dirname, "test1"), function (err) {
//   console.log("Folder Created");
// });
