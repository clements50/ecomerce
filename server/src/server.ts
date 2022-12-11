import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoute from "./routes/productRoutes";

const port = process.env.PORT || 3000;

dotenv.config();

const app = express();
app.use(cors());
app.use("/posts", productRoute);

app.use((req, res) => {
  res.status(404).json({ message: "404 not found" });
});

app.listen(port, () => {
  console.log("connected to db");
});
