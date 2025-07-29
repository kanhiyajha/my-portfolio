type Project = {
  title: string;
  desc: string;
};

const projects: Project[] = [
  {
    title: "YatraMithila",
    desc: "Tour & travel app for Bihar/Mithila tourism",
  },
  {
    title: "Portfolio App",
    desc: "React Native personal branding app",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-6 bg-gray-100" id="projects">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((p, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
