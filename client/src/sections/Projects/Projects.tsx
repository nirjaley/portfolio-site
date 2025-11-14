const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A personal portfolio built with React, Vite, and Tailwind CSS.",
    },
    {
      title: "Task Manager App",
      desc: "Full-stack app using Node.js, Express, and MongoDB.",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-10">Projects</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow"
            >
              <h2 className="text-xl font-bold">{p.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{p.desc}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
                View More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
