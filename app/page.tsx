import { Suspense } from 'react';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ProjectsSection from '@/components/sections/projects-section';
import ResumeSection from '@/components/sections/resume-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactSection from '@/components/sections/contact-section';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import LoadingSpinner from '@/components/ui/loading-spinner';

export default function Home() {
  return (
    <div className="parallax-container">
      <Navigation />
      
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
      </Suspense>
      
      <AboutSection />
      <ProjectsSection />
      <ResumeSection />
      <TestimonialsSection />
      <ContactSection />
      
      <Footer />
    </div>
  );
}