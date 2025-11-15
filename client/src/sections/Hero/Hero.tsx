interface HeroProps {
  theme: 'light' | 'dark';
}

const Hero: React.FC<HeroProps> = ({ theme }) => {
  return (
    <section className={`min-h-screen w-full flex flex-col justify-center items-center text-center transition-colors duration-300 ${
      theme === 'light' ? 'bg-white' : 'bg-gray-900'
    }`}>
      <div className="w-full max-w-4xl px-4">
        <h1 className={`text-5xl font-bold ${
          theme === 'light' ? 'text-gray-900' : 'text-white'
        }`}>
          Hi, I'm Nirjal 👋
        </h1>
        <p className={`text-xl mt-4 ${
          theme === 'light' ? 'text-gray-700' : 'text-gray-300'
        }`}>
          UI/UX Designer & Frontend Developer
        </p>
        <button className={`mt-6 px-6 py-3 rounded-lg transition-colors ${
          theme === 'light' 
            ? 'bg-gray-900 text-white hover:bg-gray-700' 
            : 'bg-white text-gray-900 hover:bg-gray-100'
        }`}>
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;