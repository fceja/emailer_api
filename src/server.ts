import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import router from "./routes/routes";

dotenv.config({ path: ".env" });

const app = express();
const port = process.env.PORT;

const allowedOrigin = [`${process.env.ALLOWED_ORIGIN}`];

app.use(
  cors({
    origin: allowedOrigin,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
