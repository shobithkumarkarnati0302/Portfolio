
import { Github, ExternalLink, MoveRight, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  features: string[];
  githubLink?: string;
  liveLink?: string;
  inProgress?: boolean;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Spend Smart - Expense Tracker",
      description: "A full-stack expense tracking web application to help users manage their finances efficiently.",
      image: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
      techStack: ["MERN Stack", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
      features: [
        "AI Chatbot Integration (Upcoming)",
        "User Authentication",
        "Expense Tracking",
        "Data Visualization",
        "Category-Based Budgeting",
        "Transaction History",
        "Real-Time Updates",
        "Responsive UI",
        "Dark Mode Support"
      ],
      githubLink: "https://github.com/shobithkumarkarnati0302/SpendSmart",
      liveLink: "https://spendsmart-shobith.vercel.app/",
    },
    {
      id: 2,
      title: "Meme Generator with AI Captioning",
      description: "An AI-powered Meme Generator using React.js, Node.js, and Hugging Face APIs to generate captions.",
      image: "https://images.unsplash.com/photo-1531928351158-2f736078e0a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      techStack: ["React.js", "Node.js", "Express", "Hugging Face API", "Canvas API", "Tailwind CSS"],
      features: [
        "AI-generated captions",
        "Meme template selection",
        "Real-time captioning",
        "Download support"
      ],
      githubLink: "https://github.com/",
      inProgress: true,
    },
    {
      id: 3,
      title: "Spotify Clone",
      description: "A simple Spotify clone built using HTML, CSS, and JavaScript that mimics the core features of the Spotify platform.",
      image: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      techStack: ["HTML", "CSS", "JavaScript"],
      features: [
        "Media player functionality",
        "Track management",
        "User interface similar to Spotify"
      ],
      githubLink: "https://github.com/shobithkumarkarnati0302/Spotify-Clone",
      liveLink: "https://spotify-clone-shobith.netlify.app/",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="text-portfolio-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-portfolio-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Check out some of the projects I've worked on. Each project demonstrates different skills and technologies.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={cn(
                "flex flex-col lg:flex-row gap-8 items-center",
                index % 2 === 1 && "lg:flex-row-reverse"
              )}
            >
              <div className="w-full lg:w-1/2 overflow-hidden rounded-lg shadow-lg group">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex gap-3 justify-center">
                        {project.githubLink && (
                          <a 
                            href={project.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white text-gray-900 p-2 rounded-full hover:bg-portfolio-primary hover:text-white transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {project.liveLink && (
                          <a 
                            href={project.liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white text-gray-900 p-2 rounded-full hover:bg-portfolio-primary hover:text-white transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  {project.inProgress && (
                    <Badge 
                      className="absolute top-3 right-3 bg-yellow-500"
                      variant="secondary"
                    >
                      In Progress
                    </Badge>
                  )}
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 my-3">
                  {project.techStack.map((tech) => (
                    <Badge 
                      key={tech} 
                      className="bg-portfolio-light text-portfolio-primary dark:bg-gray-800 hover:bg-portfolio-accent"
                      variant="secondary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-portfolio-primary" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-start">
                        <span className="text-portfolio-primary mr-2">•</span>
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4">
                  {project.liveLink ? (
                    <Button 
                      className="bg-portfolio-primary hover:bg-portfolio-secondary"
                      asChild
                    >
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        View Project <MoveRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  ) : (
                    <Button 
                      className="bg-portfolio-primary hover:bg-portfolio-secondary"
                      asChild
                    >
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        View on GitHub <Github className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
