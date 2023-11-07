import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import indexRouter from "@routers/indexRouter";

dotenv.config({ path: ".env" });

const app = express();
const port = process.env.PORT;

const allowedOrigins = [`${process.env.ALLOWED_ORIGIN}`];

app.use(
  cors({
    origin: allowedOrigins,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
