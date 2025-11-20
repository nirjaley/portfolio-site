import React from 'react';

interface FooterProps {
  theme: 'light' | 'dark';
}

const Footer: React.FC<FooterProps> = ({ theme = 'light' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-6 transition-colors duration-300 ${
      theme === 'light' ? 'bg-gray-50' : 'bg-gray-900/50'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center ${
          theme === 'light' ? 'text-gray-600' : 'text-gray-400'
        }`}>
          <p>© {currentYear} Nirjal Byanjankar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;