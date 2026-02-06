import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

// Smooth scroll to a section by ID
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

interface HeroProps {
  theme: 'light' | 'dark';
}

const Hero: React.FC<HeroProps> = ({ theme }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = 'Nirjal';
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 2000;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText === '') {
      timeout = setTimeout(() => setIsDeleting(false), 500);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <section id="hero" className={`relative min-h-screen w-full flex flex-col justify-center items-center text-center transition-colors duration-300 overflow-hidden pb-20 ${theme === 'light' ? 'bg-white' : 'bg-gray-900'
      }`}>
      {/* Animated Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float-slow ${theme === 'light' ? 'bg-blue-400' : 'bg-blue-600'
          }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float-slow-delay ${theme === 'light' ? 'bg-purple-400' : 'bg-purple-600'
          }`}></div>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 animate-pulse-slow ${theme === 'light' ? 'bg-pink-400' : 'bg-pink-600'
          }`}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 -mt-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left">

            {/* Main Heading with Typing Effect */}
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight ${theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
              Hi, I'm{' '}
              <span className="relative inline-block">
                {displayText}
                <span className="animate-blink">|</span>
              </span>
              {' '}
              <span className="inline-block animate-wave">👋</span>
            </h1>

            {/* Subtitle with typing effect style */}
            <p className={`text-lg md:text-xl mb-8 animate-fade-in-delay max-w-2xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'
              } lg:mx-0 mx-auto`}>
              Crafting beautiful digital experiences as a{' '}
              <span className={`font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>
                Full Stack Developer
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up">
              <button
                onClick={() => scrollToSection('projects')}
                className={`group relative px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden ${theme === 'light'
                  ? 'bg-gray-900 text-white hover:bg-gray-800'
                  : 'bg-white text-gray-900 hover:bg-gray-100'
                  }`}
                aria-label="View my work"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className={`absolute inset-0 -z-10 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity ${theme === 'light'
                  ? 'from-blue-600 to-purple-600'
                  : 'from-blue-400 to-purple-400'
                  }`}></div>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className={`px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95 border backdrop-blur-sm ${theme === 'light'
                  ? 'border-gray-300 text-gray-900 hover:bg-gray-100'
                  : 'border-gray-600 text-white hover:bg-gray-800'
                  }`}
                aria-label="Get in touch"
              >
                <span className="flex items-center gap-2">
                  Get in Touch
                  <Mail className="w-5 h-5" />
                </span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start mt-12 animate-fade-in-up-delay">
              <a
                href="https://github.com/nirjaley"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 border ${theme === 'light'
                  ? 'border-gray-300 text-gray-700 hover:bg-gray-100'
                  : 'border-gray-700 text-gray-300 hover:bg-gray-800'
                  }`}
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nirjal-byan/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 border ${theme === 'light'
                  ? 'border-gray-300 text-gray-700 hover:bg-gray-100'
                  : 'border-gray-700 text-gray-300 hover:bg-gray-800'
                  }`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/nirjal.13"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 border ${theme === 'light'
                  ? 'border-gray-300 text-gray-700 hover:bg-gray-100'
                  : 'border-gray-700 text-gray-300 hover:bg-gray-800'
                  }`}
              >
                <Instagram className="w-5 h-5" />
              </a>

            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex-shrink-0 animate-fade-in-right">
            <div className="relative group">
              {/* Gradient Border Effect */}
              <div className={`absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-75 group-hover:opacity-100 blur-lg transition-all duration-300 animate-pulse-slow`}></div>

              {/* Image Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-900">
                <img
                  src="/assets/images/profile.jpg"
                  alt="Nirjal"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback gradient if image doesn't load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                  }}
                />
              </div>

              {/* Floating Elements */}
              <div className={`absolute -top-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center backdrop-blur-sm border animate-float ${theme === 'light' ? 'bg-white/80 border-gray-200' : 'bg-gray-800/80 border-gray-700'
                }`}>
                <span className="text-3xl">🎵</span>
              </div>
              <div className={`absolute -bottom-4 -left-4 w-20 h-20 rounded-full flex items-center justify-center backdrop-blur-sm border animate-float-delay ${theme === 'light' ? 'bg-white/80 border-gray-200' : 'bg-gray-800/80 border-gray-700'
                }`}>
                <span className="text-3xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className={`w-6 h-10 rounded-full border-2 flex items-start justify-center p-2 ${theme === 'light' ? 'border-gray-400' : 'border-gray-600'
          }`}>
          <div className={`w-1.5 h-1.5 rounded-full animate-scroll ${theme === 'light' ? 'bg-gray-600' : 'bg-gray-400'
            }`}></div>
        </div>
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(50px, 50px) scale(1.1);
          }
        }

        @keyframes float-slow-delay {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-50px, -50px) scale(1.1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-delay {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-delay {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up-delay {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          60% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes wave {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(20deg);
          }
          75% {
            transform: rotate(-15deg);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes blink {
          0%, 50%, 100% {
            opacity: 1;
          }
          25%, 75% {
            opacity: 0;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .animate-float-slow-delay {
          animation: float-slow-delay 25s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float-delay 3.5s ease-in-out infinite;
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out 0.2s both;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 1.5s ease-out both;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.6s both;
        }

        .animate-fade-in-up-delay {
          animation: fade-in-up-delay 1.2s ease-out both;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out 0.4s both;
        }

        .animate-wave {
          animation: wave 2s ease-in-out infinite;
          display: inline-block;
          transform-origin: 70% 70%;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;