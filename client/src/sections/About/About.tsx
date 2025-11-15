const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">About Me</h1>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          I’m a UI/UX Designer and Frontend Developer passionate about building modern, clean,
          and efficient digital products. I use Figma for design and React, NodeJS,
          TypeScript, and TailwindCSS for development.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {["React", "TypeScript", "NodeJS", "TailwindCSS", "MongoDB"].map(
            (skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300 text-sm"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
