
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="section-container bg-gray-50">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-in">
          <div className="relative">
           
            <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] lg:h-[500px] bg-gray-300 flex items-center justify-center">
              <div className="text-gray-600"><img src="/Pi7_Passport_Photo.jpeg" alt="Sikindhar Photo" /></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-highlight animate-pulse"></div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6 text-navy">
            Final Year CS <span className="text-highlight">@SRM University , AP</span>
          </h3>
          
          <p className="text-gray-700 mb-6">
            I am Computer Science Engineering student with a strong foundation in Problem-solving , Data structures , Algorithms and Software development. I enjoy researching new solutions to problems and like building iterative soltions to them.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="card-hover-effect">
              <CardContent className="p-6">
                <h4 className="font-bold text-navy mb-2">Education</h4>
                <p className="text-gray-600">B.Tech in Computer Science Engineering with specialization in Artificial Intelligence and Machine Learning (2021 - 2025)</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover-effect">
              <CardContent className="p-6">
                <h4 className="font-bold text-navy mb-2">Amaravati</h4>
                <p className="text-gray-600">Andhra Pradesh, India</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700">
              I got my real enthusiasm in Computer science after the course <strong>Theory of Computation and Turing Machines. </strong> I had a fantastic researching experience on the concepts like <strong>Cryptography and Information security, Theory of Computation, Computational Complexity , Algorithms, Soft Computing and Artificial Intelligence </strong>. My journey in development accelerated when I actually had a clear distinction between Research and Engineering . Since then, I've been continuously learning and exploring new technologies to expand my skills in development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
