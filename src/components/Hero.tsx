import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import profile from "../Images/madhu.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-6xl font-bold">
                <img
                src={profile}
                alt="Profile"
                className="rounded-full w-full max-w-md mx-auto shadow-2xl transform transition-transform duration-800 md:group-hover:grayscale"
              />
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            MADHU JHA
          </h1>
          
          <div className="text-xl md:text-2xl text-orange-400 font-semibold mb-4 tracking-wide">
            Lead QA Engineer, Mentor
          </div>
          
          <div className="text-lg text-slate-300 mb-2">
            6+ Years of Experience in IT and Software Industry
          </div>

          <div className="flex items-center justify-center text-slate-400 mb-8">
            <MapPin size={18} className="mr-2" />
            <span>Nepal</span>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Specializing in working with people, engineers, communities, and companies. 
            Deep expertise in end-to-end software quality strategy, test automation, and
            process optimization. Proven track record of leading high-impact QA initiatives,
            mentoring cross-functional teams, and driving quality culture to deliver robust, scalable,
            and customer-focused products.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={scrollToContact}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Learn More
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/madhhu-jha-510aa1111/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/MadhuJha050"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:madhujhaqa@gmail.com"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default Hero;