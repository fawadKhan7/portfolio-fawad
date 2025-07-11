"use client";
import { motion } from "framer-motion";

const ScrollReveal = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  distance = 50,
  className = "" 
}) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: distance 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0 
      }}
      transition={{ 
        duration: duration, 
        delay: delay,
        ease: "easeOut"
      }}
      viewport={{ 
        once: true, 
        amount: 0.1 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal; 