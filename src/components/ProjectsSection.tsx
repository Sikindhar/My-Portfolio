import {
  Github,
  ExternalLink,
  Code
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ProjectsSection = () => {
  const projects = [
    {
      title: "NutriConnect",
      description: "A comprehensive web application connecting users with nutritionists and doctors. Built with React, Node.js, and MongoDB. Enables personalized nutrition guidance and medical consultations, improving accessibility and healthcare efficiency",
      image: "/image2.png",
      tags: ["React", "Shad-Cn", "Node.js", "MongoDB"],
      githubLink: "https://github.com/Sikindhar/NutriConnect-Version1",
      liveLink: "https://nutriconnect-version1-4a0b81.netlify.app/"
    },
    {
      title: "Customer FeedBack Analyzer",
      description: "Developed an AI powered tool to collect, categorize, and understand user feedback for product insights and strategy. Currently Researching and Developing cost-effective GenAI solution using GPT-2 fine-tuned model for automatic feedback and review responses, enhancing customer interaction and service tailored for MSMEs and businesses.",
      image: "/image3.png",
      tags: ["React", "Shad-Cn", "Python", "MongoDB", "Rechart", "GenAi", "Sentiment Analysis"],
      githubLink: "https://github.com/Sikindhar/Customer-Feedback-Analyzer-Version1",
      liveLink: "https://github.com/Sikindhar/Customer-Feedback-Analyzer-Version1"
    },
    {
      title: "AES Simulator",
      description: "A command line Software simulation of The Advanced Encryption Standard (AES). A widely used symmetric-key encryption algorithm designed to provide high-level security for electronic data. It was selected by the National Institute of Standards and Technology (NIST) in 2001. This project is a software Simulation of AES for images.",
      image: "/image5.png",
      tags: ["Python", "PyCrypto", "Image Encryption"],
      githubLink: "https://github.com/Sikindhar/AES-Simulator",
      liveLink: "https://github.com/Sikindhar/AES-Simulator"
    },
    {
      title: "CVE Data API",
      description: "Developed an API that displays and provides about the CVE's in a systematic fashion with necessary filters as applied with periodic synchronization from the NVD Database.",
      image: "/image4.png",
      tags: ["HTML", "CSS", "Javascript", "Node.js", "MongoDB", "Node-Cron"],
      githubLink: "https://github.com/Sikindhar/SecureInAssesment",
      liveLink: "https://github.com/Sikindhar/SecureInAssesment"
    }
  ];

  return (
    <section id="projects" className="section-container bg-gray-50">
      <h2 className="section-title">My Projects</h2>

      <p className="text-gray-700 max-w-3xl mb-12">
        Here are some of the projects I've worked on, showcasing my skills and passion for building impactful solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="project-card overflow-hidden card-hover-effect">
            <div className="h-48 bg-gray-300 relative">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-navy mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-block bg-highlight/10 text-highlight px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  asChild
                >
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="flex items-center gap-2 bg-highlight hover:bg-highlight-secondary"
                  asChild
                >
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;