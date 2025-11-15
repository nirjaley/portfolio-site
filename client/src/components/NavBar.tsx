import React from 'react';
import profileImage from '/assets/images/profile.jpg';

const Navbar = () => {
  const handleDownloadResume = () => {
    // Replace with your actual resume URL
    const resumeUrl = '/path-to-your-resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-auto z-50">
      <div className="bg-black rounded-full px-4 py-2 shadow-2xl border border-gray-800">
        <div className="flex items-center gap-4">
          {/* Left side - Profile Image */}
          <button 
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-white hover:border-gray-300 transition-all duration-200 flex-shrink-0 bg-gray-700 p-0"
            aria-label="Home"
            style={{ minWidth: '40px', minHeight: '40px' }}
          >
            <img 
              src={profileImage}
              alt="Profile" 
              className="w-full h-full object-cover block"
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
                className="text-white hover:text-gray-300 text-sm font-medium transition-all duration-200 whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Right side - Download Resume Button */}
          <button 
            onClick={handleDownloadResume}
            className="bg-white text-black hover:bg-gray-100 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 flex-shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Resume
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white flex-shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;