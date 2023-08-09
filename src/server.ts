import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import router from "./routes/routes";

dotenv.config({ path: "configs/.env" });

const app = express();
const port = process.env.PORT || 3020;


// NOTE - will need to verify this works
const allowedOrigins = [""];

app.use(cors({
  origin: allowedOrigins
}))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
