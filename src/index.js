import express from "express";
import { app } from "./app.js";
import logger from "./logger.js";
import morgan from "morgan";

const morganFormat = ":method :url :status :response-time ms";

app.use(express.json());
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

app.get("/test", (req, res) => {
  logger.info("A test get request was sent");
  res.status(200).send("THIS IS A TEST ROUTE SERVER WORKING NORMALLY");
});
