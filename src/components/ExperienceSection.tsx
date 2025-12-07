import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [

    {
      role: "Software Engineer ",
      company: "ShareFile Product",
      period: "December 2025 - Present",
      location: "Progress Software, Embassy Golf Links Business Park, Bengaluru",
      description:
        "Currently working in DocComponent team which is core team of storage and sharefile.",
      skills: ["C#", "ASP.NET Core", "React", "AntD"],
    },
    {
      role: "Software Engineer Intern",
      company: "ShareFile Product",
      period: "July 2025 - December 2025",
      location: "Progress Software, Embassy Golf Links Business Park, Bengaluru",
      description:
       "Worked on the File Browser plugin and Storage plugin pilet as part of the DocComponent team. Developed key UX enhancements in Storage plugin pilet micro-frontend including Thumbnails, Unified View caching, Renaming, Delete flows and others using React, Ant Design and Piral framework. Unified the GetResources API logic into a existing stable version using C#, ASP.NET Core, and microservices. Enhanced storage operations determinism through optimized DB read/write patterns. Improved overall reliability through feature-flag cleanup, targeted test coverage, and adherence to strong engineering and SOLID principles. Contributed to an AI-based Incident Analysis POC project. An AI powered system that automates the initial analysis of production outages and incidents at Sharefile. Contributed to the LaunchDarkly AI agent connector and presented the work at ShareFile Engage (November) alongside senior engineering leadership.",
      skills: ["C#", "ASP.NET Core", "React", "AntD","Research", "POC crafting"],
    },
    {
      role: "Research Intern",
      company: "Task scheduling algorithms in cloud environment",
      period: "October 2023 - December 2023",
      location: "SRM University, Amaravati",
      description:
        "Evaluated ACO and GA algorithms for cloud tasks load balancing, used simulations to show ACO’s 40% superior task allocation efficiency under Prof. Dr. Chinmay Kumar Swain’s mentorship. Investigated computational complexities in real-time algorithms realizing the importance of better heuristics.",
      skills: ["ACO", "GA Algorithms", "Python", "Heuristics", "Computational Complexity"],
    },
    {
      role: "Summer Research Intern",
      company: "Cryptography",
      period: "June 2023 - August 2023",
      location: "SRM University, Amaravati",
      description:
        "Researched about standard NIST cryptography techniques DES, 3DES, AES, ECC, and information exchange protocols under Prof. Dr. Manikandan VM with the foundation of Claude Shannon’s theory of information security. Explored the theory behind blockchain technology. Also studied reversible data hiding mechanisms with safe information retrieval for medical reports using stack data structure published by Dr. Manikandan.",
      skills: ["DES", "AES", "Cryptography", "Elliptic Curve Cryptography", "Diffie-Hellman Key Exchange", "Blockchain"],
    },
  ];

  return (
    <section id="experience" className="section-container bg-gray-50">
      <h2 className="section-title">Experience</h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="md:flex items-start">

            <div className="md:w-40 flex-shrink-0 text-sm text-gray-500 md:mr-12 mb-4 md:mb-0">
              <div className="flex md:justify-end items-center">
                <Calendar size={16} className="md:order-last md:ml-1 mr-1 md:mr-0" />
                <span className="block text-center md:text-right">{exp.period}</span>
              </div>
            </div>

            <Card className="flex-grow card-hover-effect">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-navy">{exp.role}</h3>
                  <div className="flex items-center text-gray-700 mt-1">
                    <Briefcase size={16} className="mr-1" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mt-1">
                    <MapPin size={16} className="mr-1" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-highlight/10 text-highlight px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;