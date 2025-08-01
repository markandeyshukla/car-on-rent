import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  name: String,
  brand: String,
  pricePerHour: Number,
  seats: Number,
  fuelType: String,
  carNumber: String,
  driverName: String,
  driverNumber: Number,
  pincode: { type: String, minlength: 6, maxlength: 6 },
  imageUrl: String,
});
const CarModel = mongoose.models.Car || mongoose.model("Car", carSchema);

export default CarModel;
