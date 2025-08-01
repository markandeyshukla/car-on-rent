import dotenv from 'dotenv';
dotenv.config();
import nodemailer from 'nodemailer';

export const sendOrderConfirmationEmail = async (customerEmail, carDetails, driverDetails) => {
  try {
    console.log("Sending email to:", customerEmail);
    if (!customerEmail) {
      console.error("Recipient email address is missing!");
      return;
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: customerEmail,
      subject: 'Your Car Booking is Confirmed!',
      html: `
        <h3>Thank you for your booking Car on Rent!</h3>
        <p><strong>Car Details:</strong></p>
        <ul>
          <li><strong>Brand:</strong> ${carDetails.brand}</li>
          <li><strong>Model:</strong> ${carDetails.name}</li>
          <li><strong>Car Number:</strong> ${carDetails.carNumber}</li>
        </ul>
        <p><strong>Driver Details:</strong></p>
        <ul>
          <li><strong>Name:</strong> ${driverDetails.name}</li>
          <li><strong>Phone:</strong> ${driverDetails.number}</li>
        </ul>
        <p>We wish you a safe journey! And Above is Driver Number And Name Of DRiver.</p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log("Order confirmation mail sent!");
  } catch (err) {
    console.error("Error sending email:", err);
  }
};
