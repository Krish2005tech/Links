import { useState } from "react";
import { Github, Linkedin, Globe, Code, Moon, Sun } from "lucide-react";

function LinkCard({ icon: Icon, title, description, url, isDark }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 border group ${
        isDark 
          ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
          : 'bg-white border-gray-100 hover:border-blue-200'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
          isDark
            ? 'bg-gradient-to-br from-gray-700 to-gray-600 group-hover:from-blue-900 group-hover:to-indigo-900'
            : 'bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100'
        }`}>
          <Icon className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className={`font-semibold text-lg mb-1 transition-colors ${
            isDark 
              ? 'text-gray-100 group-hover:text-blue-400' 
              : 'text-gray-900 group-hover:text-blue-600'
          }`}>
            {title}
          </h3>
          <p className={`text-sm line-clamp-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {description}
          </p>
        </div>
        
        <div className={`flex-shrink-0 transition-colors ${
          isDark 
            ? 'text-gray-500 group-hover:text-blue-400' 
            : 'text-gray-400 group-hover:text-blue-600'
        }`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(true);

  const links = [
    {
      id: 1,
      icon: Github,
      title: "GitHub",
      description: "Check out my open source projects and contributions",
      url: "https://github.com/krish2005tech"
    },
    {
      id: 2,
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect with me professionally",
      url: "https://linkedin.com/in/krish-teckchandani"
    },
    {
      id: 3,
      icon: Globe,
      title: "Portfolio Website",
      description: "View my complete portfolio and case studies",
      url: "https://yourwebsite.com"
    },
    {
      id: 4,
      icon: Code,
      title: "Project: Cool App",
      description: "A full-stack application built with React and Node.js",
      url: "https://your-project.com"
    }
  ];

  return (
    <div className={`min-h-screen py-12 px-4 transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-gray-50 to-blue-50'
    }`}>
      <div className="max-w-2xl mx-auto">
        {/* Theme Toggle Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-3 rounded-lg transition-all duration-200 ${
              isDark
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            } shadow-md`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Profile Section */}
        <div className="text-center mb-8">
          <img
            src="/me.jpg"
            alt="Profile"
            className="w-42 h-42 rounded-2xl mx-auto mb-4 shadow-lg object-cover border-4 border-white"
          />
          <h1 className={`text-3xl font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            Your Name
          </h1>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Short bio / tagline goes here.
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-3">
          {links.map((link) => (
            <LinkCard
              key={link.id}
              icon={link.icon}
              title={link.title}
              description={link.description}
              url={link.url}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </div>
  );
}