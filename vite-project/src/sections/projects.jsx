import { ExternalLink, Github, Clock } from "lucide-react";

const projects = [
  {
    title: "Finance & Budgeting App",
    description:
      "A friendly finance and budgeting application designed to help freelancers, students, and educational institutions track and save their money. Features expense tracking, budget planning, and financial insights.",
    image: "/hero.jpg",
    stack: ["React.js", "Node.js", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Idhil686",
    live: null,
    featured: true,
    status: "In Progress",
  },
  {
    title: "Credit Card Fault Detection",
    description:
      "A machine learning project that collects and processes customer data to detect fraudulent credit card transactions, helping protect users from financial fraud.",
    image: "/hero.jpg",
    stack: ["Python", "Machine Learning", "Data Analysis"],
    github: "https://github.com/Idhil686",
    live: null,
    featured: true,
    status: "In Progress",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Current <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            These are my current projects. I'll be adding more as I complete them — stay tuned!
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`grid md:grid-cols-2 gap-0 glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 group ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50" />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center space-y-4">
                {/* Status badge */}
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full w-fit">
                  <Clock size={10} />
                  {project.status}
                </div>

                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-surface text-muted-foreground text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={16} /> View on GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming soon note */}
        <div className="mt-12 text-center glass rounded-2xl p-8">
          <p className="text-muted-foreground">
            More projects coming soon —{" "}
            <a
              href="https://github.com/Idhil686"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              follow me on GitHub
            </a>{" "}
            to stay updated!
          </p>
        </div>
      </div>
    </section>
  );
};
