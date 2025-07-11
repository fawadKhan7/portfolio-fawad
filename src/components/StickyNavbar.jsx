"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import {
  IconHome,
  IconUser,
  IconCode,
  IconBriefcase,
  IconFolder,
  IconStar,
  IconMail,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";

export const StickyNavbar = ({ items, className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[1000] transition-all duration-300",
          isScrolled
            ? "bg-black/90 backdrop-blur-md shadow-lg border-b border-zinc-700/30"
            : "bg-transparent",
          className
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0"
            >
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {items.map((item, index) => (
                  <motion.button
                    key={item.title}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={item.onClick}
                    className={cn(
                      "group flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative",
                      isScrolled
                        ? "text-zinc-300 hover:text-white"
                        : "text-zinc-400 hover:text-white"
                    )}
                  >
                    <span className="mr-2 opacity-70 group-hover:opacity-100 transition-opacity">
                      {item.icon}
                    </span>
                    {item.title}
                    <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-zinc-300 to-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "inline-flex items-center justify-center p-2 rounded-md transition-colors",
                  isScrolled
                    ? "text-zinc-300 hover:text-white"
                    : "text-zinc-400 hover:text-white"
                )}
              >
                {isMobileMenuOpen ? (
                  <IconX className="h-6 w-6" />
                ) : (
                  <IconMenu2 className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-md border-t border-zinc-700/30"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {items.map((item, index) => (
                  <motion.button
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      item.onClick();
                      setIsMobileMenuOpen(false);
                    }}
                    className="group flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900/50 transition-all duration-200"
                  >
                    <span className="mr-3 opacity-70 group-hover:opacity-100 transition-opacity">
                      {item.icon}
                    </span>
                    {item.title}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16" />
    </>
  );
}; 