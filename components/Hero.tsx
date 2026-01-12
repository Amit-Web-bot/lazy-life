"use client"
import { motion } from "framer-motion";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="hero">

      {/* Glow blobs */}
      <motion.div
        className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 top-20 left-10"
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

      <motion.div
        className="absolute w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-20 bottom-20 right-10"
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

      <div className="hero-container">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="hero-title">
            Help Amit Live a <span>Lazy Life</span>
          </h1>

          <p className="hero-desc">
            Fighting hustle culture one nap at a time.
            Support my journey to a stress-free lifestyle.
          </p>

          <div className="hero-actions">
          <a href="#support">
          <button className="secondary-btn">Support my Lazy Life</button>
          </a>
            <button className="secondary-btn">Hire Me</button>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
  className="hero-image-wrapper"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.2 }}
>
  <div className="hero-ring">
    <img 
      src="/lazy_hero.jpg" 
      alt="Lazy developer"
      className="hero-img"
    />
  </div>
</motion.div>
      </div>
    </section>
  )
}
