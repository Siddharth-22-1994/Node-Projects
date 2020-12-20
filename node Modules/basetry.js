// const os = require('os');

// let totalmem = os.totalmem();
// console.log(totalmem);

// let freemem = os.freemem();
//  console.log(freemem);

// const fs = require("fs");
// const files = fs.readdir("./");
// console.log(files);

// const http = require("http");
// const server = http.createServer();

// server.on("connection", function () {
//   console.log("New connection...");
// });

// server.listen(3000);
// console.log("Listenning to 3000");

// function sum(a, b) {
//   let c = a + b;
//   return c;
// }

// module.exports.Sumobj = sum;

// const path = require("path");

// let pathfilename = path.parse(__filename);
// console.log(pathfilename.name);

// const Eventemitter = require("events");

// const emitter = new Eventemitter();

// emitter.on("messageloader", function () {
//   console.log("Listening");
// });

// emitter.emit("messageloader");

// let events = require("events");
// let util = require("util");

// let person = function (name) {
//   this.fname = name;
// };

// util.inherits(person, events.EventEmitter);

// let james = new person("james");
// let mary = new person("mary");
// let sid = new person("sid");

// let people = [james, mary, sid];

// people.forEach(function (person) {
//   person.on("speak", function (msg) {
//     console.log(person.name + "said " + msg);
//   });
// });

// james.emit("speak", "hey dudes");
// sid.emit("speak", "I want Pizza");

// class person {
//   constructor(name, age) {
//     this.fname = name;
//     this.fage = age;
//   }
//   disp() {
//     console.log(this.fname, this.fage);
//   }
// }

// module.exports.personClass = person;

// const path = require("path");
// // console.log(path.basename(__filename));
// // console.log(path.dirname(__filename));
// // console.log(path.parse(__filename));
// console.log(__filename);

// const evetemitter = require("events");

// class eveemit extends evetemitter {}

// let eeventObj = new eveemit();

// eeventObj.on("event", function (arg) {
//   console.log("Emitter trigerred", arg);
// });

// eeventObj.emit("event", { id: 2, name: "sidhu" });

// const http = require("http");
// http
//   .createServer((req, res) => {
//     res.write("Hello World");
//     res.end();
//   })
//   .listen(4000, () => console.log("Server Loading....."));

// const http = require("http");
// const path = require("path");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   res.write("Hello This is home page");
//   res.end();
// });

// const PORT = 4000;
// server.listen(PORT, function () {
//   console.log("Server loading in" + " " + PORT);
// });



























