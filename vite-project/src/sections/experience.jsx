const experiences = [
  {
    role: "Applied Computer Technology Student",
    company: "USIU-Africa",
    period: "2024 — Present",
    type: "Full-time",
    description:
      "Pursuing a Bachelor's degree in Applied Computer Technology at United States International University Africa. Building strong foundations in software development, algorithms, data structures, and modern web technologies.",
    stack: ["Python", "Java", "C++", "JavaScript"],
  },
  {
    role: "Finance & Budgeting App",
    company: "Personal Project",
    period: "2024 — Present",
    type: "In Progress",
    description:
      "Building a friendly finance and budgeting application that helps freelancers, students, and educational institutions manage and save their money effectively through an intuitive interface.",
    stack: ["React.js", "Node.js", "Tailwind CSS", "JavaScript"],
  },
  {
    role: "Credit Card Fault Detection",
    company: "Personal Project",
    period: "2024 — Present",
    type: "In Progress",
    description:
      "Developing a credit card fault detection system that collects and processes customer data to identify fraudulent transactions and protect users from financial fraud.",
    stack: ["Python", "Machine Learning", "Data Analysis"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Education & <span className="text-primary">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative grid md:grid-cols-2 gap-8`}
              >
                {/* Dot on the line */}
                <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                {index % 2 === 0 ? (
                  <>
                    <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-colors duration-300">
                      <ExperienceCard exp={exp} />
                    </div>
                    <div className="flex md:items-start md:pt-6 md:pl-12">
                      <PeriodBadge period={exp.period} type={exp.type} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex md:items-start md:justify-end md:pt-6 md:pr-12">
                      <PeriodBadge period={exp.period} type={exp.type} />
                    </div>
                    <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-colors duration-300">
                      <ExperienceCard exp={exp} />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ exp }) => (
  <div className="text-left space-y-3">
    <div>
      <h3 className="text-lg font-bold">{exp.role}</h3>
      <p className="text-primary font-medium text-sm">{exp.company}</p>
    </div>
    <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
    <div className="flex flex-wrap gap-2 pt-1">
      {exp.stack.map((tech) => (
        <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const PeriodBadge = ({ period, type }) => (
  <div className="space-y-1">
    <div className="text-sm font-medium text-foreground">{period}</div>
    <div className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
      {type}
    </div>
  </div>
);
