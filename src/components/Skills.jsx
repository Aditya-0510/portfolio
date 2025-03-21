import React from "react";
import { Wrench, Code, Server } from "lucide-react"; // Use valid icons

const Skills = () => {
    const skillCategories = [
        {
          category: "Frontend",
          icon: <Code size={24} />,
          skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Responsive Design"]
        },
        {
          category: "Backend",
          icon: <Server size={24} />,
          skills: ["Node.js", "Express", "RESTful APIs",]
        },
        {
          category: "Tools",
          icon: <Wrench size={24} />,
          skills: ["Git", "GitHub", "VS Code", "Figma"]
        }
      ];
    
      return (
        <section id="skills" className="w-full py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {skillCategories.map(category => (
                <div key={category.category} className="border border-gray-700 rounded-lg p-6 bg-gray-800 shadow-lg">
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h3 className="text-xl font-bold ml-2">{category.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map(skill => (
                      <li key={skill} className="flex items-center">
                        <span className="mr-2">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default Skills;
