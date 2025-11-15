import React, { useState } from 'react';
import profileImage from '/assets/images/profile.jpg';

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleDownloadResume = () => {
    // Replace with your actual resume URL
    const resumeUrl = '/path-to-your-resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center animate-slideDown">
      <div className="bg-black rounded-full px-4 py-2 shadow-2xl border border-gray-800 backdrop-blur-sm hover:shadow-3xl transition-all duration-300 hover:scale-105">
        <div className="flex items-center gap-4">
          {/* Left side - Profile Image */}
          <button 
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-white hover:border-gray-300 transition-all duration-300 flex-shrink-0 bg-gray-700 p-0 hover:scale-110 hover:rotate-12 active:scale-95"
            aria-label="Home"
            style={{ minWidth: '40px', minHeight: '40px' }}
          >
            <img 
              src={profileImage}
              alt="Profile" 
              className="w-full h-full object-cover block transition-transform duration-300 hover:scale-110"
              style={{ width: '40px', height: '40px' }}
              onError={(e) => {
                console.error('Image failed to load:', profileImage);
                e.currentTarget.style.display = 'none';
              }}
            />
          </button>
          
          {/* Middle - Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {['About', 'Contact', 'Experience', 'Projects', 'Skills'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-gray-300 text-sm font-medium transition-all duration-300 whitespace-nowrap relative group"
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  transform: hoveredItem === item ? 'translateY(-2px) scale(1.1)' : 'translateY(0) scale(1)',
                }}
              >
                {item}
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white rounded-full transition-all duration-300 group-hover:w-full"
                />
              </a>
            ))}
          </div>
          
          {/* Right side - Download Resume Button */}
          <button 
            onClick={handleDownloadResume}
            className="bg-white text-black hover:bg-gray-100 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 flex-shrink-0 hover:scale-110 hover:shadow-lg active:scale-95"
          >
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Resume
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white flex-shrink-0 hover:scale-110 active:scale-95 transition-transform duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;