"use client"
import { motion } from "framer-motion";
import Button from "./Button";

const plans = [
  { amount: 99, label: "Buy me a coffee ☕" },
  { amount: 199, label: "Sponsor a power nap 😴" },
  { amount: 499, label: "Become a Lazy Legend 👑" }
];

export default function Donate() {
  return (
    <section id="support" className="donate-section">
      <div className="donate-container">

        <h2 className="donate-title">
          Support My Lazy Life
        </h2>

        <p className="donate-desc">
          Your contribution keeps my coffee warm and my stress low.
        </p>

        <div className="donate-grid">

          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className="donate-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>₹{plan.amount}</h3>
              <p>{plan.label}</p>

              <Button text="Support" />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
