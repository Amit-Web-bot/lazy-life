"use client"
import { motion } from "framer-motion";
import Button from "./Button";
import Link from "next/link";




export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass fixed w-full top-0 z-50"
    >
      <nav className="navbar">
      <div className="nav-container">

        <h1 className="nav-logo">😴 LazyLife</h1>

        <div className="nav-links hidden md:flex">
        <Link href="/about">About</Link>
          <a href="#philosophy">Philosophy</a>
          <Link href="/support">Support</Link>
          <Link href="/hire">Hire</Link>
        </div>

        <div className="nav-actions">
          <a href="#">📸</a>
          <a href="#">💼</a>
          <Button text="Support" />
        </div>

      </div>
    </nav>
    </motion.nav>
  )
}
