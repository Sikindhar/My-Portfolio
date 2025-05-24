import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume', link: 'https://drive.google.com/file/d/1Cp-HdTpoNXt8TPFbxfEHMe7LRkXQ1qfD/view?usp=sharing' },
    { id: 'contact', label: "Let's Connect" } 
  ];

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    const sectionElements = sections
      .filter((section) => !section.link) 
      .map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }))
      .filter((item) => item.element !== null);

    for (let i = sectionElements.length - 1; i >= 0; i--) {
      const { id, element } = sectionElements[i];
      if (!element) continue;

      const rect = element.getBoundingClientRect();
      if (rect.top <= 100) {
        setActiveSection(id);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className={`flex-shrink-0 font-bold text-xl ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            Sikindhar<span className="text-highlight">.</span>
          </div>

          <nav className="hidden md:flex space-x-6">
            {sections.map((section) =>
              section.link ? (
                <a
                  key={section.id}
                  href={section.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`nav-link ${
                    isScrolled
                      ? 'text-gray-900 hover:text-highlight'
                      : 'text-white hover:text-highlight'
                  }`}
                >
                  {section.label}
                </a>
              ) : (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`nav-link ${
                    isScrolled
                      ? 'text-gray-900 hover:text-highlight'
                      : 'text-white hover:text-highlight'
                  } ${activeSection === section.id ? 'active-nav-link' : ''}`}
                >
                  {section.label}
                </a>
              )
            )}
          </nav>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`${
                isScrolled ? 'text-gray-900' : 'text-white'
              } hover:text-highlight focus:outline-none`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {sections.map((section) =>
              section.link ? (
                <a
                  key={section.id}
                  href={section.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-50"
                >
                  {section.label}
                </a>
              ) : (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md ${
                    activeSection === section.id
                      ? 'bg-highlight/10 text-highlight'
                      : 'text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  {section.label}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;