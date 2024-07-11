const express = require("express");
const { Worker } = require("worker_threads");
const path = require("path");
const app = express();

app.get("/endpoint1", (req, res) => {
  res.send("This is Endpoint1 Response");
});

app.get("/endpoint2", (req, res) => {
  const worker = new Worker(path.resolve(__dirname, "worker-script.js"));

  worker.on("message", (message) => {
    if (message.status === "done") {
      res.send(`This is Endpoint2 Response ${message.result}`);
    }
  });

  worker.on("error", (err) => {
    console.error(err);
    res.status(500).send("Worker error");
  });

  worker.on("exit", (code) => {
    if (code !== 0) {
      console.error(`Worker stopped with exit code ${code}`);
      res.status(500).send("Worker stopped unexpectedly");
    }
  });

  worker.postMessage("start");
});

app.listen(3000, () => {
  console.log("Server is Running");
});
