import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";

import router from "./routes/routes";

dotenv.config({ path: "configs/.env" });

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
