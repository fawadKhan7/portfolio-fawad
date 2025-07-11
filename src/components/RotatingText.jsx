"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

export const RotatingText = ({
  words,
  className,
  typeSpeed = 100,
  deleteSpeed = 50,
  delaySpeed = 2000,
  cursorClassName
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        } else {
          // Word is complete, wait then start deleting
          setTimeout(() => setIsDeleting(true), delaySpeed);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        } else {
          // Deletion complete, move to next word
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, words, typeSpeed, deleteSpeed, delaySpeed]);

  return (
    <div className={cn("text-xl md:text-2xl lg:text-3xl font-normal tracking-wide", className)}>
      <span className="text-white">{currentText}</span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block w-[2px] h-6 md:h-7 lg:h-8 bg-white ml-1",
          cursorClassName
        )}
      />
    </div>
  );
}; 