
import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  customerName: String,
  pickupAddress: String,
  contactNumber: String,
  duration: Number,
  totalPrice: Number,
  paymentType: String,
  carId: { type: mongoose.Schema.Types.ObjectId, ref: 'Car' },
  driverName: String,
  driverNumber: String,
  carNumber: String,
  imageUrl: String,
  carName: String,
  brand: String
}, { timestamps: true });

const PaymentModel = mongoose.models.Payment || mongoose.model("Payment", paymentSchema);
export default PaymentModel;
