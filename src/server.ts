import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import indexRouter from "@routers/indexRouter";

// init
dotenv.config({ path: ".env" });
const app = express();
const port = process.env.PORT;

// set allowed origins
const allowedOrigins = [`${process.env.ALLOWED_ORIGINS}`];
app.use(
  cors({
    origin: allowedOrigins,
  })
);

// payload data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// mount indexRouter to '/' path
app.use("/", indexRouter);

// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
