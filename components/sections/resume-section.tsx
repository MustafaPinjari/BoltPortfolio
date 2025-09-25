"use client";

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, Eye, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function ResumeSection() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleDownload = () => {
    // This would normally download a real PDF file
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Mustafa_Pinjari_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" ref={ref} className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Resume
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download my complete resume or preview it online to learn more about 
            my experience and qualifications.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass-effect">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-32 bg-primary/20 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <div className="text-primary text-4xl">📄</div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">
                  Mustafa Pinjari - Frontend Developer
                </h3>
                
                <p className="text-muted-foreground mb-8">
                  Complete professional resume including experience, education, 
                  skills, and achievements in modern web development.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={handleDownload}
                    size="lg"
                    className="px-8 py-4 bg-primary hover:bg-primary/90 font-medium rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                  
                  <Button
                    onClick={() => setIsPreviewOpen(true)}
                    variant="outline"
                    size="lg"
                    className="px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Preview Online
                  </Button>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">4+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">Technologies</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">30+</div>
                      <div className="text-sm text-muted-foreground">Clients</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Resume Preview Modal */}
        <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh]">
            <DialogHeader>
              <DialogTitle>Resume Preview</DialogTitle>
            </DialogHeader>
            <div className="bg-white text-black p-8 rounded-lg max-h-[70vh] overflow-y-auto">
              {/* Resume Content */}
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="text-center border-b pb-6">
                  <h1 className="text-3xl font-bold">Mustafa Pinjari</h1>
                  <p className="text-lg text-gray-600">Advanced Frontend Developer</p>
                  <div className="flex justify-center space-x-4 text-sm text-gray-600 mt-2">
                    <span>email@example.com</span>
                    <span>•</span>
                    <span>+1 (555) 123-4567</span>
                    <span>•</span>
                    <span>LinkedIn</span>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-3">
                    Professional Summary
                  </h2>
                  <p className="text-gray-700">
                    Experienced Frontend Developer with 4+ years of expertise in React, Next.js, 
                    and modern web technologies. Proven track record of delivering high-performance 
                    web applications with exceptional user experiences.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-3">
                    Technical Skills
                  </h2>
                  <div className="grid grid-cols-2 gap-4 text-gray-700">
                    <div>
                      <strong>Frontend:</strong> React, Next.js, TypeScript, JavaScript
                    </div>
                    <div>
                      <strong>Styling:</strong> Tailwind CSS, Styled Components, SASS
                    </div>
                    <div>
                      <strong>Backend:</strong> Node.js, Express, GraphQL
                    </div>
                    <div>
                      <strong>Tools:</strong> Git, Webpack, Vite, Docker
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-3">
                    Work Experience
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold">Senior Frontend Developer</h3>
                          <p className="text-gray-600">Tech Innovate Inc.</p>
                        </div>
                        <span className="text-gray-600">2024 - Present</span>
                      </div>
                      <ul className="list-disc list-inside text-gray-700 mt-2">
                        <li>Lead development of enterprise React applications</li>
                        <li>Improved application performance by 40%</li>
                        <li>Mentored junior developers</li>
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold">Full Stack Developer</h3>
                          <p className="text-gray-600">Creative Solutions Ltd.</p>
                        </div>
                        <span className="text-gray-600">2023 - 2024</span>
                      </div>
                      <ul className="list-disc list-inside text-gray-700 mt-2">
                        <li>Built modern web applications with Next.js</li>
                        <li>Implemented responsive designs</li>
                        <li>Collaborated with design teams</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-3">
                    Education
                  </h2>
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold">Bachelor of Computer Science</h3>
                        <p className="text-gray-600">University of Technology</p>
                      </div>
                      <span className="text-gray-600">2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}