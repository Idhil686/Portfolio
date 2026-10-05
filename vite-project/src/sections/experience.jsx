const experiences = [
  {
    role: "ICT Support Assistant",
    company: "USIU-Africa, Nairobi",
    period: "University",
    type: "Work Experience",
    description:
      "Helped students and staff with everyday ICT questions, explaining solutions clearly and working with others to resolve issues. Adapted quickly to new tools and requests while giving approachable support to university users.",
    stack: ["IT Support", "Troubleshooting", "Communication"],
  },
  {
    role: "Team Lead, Lost & Found Platform",
    company: "Collaborative Software Development, USIU-Africa",
    period: "2026",
    type: "Leadership",
    description:
      "Led a team to design and ship a full-stack lost-and-found platform with React (Vite), Express.js and MongoDB. Implemented secure bcrypt and JWT authentication with a dual-mode login/signup flow, and built item reporting, a live listings dashboard and a contact directory, three features beyond the class specification. Coordinated feature delivery and represented the team in the project's contact documentation.",
    stack: ["React", "Express.js", "MongoDB", "JWT", "bcrypt", "Team Leadership"],
  },
  {
    role: "RoadSense: Accident Severity Predictor",
    company: "Applied Machine Learning Coursework",
    period: "2026",
    type: "Project",
    description:
      "Built an end-to-end ML system predicting 4-class US traffic accident severity with a Random Forest, trained in Google Colab using SMOTE and GridSearchCV. Engineered a modular Flask backend (config, services, Blueprint routes, utils, tests) serving four model artifacts through a REST API. Improved macro F1 from 0.25 to 0.30, identified temperature, humidity and wind speed as top predictors, and delivered a frontend plus a timed technical presentation.",
    stack: ["scikit-learn", "SMOTE", "GridSearchCV", "Flask", "Google Colab"],
  },
  {
    role: "USIU Sports App",
    company: "Android Mobile Development",
    period: "2026",
    type: "Project",
    description:
      "Developed a native Android app in Java with Firebase Authentication and Firestore, including real-time roster updates via addSnapshotListener. Designed Basketball and Volleyball modules with player rosters and team-joining flows, debugged dependency conflicts and Firestore security rules to reach a stable build, and presented it in a recorded walkthrough for lecturer assessment.",
    stack: ["Java", "Android Studio", "Firebase", "Firestore"],
  },
  {
    role: "Alzheimer's MRI Classifier & Student Grade Predictor",
    company: "Deep Learning",
    period: "2026",
    type: "Project",
    description:
      "Trained a CNN to classify Alzheimer's stages from MRI scans and a separate PyTorch feedforward network to predict student academic outcomes, each deployed behind a Flask inference API.",
    stack: ["TensorFlow/Keras", "PyTorch", "CNN", "Flask"],
  },
  {
    role: "Applicant, ACN Makerspace",
    company: "ACN Makerspace",
    period: "2026",
    type: "Activity",
    description:
      "Proposed and scoped a personal finance and budgeting mobile app, drawing on Figma, PyTorch, scikit-learn and the MERN stack, and highlighted a track record of leading collaborative technical work.",
    stack: ["Figma", "PyTorch", "scikit-learn", "MERN Stack"],
  },
  {
    role: "BSc Computer Science (Software Engineering)",
    company: "United States International University-Africa",
    period: "In Progress",
    type: "Education",
    description:
      "Relevant coursework: Applied Machine Learning, Collaborative Software Development, Cloud Computing and Android Mobile Development, covering search and CSP algorithms, Bayesian networks, Minimax with alpha-beta pruning, version control strategy, Agile/DevOps, CI/CD and Infrastructure-as-Code.",
    stack: ["Machine Learning", "Cloud Computing", "Android", "Agile/DevOps", "CI/CD", "IaC"],
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
