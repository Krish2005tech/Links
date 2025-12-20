import { useState } from "react";
import { Github, Linkedin, Mail, FileText, Moon, Sun,FileBraces, Globe,KeyRound, BookOpen, MessageCircle, Calendar, Brain, File, Flame } from "lucide-react";

function LinkCard({ icon: Icon, iconType = "lucide", title, description, url, isDark }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block rounded-xl p-4 md:p-5 shadow-sm hover:shadow-md transition-all duration-200 border group ${
        isDark 
          ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
          : 'bg-white border-gray-100 hover:border-blue-200'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center transition-colors ${
          isDark
            ? 'bg-gradient-to-br from-gray-700 to-gray-600 group-hover:from-blue-900 group-hover:to-indigo-900'
            : 'bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100'
        }`}>
          {iconType === "lucide" ? (
            <Icon className={`w-6 h-6 md:w-7 md:h-7 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
          ) : iconType === "svg" ? (
            <img 
              src={Icon} 
              alt="" 
              className={`w-6 h-6 md:w-7 md:h-7`}
              style={{
                filter: isDark 
                  ? 'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(2466%) hue-rotate(188deg) brightness(96%) contrast(91%)'
                  : 'brightness(0) saturate(100%) invert(32%) sepia(95%) saturate(1686%) hue-rotate(199deg) brightness(91%) contrast(101%)'
              }}
            />
          ) : (
            <img
              src={Icon}
              alt={title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className={`font-semibold text-base md:text-lg mb-1 transition-colors ${
            isDark 
              ? 'text-gray-100 group-hover:text-blue-400' 
              : 'text-gray-900 group-hover:text-blue-600'
          }`}>
            {title}
          </h3>
          <p className={`text-sm md:text-base line-clamp-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
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
      icon: "/assets/github.svg",
      iconType: "svg",
      title: "GitHub",
      description: "Open source projects, experiments, and contributions",
      url: "https://github.com/krish2005tech"
    },
    {
      id: 2,
      icon: "/assets/linkedin.svg",
      iconType: "svg",
      title: "LinkedIn",
      description: "Professional profile and connections",
      url: "https://linkedin.com/in/krish-teckchandani"
    },
    {
      id: 3,
      icon: Mail,
      title: "Email",
      description: "Get in touch with me directly",
      url: "mailto:Krish_Teckchandani@krish2005.tech"
    },
    {
      id: 4,
      icon: FileText,
      title: "Resume",
      description: "My web-based resume and experience",
      url: "https://resume.krish2005.tech"
    },
    {
      id: 5,
      icon: BookOpen,
      title: "Blog",
      description: "My personal digital journal and thoughts",
      url: "https://blog.krish2005.tech"
    },
    {
      id: 6,
      icon: MessageCircle,
      title: "Chat Room",
      description: "A simple real-time chatroom application",
      url: "https://chat.krish2005.tech"
    },
    {
      id: 9,
      icon: File,
      title: "PDF Tools",
      description: "Secure, client-side PDF tools with no uploads",
      url: "https://pdf.krish2005.tech"
    },
    {
      id: 7,
      icon: Calendar,
      title: "Timetable Generator",
      description: "Generate timetables from a course list",
      url: "https://timetable.krish2005.tech"
    },
    {
      id: 11,
      icon: KeyRound,
      title: "JWT Decoder/Encoder",
      description: "Decode and encode JSON Web Tokens easily",
      url: "https://jwt.krish2005.tech"
    },
    {
  id: 12,
  icon: FileBraces,
  title: "API Tester",
  description: "Simple HTTP APIs request tool",
  url: "https://apitester.krish2005.tech"
},
    {
      id: 8,
      icon: Brain,
      title: "Neural Car Simulation",
      description: "A JavaScript neural network that drives a car",
      url: "https://car.krish2005.tech"
    },
    {
      id: 10,
      icon: "/assets/ignus.png",
      iconType: "img",
      title: "IGNUS 25 Website",
      description: "Official website built for IGNUS 2025 fest",
      url: "https://ignus-25.vercel.app/"
    },
  ];

  return (
    <div className={`min-h-screen py-8 md:py-12 lg:py-16 px-4 md:px-6 transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-gray-50 to-blue-50'
    }`}>
      <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
        {/* Theme Toggle Button */}
        <div className="flex justify-end mb-6 md:mb-8">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-3 md:p-3.5 rounded-lg transition-all duration-200 ${
              isDark
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            } shadow-md`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5 md:w-6 md:h-6" /> : <Moon className="w-5 h-5 md:w-6 md:h-6" />}
          </button>
        </div>

        {/* Profile Section */}
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <img
            src="/me.jpg"
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-2xl mx-auto mb-4 md:mb-5 lg:mb-6 shadow-lg object-cover border-4 border-white"
          />
          <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            Krish Teckchandani
          </h1>
          <p className={`text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Hi, I'm <b>Krish</b>: a developer who loves exploring new tech, building small projects, breaking things, and learning along the way.
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-5">
          {links.map((link) => (
            <LinkCard
              key={link.id}
              icon={link.icon}
              title={link.title}
              iconType={link.iconType}
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