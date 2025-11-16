import React from 'react';
import { GraduationCap } from 'lucide-react';

interface EducationProps {
  theme: 'light' | 'dark';
}

const Education: React.FC<EducationProps> = ({ theme }) => {
  const educationData = [
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "Tribhuvan University",
      year: "2020 - 2024",
      description: "Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems"
    },
    {
      degree: "High School (Science)",
      institution: "National School of Sciences",
      year: "2018 - 2020",
      description: "Major in Computer Science and Mathematics"
    }
  ];

  return (
    <section id="education" className={`py-24 transition-colors duration-300 ${
      theme === 'light' ? 'bg-gray-50' : 'bg-gray-800/50'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
            theme === 'light' 
              ? 'bg-blue-100 text-blue-600' 
              : 'bg-blue-900/30 text-blue-400'
          }`}>
            My Education
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            theme === 'light' ? 'text-gray-800' : 'text-white'
          }`}>
            Education
          </h2>
          <div className={`w-20 h-1 mx-auto rounded-full ${
            theme === 'light' ? 'bg-gray-800' : 'bg-white'
          }`}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div key={index} className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${
              theme === 'light'
                ? 'bg-white border-gray-200 hover:shadow-lg'
                : 'bg-gray-800/50 border-gray-700 hover:shadow-2xl'
            }`}>
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${
                  theme === 'light' ? 'bg-blue-100' : 'bg-blue-900/30'
                }`}>
                  <GraduationCap className={`w-6 h-6 ${
                    theme === 'light' ? 'text-blue-600' : 'text-blue-400'
                  }`} />
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-1 ${
                    theme === 'light' ? 'text-gray-800' : 'text-white'
                  }`}>
                    {edu.degree}
                  </h3>
                  <p className={`font-medium mb-1 ${
                    theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                  }`}>
                    {edu.institution}
                  </p>
                  <p className={`text-sm mb-2 ${
                    theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {edu.year}
                  </p>
                  <p className={`text-sm ${
                    theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
