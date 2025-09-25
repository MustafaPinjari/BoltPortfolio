"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Palette, Zap, Users, Award, Coffee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const skills = [
  { name: 'React/Next.js', level: 95, color: 'bg-blue-500' },
  { name: 'TypeScript', level: 90, color: 'bg-purple-500' },
  { name: 'Tailwind CSS', level: 95, color: 'bg-teal-500' },
  { name: 'Node.js', level: 85, color: 'bg-green-500' },
  { name: 'GraphQL', level: 80, color: 'bg-pink-500' },
  { name: 'AWS/Vercel', level: 85, color: 'bg-orange-500' },
];

const milestones = [
  {
    year: '2024',
    title: 'Senior Frontend Developer',
    company: 'Tech Innovate Inc.',
    description: 'Leading development of enterprise-scale React applications',
    icon: Code,
  },
  {
    year: '2023',
    title: 'Full Stack Developer',
    company: 'Creative Solutions Ltd.',
    description: 'Built modern web applications with Next.js and Node.js',
    icon: Zap,
  },
  {
    year: '2022',
    title: 'UI/UX Developer',
    company: 'Design Studio Pro',
    description: 'Created responsive designs and interactive user experiences',
    icon: Palette,
  },
  {
    year: '2021',
    title: 'Frontend Developer',
    company: 'StartUp Hub',
    description: 'Developed modern web interfaces with React and TypeScript',
    icon: Users,
  },
];

const achievements = [
  { icon: Award, label: 'Projects Completed', value: '50+' },
  { icon: Users, label: 'Happy Clients', value: '30+' },
  { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
  { icon: Code, label: 'Lines of Code', value: '100K+' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating digital experiences that combine beautiful design 
            with powerful functionality. I bring ideas to life through code.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">My Story</h3>
            <p className="text-muted-foreground leading-relaxed">
              I started my journey in web development over 4 years ago, driven by a passion 
              for creating digital solutions that make a difference. From building my first 
              HTML page to architecting complex React applications, every project has been 
              a learning opportunity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, I specialize in frontend development with a focus on performance, 
              accessibility, and user experience. I believe in writing clean, maintainable 
              code and staying updated with the latest web technologies.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={isInView ? skill.level : 0} 
                    className="h-2"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills & Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12">Skills & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <Card className="glass-effect">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-6 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-primary" />
                  Technical Skills
                </h4>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                          className={`h-full ${skill.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Expertise Areas */}
            <div className="space-y-6">
              <Card className="glass-effect h-full">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-yellow-500" />
                    Frontend Development
                  </h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Modern React with TypeScript and Next.js
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      State management with Redux & Context API
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Responsive UI with Tailwind CSS
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Performance optimization & Web Vitals
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <Code className="h-5 w-5 mr-2 text-blue-500" />
                    Backend & DevOps
                  </h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Node.js, Express & RESTful APIs
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Database design with PostgreSQL & MongoDB
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Cloud deployment (AWS, Vercel, Netlify)
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      CI/CD pipelines & automated testing
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.label}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <Card className="glass-effect hover:bg-card/50 transition-colors">
                    <CardContent className="p-6">
                      <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                      <div className="text-2xl font-bold mb-2">{achievement.value}</div>
                      <div className="text-sm text-muted-foreground">{achievement.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}