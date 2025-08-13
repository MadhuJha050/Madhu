import React from 'react';
import { Code, Users, Settings, Lightbulb, Database, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Skills",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "C#", level: 85 },
        { name: "PHP", level: 80 },
        { name: "Web Development", level: 95 },
        { name: "System Administration", level: 88 }
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership & Management",
      skills: [
        { name: "Team Leadership", level: 95 },
        { name: "Mentoring", level: 98 },
        { name: "Project Management", level: 85 },
        { name: "Agile Methodologies", level: 80 },
        { name: "Strategic Planning", level: 85 }
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Infrastructure & Systems",
      skills: [
        { name: "Network Management", level: 85 },
        { name: "Active Directory", level: 88 },
        { name: "System Architecture", level: 80 },
        { name: "DevOps", level: 75 },
        { name: "Quality Assurance", level: 90 }
      ]
    }
  ];

  const coreCompetencies = [
    { icon: <Lightbulb className="w-6 h-6" />, text: "Andragogy & Adult Learning" },
    { icon: <Users className="w-6 h-6" />, text: "Team Building & Culture" },
    { icon: <Database className="w-6 h-6" />, text: "Technical Architecture" },
    { icon: <Globe className="w-6 h-6" />, text: "Community Building" }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600">
              Technical proficiency combined with leadership excellence
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-orange-500 mb-6">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-6">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-700 font-medium">{skill.name}</span>
                        <span className="text-slate-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core Competencies */}
          <div className="bg-slate-800 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">
              Core Competencies
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreCompetencies.map((competency, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="text-orange-400 mb-3 group-hover:scale-110 transition-transform duration-200">
                    {competency.icon}
                  </div>
                  <span className="text-white font-medium">
                    {competency.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;