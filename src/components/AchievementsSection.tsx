import { Award, Trophy, Medal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Smart India Hackathon 2024 Winner",
      image: "/public/DSC07767.JPG",
      date: "2024",
      description: "First place in Smart India Hackathon 2024, developed a web framework for android security by NCIIPC out of 60,000+ participants and won a cash prize of INR 1,00,000.",
      icon: <Trophy size={24} className="text-yellow-500" />
    },
    {
      title: "9Hacks Hackathon Winner",
      image: "public/DOC-20230225-WA0013..jpg", 
      date: "2023",
      description: " Winner at 9Hacks, a University Level Hackathon for ideating and soft prototyping university-related problems.",
      icon: <Medal size={24} className="text-yellow-500" />
    },
    {
      title: "Pitch and Win",
      image: "/public/image1.png", 
      date: "2022",
      description: "Bagged 1st place in Pitch and Win competition and won INR 10,000 conducted by E-Cell, SRM University. Pitched about an innovative AgriTech e-commerce Platform.",
      icon: <Trophy size={24} className="text-yellow-500" />
    },
    {
      title: "State Representative at National Youth Parliament Festival 2022",
      image: "public/IMG_0015-1.JPG", 
      date: "2022",
      description: " Represented Andhra Pradesh in National Youth Parliament Festival 2022, Parliament Central Hall, New Delhi. Spoke about Patriotism and Nation Building. Appreciated by Union Ministers and Members of Parliament.",
      icon: <Award size={24} className="text-yellow-500" />
    }
  
  ];

  return (
    <section id="achievements" className="section-container">
      <h2 className="section-title">Achievements</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((achievement, index) => (
          <Card key={index} className="overflow-hidden card-hover-effect">
            <div className="h-2 bg-gradient-to-r from-highlight to-highlight-secondary"></div>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-yellow-100">
                  {achievement.icon}
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-navy">{achievement.title}</h3>
                    <span className="text-sm text-gray-500">{achievement.date}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{achievement.description}</p>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="object-cover w-full h-48"
                    />
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

export default AchievementsSection;