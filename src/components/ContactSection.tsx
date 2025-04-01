import { 
  Mail, 
  Linkedin, 
  Github, 
  Twitter, 
  Instagram,
  Send
} from 'lucide-react';

const ContactSection = () => {
  const socialLinks = [
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/sikindharjaladi/", label: "LinkedIn" },
    { icon: <Github size={20} />, url: "https://github.com/Sikindhar", label: "GitHub" }
  ];

  return (
    <section id="contact" className="section-container ">
      <h2 className="section-title">Let's Connect</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-navy">Get in Touch</h3>
          <p className="text-gray-700 mb-8">
            I'm always open to new opportunities, collaborations, or just a friendly chat. If the chat matter to you , It matters to me too.
          </p>
          
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Mail className="text-highlight mr-3" size={24} />
              <span className="text-gray-800">sikindharjaladi@gmail.com</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-navy">Connect with me on social media</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:border-highlight hover:bg-highlight/5 transition-colors"
                >
                  <span className="text-highlight">{link.icon}</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ContactSection;
