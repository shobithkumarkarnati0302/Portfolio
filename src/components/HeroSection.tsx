
import { ArrowDown, Mail, Github, Linkedin, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative z-10">
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white animate-slide-up">
            Hi, I'm <span className="text-portfolio-primary">Shobith Kumar</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 animate-slide-up" style={{ animationDelay: "100ms" }}>
            Computer Science Student | Frontend Developer
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: "200ms" }}>
            A passionate third-year Computer Science student at Parul University, 
            driven by enthusiasm for frontend development and Data Structures & Algorithms.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "300ms" }}>
            <Button className="bg-portfolio-primary hover:bg-portfolio-secondary transition-all duration-300 transform hover:scale-105">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
            
            <Button variant="outline" className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white transition-all duration-300 transform hover:scale-105">
              Download Resume
            </Button>
          </div>
          
          <div className="flex gap-4 justify-center lg:justify-start pt-4 animate-slide-up" style={{ animationDelay: "400ms" }}>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-portfolio-primary transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transform hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-portfolio-primary transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transform hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://leetcode.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-portfolio-primary transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transform hover:scale-110 transition-all duration-300"
              aria-label="LeetCode"
            >
              <Code2 className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex justify-center animate-fade-in">
          <div className="relative">
            {/* Increased image size for desktop/laptop screens */}
            <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-portfolio-primary shadow-xl">
              <img 
                src="src\static\1.jpg" 
                alt="Shobith Kumar" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-portfolio-primary/10 animate-pulse"></div>
            
            {/* Add decorative elements around the image */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-portfolio-accent rounded-full animate-bounce" style={{ animationDelay: "200ms" }}></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-portfolio-secondary rounded-full animate-bounce" style={{ animationDelay: "400ms" }}></div>
            <div className="absolute top-1/4 -left-6 w-4 h-4 bg-portfolio-primary rounded-full animate-ping" style={{ animationDuration: "3s" }}></div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className={cn(
          "absolute bottom-10 left-1/2 transform -translate-x-1/2",
          "flex flex-col items-center text-gray-500 hover:text-portfolio-primary transition-colors"
        )}
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
