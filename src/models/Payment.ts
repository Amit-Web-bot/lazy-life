import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  amount: Number,
  razorpayOrderId: String,
  razorpayPaymentId: String,
  status: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Payment ||
mongoose.model("Payment", PaymentSchema);
