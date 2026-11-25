import dotenv from "dotenv";
dotenv.config();
import carRoutes from "./routes/carRoutes.js"
import dbconnect from "./dbconnect.js";
import authenticationRoutes from "./routes/authenticationRoutes.js";
import paymentRoute from "./routes/paymentRoute.js";
import cors from "cors";
import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;
dbconnect();
app.use(cors({
  origin: "https://gadilejao.netlify.app", 
  credentials: true 
}));

app.use(express.json());
app.use("/api/auth", authenticationRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/payment", paymentRoute);
app.listen(PORT, () => {
  console.log(`✅ Server started on http://localhost:${PORT}`);
});
