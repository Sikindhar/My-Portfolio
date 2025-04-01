import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy to-navy-light text-white px-4"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-highlight/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-highlight-secondary/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="animate-fade-in text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight to-highlight-secondary">Sikindhar Jaladi</span>
        </h1>
        <div className="animate-fade-in delay-300 max-w-2xl mx-auto mb-10">
          <p className="text-lg text-gray-300">
            Passionate about technology and innovation. I build creative solutions with research and code.
          </p>
        </div>

        <p className="animate-fade-in delay-200 text-xl sm:text-3xl text-gray-300 mb-8">
        <Typewriter
            words={['Engineering is not tinkering.', 'Technology blooms only with human well-being at its heart.', 'Research explores, Engineering manifests; distinct yet harmonious paths.']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1000}
          />
        </p>
        
        <div className="animate-fade-in delay-400 flex flex-wrap justify-center gap-4">
          <Button 
            className="bg-highlight hover:bg-highlight-secondary transition-colors text-white px-6 py-2 rounded-lg"
            asChild
          >
            <a href="#contact">Contact Me</a>
          </Button>
          
          <Button 
            variant="outline"
            className="bg-transparent border border-white hover:bg-white hover:text-navy transition-colors px-6 py-2 rounded-lg"
            asChild
          >
            <a href="#projects">View My Work</a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white opacity-80 hover:opacity-100 transition-opacity">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
