"use client";

import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-bold text-2xl gradient-text"
          >
            Mustafa Pinjari
          </motion.div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="text-muted-foreground hover:text-foreground transition-colors animated-underline"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full h-px bg-border" />

          {/* Copyright and Back to Top */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <span>© {currentYear} Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>by Mustafa Pinjari</span>
            </div>
            
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="mt-4 md:mt-0 hover:bg-primary/20"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}