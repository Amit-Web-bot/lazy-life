"use client"
import { motion } from "framer-motion";

export default function Button({ text }: {text:string}) {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="
        px-6 py-3
        rounded-xl
        bg-gradient-to-r from-purple-500 to-indigo-500
        text-white
        font-semibold
        shadow-lg
      "
    >
      {text}
    </motion.button>
  );
}
