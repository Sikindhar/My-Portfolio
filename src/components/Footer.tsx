
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-navy text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">
              Sikindhar<span className="text-highlight">.</span>
            </h3>
            <p className="text-gray-400 mt-2">
              Building digital experiences with passion and precision.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="bg-highlight/20 hover:bg-highlight/30 text-white p-3 rounded-full transition-colors mb-4"
              aria-label="Scroll to top"
            >
              <ChevronUp size={20} />
            </button>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
