// 1.) ---------- Event Module -----------
// Def:   // It is used to find an even is being occured

// const EventEmitter = require("events"); //---> event is a class(Not a module or object or variale)
// let emitter = new EventEmitter();

// // -----> If an even is Raised There should be a 'Listerner to listen'
// emitter.addListener() --> This is used Normally. But, we have a alias for this...That is on() method.
// emitter.on("messageLoaded", function () {
//   console.log("Listerner called");
// });

// // -----> To Raise Event
// emitter.emit("messageLoaded");

// 2.) -------- Event Args ---------
const EventEmitter = require("events");

let emitter = new EventEmitter();

emitter.on("Event_Arguments", function (arg) {
  console.log("Event args handler", arg);
});

emitter.emit("Event_Arguments", { id: 1, url: "http://" });

// 3.) -------- Extending EventLimiter --------- (RealTime usage)

// class Logger extends EventEmitter {
//   log(message) {
//     // sending Http message
//     console.log("Event Raising");

//     // Raise event
//     this.emit("Message_Raising", { id: 2, url: "http://" });
//   }
// }

// module.exports.log = Logger;

// 4.) ------ user defined class in Eventlistener --------

// const Eventemitter = require("events");
// let emitter = new Eventemitter();

// class person extends Eventemitter {
//   constructor(name) {
//     super();
//     this._name = name;
//   }
//   get name() {
//     return this._name;
//   }
// }

// let sid = new person("Sidhu");
// let someg = new person("girl");

// sid.on("task1", function () {
//   console.log(`My name is ${sid.name}`);
// });

// someg.on("task2", function () {
//   console.log(someg.name);
// });
// sid.emit("task1");

// someg.emit("task2");
