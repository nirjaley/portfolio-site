const Skills = () => {
  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "TailwindCSS",
    "Express",
    "MongoDB",
    "Git",
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">Skills</h1>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
