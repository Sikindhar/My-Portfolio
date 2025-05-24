
import { Code, Database, Palette, LineChart, Globe, Layout , Microscope} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={32} className="text-highlight" />,
      skills: ["C/C++", "JavaScript", "TypeScript" , "Java", "Python"]
    },
    {
      title: "Web Development",
      icon: <Globe size={32} className="text-highlight" />,
      skills: ["HTML/CSS", "Javascript", "Typescript", "React", "Node", "Express", "Tailwind CSS", "Bootstrap","ShadCN","FastAPI","Django"]
    },
    {
      title: "Databases",
      icon: <Database size={32} className="text-highlight" />,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"]
    },
    {
      title: "Research",
      icon: <Microscope size={32} className="text-highlight" />,
      skills: ["Theoretical Computer Science","Cryptography", "Computational Complexity" , "Cloud Scheduling Algorithms", "Bio-inspired Algorithms", "Artficial Intelligence"]
    },
    {
      title: "Data Science",  
      icon: <LineChart size={32} className="text-highlight" />,
      skills: ["Machine Learning", "Data Analysis", "Python Libraries", "Visualization"]
    },
    {
      title: "Others",
      icon: <Layout size={32} className="text-highlight" />,
      skills: ["Git", "Github", "AWS", "CI/CD", "Agile"]
    }
  ];

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">My Skills</h2>
      
      <p className="text-gray-700 max-w-3xl mb-12">
        Through academic projects, internships, and self-learning, I've developed proficiency in various technologies and frameworks that enable me to build effective solutions.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <Card key={index} className="skill-card overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gray-100">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-3">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
