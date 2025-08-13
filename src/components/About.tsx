import React from 'react';
import { Users, TrendingUp, Target, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "People-Focused Leadership",
      description: "6+ years of experience leading teams and fostering collaborative environments"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Progression",
      description: "From system administrator to web development expert, continuously evolving with technology"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mentorship Excellence",
      description: "Passion for mentoring developers and engineering managers, helping teams reach their potential"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Quality Advocate",
      description: "Strong believer in quality work and helping companies achieve sustainable success"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Story */}
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                I began my career as a system administrator in 2001, managing networks and 
                Active Directory. In 2004, I transitioned to web development, gaining 
                experience in JavaScript, C#, and PHP, and started blogging on web-dev topics.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                In 2007, I began leading teams. My passion lies in andragogy and mentorship. I 
                have mentored over 40 developers and 25 engineering managers throughout my career.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                I am a quality enthusiast and believe that individuals should take pride in their 
                work and companies should aim to produce quality products. I specialize in working 
                with people, engineers, communities, and companies to facilitate better collaboration 
                and growth.
              </p>

              <div className="pt-6">
                <a
                  href="https://www.linkedin.com/in/madhu-jha-510aa1111/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold transition-colors duration-200"
                >
                  View LinkedIn Profile →
                </a>
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-orange-500 mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;