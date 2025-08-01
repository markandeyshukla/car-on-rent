import express from "express";
import CarModel from "../Model/CarModel.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// 🟢 Add a new car (Admin only)
router.post("/", authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    const newCar = new CarModel(req.body);
    await newCar.save();
    res.status(201).json({ message: "Car added", car: newCar });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🟡 Get all cars
router.get("/", async (req, res) => {
  try {
    const cars = await CarModel.find();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/search", async (req, res) => {
  try {
    const { pincode, seats } = req.query;

    if (!pincode || !seats) {
      return res.status(400).json({ message: "Pincode and seaters are required" });
    }

    const cars = await CarModel.find({
      pincode: pincode,
      seats: parseInt(seats),
    });

    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const car = await CarModel.findById(req.params.id);
    if (!car) return res.status(404).json({ message: "Car not found" });

    res.status(200).json(car);
  } catch (err) {
    res.status(500).json({ message: "Error fetching car" });
  }
});

export default router;
