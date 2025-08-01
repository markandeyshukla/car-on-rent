import express from 'express';
import { sendOrderConfirmationEmail } from '../utils/sendmail.js';
import PaymentModel from '../Model/PaymentModel.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const {
      name, customerEmail, address, mobileNumber,
      carId, brand, carName, carNumber,
      driverName, driverNumber, paymentType, totalPrice
    } = req.body;

    const order = await PaymentModel.create({
      name, customerEmail, address, mobileNumber,
      carId, brand, carName, carNumber,
      driverName, driverNumber, paymentType, totalPrice
    });

    await sendOrderConfirmationEmail(customerEmail, {
      brand: brand,
      name: carName,
      carNumber
    }, {
      name: driverName,
      number: driverNumber
    });

    res.status(201).json({ message: 'Booking successful and email sent!' });
  } catch (error) {
    console.error("Payment error:", error);
    res.status(500).json({ message: 'Booking failed', error });
  }
});

export default router;
