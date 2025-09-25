"use client";

import { useEffect, useCallback } from 'react';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenis = useLenis(({ scroll }) => {
    // You can add custom scroll event handling here if needed
    // For example, trigger animations based on scroll position
  });

  // Handle scroll to anchor links
  const handleAnchorClick = useCallback((event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const anchor = target.closest('a[href^="#"]');

    if (!anchor) return;
    
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;
    
    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      event.preventDefault();
      lenis?.scrollTo(targetElement, {
        offset: -80, // Adjust this value based on your header height
        duration: 0.5, // Reduced from 1.4s to 0.5s for faster response
        easing: (t: number) => t // Linear easing for more direct response
      });
    }
  }, [lenis]);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleReducedMotionChange = () => {
      if (mediaQuery.matches) {
        // Disable smooth scrolling if user prefers reduced motion
        document.documentElement.style.scrollBehavior = 'auto';
      } else {
        document.documentElement.style.scrollBehavior = 'smooth';
      }
    };
    
    // Initial check
    handleReducedMotionChange();
    
    // Listen for changes in preference
    mediaQuery.addEventListener('change', handleReducedMotionChange);
    
    // Add click event listener for anchor links
    document.addEventListener('click', handleAnchorClick, { passive: true });

    return () => {
      mediaQuery.removeEventListener('change', handleReducedMotionChange);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [handleAnchorClick]);

  // Lenis configuration
  const lenisOptions = {
    duration: 0.5, // Reduced from 1.2s to 0.5s for snappier response
    easing: (t: number) => t, // Linear easing for more direct response
    smoothWheel: true,
    smoothTouch: false, // Disable smooth scrolling on touch devices for better performance
    touchMultiplier: 1.5,
    infinite: false,
    gestureOrientation: 'vertical' as const, // Type assertion for Lenis compatibility
    normalizeWheel: true,
    wheelMultiplier: 1.2, // Slightly faster wheel scrolling
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}