import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Madhu Jha</h3>
            <p className="text-slate-300 mb-6">
              Manager, Engineer, Mentor - Helping teams and companies grow through quality and collaboration
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://www.linkedin.com/in/madhu-jha-510aa1111/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-full hover:bg-orange-500 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-full hover:bg-orange-500 transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:madhujha@example.com"
                className="p-3 bg-slate-800 rounded-full hover:bg-orange-500 transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-slate-700">
            <p className="flex items-center justify-center text-slate-400">
              Made with <Heart size={16} className="mx-2 text-orange-500" /> by Madhu Jha
              <span className="mx-2">•</span>
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;