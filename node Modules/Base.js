// Link : https://www.youtube.com/watch?v=TlB_eWDSMt4

// -------------- To work with user Defined Modules ---------------

// Method 1

function sum(a, b) {
  let c = a + b;
  return c;
}

module.exports.addition = sum; // Here sum is exported as Object;
// or
// module.exports = sum; //Here sum is exported as function;

// ------------ To work with Default Modules---------------

// 1.)------- path module ------

const path = require("path"); // Default way to use In-built odule

// let pathfilename = path.parse(__filename);
// console.log(pathfilename); // Find the Path of file.

// 2.)------- OS module ------
const os = require("os");

// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());
console.log(os.homedir());

// To work with files

// 3.)----------- Files ---------
// --------- Type 1
// a) ----with Sync Method ----> Not Prefered
const fs = require("fs");

// const files = fs.readdirSync("./");
// console.log(files);

// ----------Type 2
// b) ----with Assync Method ---> Prefered to use always

// fs.readdir("./", function (err, files) {
//   if (err) console.log("Error", err);
//   else console.log("Result", files);
// });

// 4.) ------- http --------
// XXXX This is very basic and not mostly in realtime XXXX

const http = require("http");
// const server = http.createServer(); // create server

// server.on("connection", function () {
//   // listener
//   console.log("New connection 3500..");
// });

// server.listen(3500);
// console.log("Listening to port 3500");

// -------- In real time ----------
// const server = http.createServer(function (req, res) {
//   if (req.url === "/") {
//     res.write("Hello");
//     res.end();
//   }

//   if (req.url == "api/course") {
//     res.write(JSON.stringify([1, 2, 3, 4]));
//     res.end();
//   }
// });

// server.listen(3500);
// console.log("Listening to port 3500");
