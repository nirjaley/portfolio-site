const Experience = () => {
  const items = [
    {
      role: "Frontend Developer",
      company: "Company Name",
      time: "2022 - Present",
      details: "Building interactive UIs with React and TypeScript.",
    },
    {
      role: "Backend Developer",
      company: "Startup Inc.",
      time: "2020 - 2022",
      details: "Developed APIs using Node.js and Express.",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-10">Experience</h1>

        <div className="flex flex-col gap-6">
          {items.map((exp) => (
            <div
              key={exp.role}
              className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 shadow"
            >
              <h2 className="text-xl font-semibold">{exp.role}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {exp.company} • {exp.time}
              </p>
              <p className="text-gray-700 dark:text-gray-300">{exp.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
