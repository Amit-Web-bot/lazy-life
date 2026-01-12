"use client"
import { motion } from "framer-motion";

const stats = [
  { emoji: "☕", value: "124+", label: "Coffees Funded" },
  { emoji: "😴", value: "78+", label: "Naps Sponsored" },
  { emoji: "❤️", value: "42+", label: "Supporters" }
];

export default function SocialProof() {
  return (
    <section className="social-proof">
      <div className="social-container">

        {stats.map((item, i) => (
          <motion.div
            key={i}
            className="stat-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-3xl">{item.emoji}</span>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
