const { parentPort } = require("worker_threads");

parentPort.on("message", (message) => {
  let number = 0;
  if (message === "start") {
    for (let i = 0; i < 9999999999; i++) {
      number += i;
    }
    console.log(number);
  }
  parentPort.postMessage({ status: "done", result: number });
});
