const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center text-center bg-gray-900">
      <div className="w-full max-w-4xl px-4">
        <h1 className="text-5xl font-bold">Hi, I'm Nirjal 👋</h1>
        <p className="text-xl mt-4">Full Stack Developer</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
