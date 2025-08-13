import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      period: "2017 - Present",
      title: "Quality Assurance and Control",
      company: "Various Organizations",
      location: "Nepal and Remote",
      description: "Progressed from QA Engineer to QA Team Lead, leading high-performing teams in delivering quality software across web, mobile, and API-based applications. Developed and implemented effective QA strategies, test plans, and process improvements while ensuring alignment with business goals.", highlights: [
        "Led QA teams, mentoring interns and junior engineers",
        "Proficient in test management and CI/CD tools including Jira, Zoho, Zephyr, TestRail, Trello, Jenkins, GitHub, and Bitbucket.",
        "Implemented manual and automation testing using standard manual testing process, Selenium, JMeter, Postman, Rest Assured, and BrowserStack",
        "Integrated QA processes into CI/CD pipelines, enhancing delivery speed and quality",
        "Performed functional, non-functional, performance, security, regression, and UAT testing",
        "Strong programming foundation in Java, JavaScript, Python, and SQL for automation scripting and data validation.",
        "Demonstrated proficiency in the complete STLC, covering functional and non-functional testing, performance testing, security testing, cross-browser testing, API testing, integration testing, UAT, QAT, regression testing, smoke testing, and detailed test documentation.",
        "Experienced in Agile (Scrum & Kanban) methodologies, SDLC, and working with JSON, wireframe design, and ER diagrams, with knowledge of HIPAA compliance and US healthcare standards.",
        "Collaborated with cross-functional teams across HealthTech, FinTech, GovTech, E-commerce, and EdTech domains",
        "Fostered a quality-focused culture and drove innovation in testing practices",
        "Domain expertise spans EHR, health monitoring apps, medical diagnostics, healthcare data analytics, HealthTech, EdTech, FinTech, GovTech, and E-commerce, ensuring quality-focused delivery across diverse industries."
      ]
      
    },
    // {
    //   period: "2001 - 2004",
    //   title: "System Administrator",
    //   company: "IT Infrastructure",
    //   location: "Nepal",
    //   description: "Started career managing networks and Active Directory systems, building foundational IT infrastructure knowledge.",
    //   highlights: [
    //     "Managed enterprise network infrastructure",
    //     "Administered Active Directory systems",
    //     "Developed system administration expertise",
    //     "Built strong foundation in IT operations"
    //   ]
    // }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Experience
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600">
              6+ years of progressive growth in technology and leadership
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-300 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:ml-20">
                {/* Timeline Dot */}
                <div className="absolute -left-20 top-6 w-4 h-4 bg-orange-500 rounded-full hidden md:block"></div>

                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">
                        {exp.title}
                      </h3>
                      <div className="text-lg text-orange-600 font-semibold">
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col text-slate-500 text-sm mt-2 md:mt-0">
                      <div className="flex items-center mb-1">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start">
                        <ChevronRight size={16} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;