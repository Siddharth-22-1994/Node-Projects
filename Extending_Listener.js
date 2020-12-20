const log = require("./Event_Handlers.js");

const logerObj = new log();

logerObj.on("Message_Raising", function (arg) {
  console.log("Event Extending Listener", arg);
});

logerObj.log("My Message");
