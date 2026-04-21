"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"; // For optimized logo rendering
import { Button } from "@/components/atoms/Button";
import { NavItem } from "@/components/molecules/NavItem";
import { SearchBar } from "@/components/molecules/SearchBar";
import { useScrollShadow } from "@/core/hooks/useScrollShadow";
import { navLinks } from "@/core/services/content.service";

export function Navbar() {
  const isElevated = useScrollShadow();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = useCallback((_value: string) => {
    // API/Backend Integration Point
  }, []);

  const toggleMenu = () => setIsMenuOpen((current) => !current);

  return (
    <header className="fixed inset-x-0 top-4 z-[100] flex justify-center px-4">
      <div className="flex w-full max-w-[1280px] flex-col items-center">
        <motion.div
          animate={{ 
            width: isElevated ? "90%" : "100%",
            paddingLeft: isElevated ? "1.5rem" : "1rem",
            paddingRight: isElevated ? "1.5rem" : "1rem"
          }}
          transition={{ duration: 0.4, ease: "circOut" }}
          className="flex min-h-[64px] w-full items-center justify-between rounded-full border border-white/40 bg-white/70 shadow-lg backdrop-blur-md md:min-h-[72px]"
        >
          {/* BRANDING: Logo + Name properly aligned like reference */}
          <a href="/" className="flex min-w-0 items-center gap-3 transition-transform active:scale-95">
            <div className="relative h-8 w-8 md:h-10 md:w-10">
              <Image 
                src="/logo.svg" 
                alt="K-Vaidyan Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <span className="max-w-[140px] overflow-hidden text-ellipsis whitespace-nowrap text-lg font-bold tracking-tight text-slate-900 sm:max-w-[220px] md:max-w-none md:text-xl">
              K Vaidyan Insurance 
            </span>
          </a>

          {/* DESKTOP CONTENT: Hidden on Mobile */}
          <div className="hidden items-center gap-6 md:flex">
            <SearchBar onSearch={handleSearch} />
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <NavItem key={link.href} link={link} />
              ))}
            </nav>
            <Button href="#quote" className="rounded-full px-6 py-2 shadow-md">
              Get Started
            </Button>
          </div>

          {/* MOBILE TOGGLE: Only shown on mobile screens */}
          <button
            type="button"
            onClick={toggleMenu}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100/50 text-slate-900 md:hidden"
          >
            <HamburgerIcon isOpen={isMenuOpen} />
          </button>
        </motion.div>

        {/* MOBILE DRAWER: Smooth slide-down animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="mt-3 w-full origin-top overflow-hidden rounded-[2rem] border border-white/60 bg-white/90 p-6 shadow-2xl backdrop-blur-xl md:hidden"
            >
              <div className="space-y-6">
                <SearchBar onSearch={handleSearch} />
                <nav className="flex flex-col gap-5">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-lg font-medium text-slate-800 transition-colors hover:text-blue-600"
                    >
                      {link.label}
                    </a>
                  ))}
                  <hr className="border-slate-100" />
                  <Button href="#quote" className="w-full rounded-2xl py-4">
                    Get Started
                  </Button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="flex flex-col items-end gap-1.5">
      <motion.span 
        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0, width: isOpen ? 24 : 24 }}
        className="h-0.5 rounded-full bg-current transition-all"
      />
      <motion.span 
        animate={{ opacity: isOpen ? 0 : 1, width: 16 }}
        className="h-0.5 rounded-full bg-current"
      />
      <motion.span 
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0, width: isOpen ? 24 : 20 }}
        className="h-0.5 rounded-full bg-current transition-all"
      />
    </div>
  );
}