import { ExternalLink, Github, Clock, CheckCircle2 } from "lucide-react";

const projects = [
  {
    title: "RoadSense: Accident Severity Predictor",
    description:
      "An end-to-end machine learning system that predicts the severity of US traffic accidents across 4 classes. Trained a Random Forest in Google Colab, using SMOTE to balance the classes and GridSearchCV to tune it, raising macro F1 from 0.25 to 0.30. A modular Flask backend with Blueprints serves the packaged models through a REST API, with a polished frontend on top.",
    image: "/hero.jpg",
    stack: ["Python", "scikit-learn", "Random Forest", "SMOTE", "GridSearchCV", "Flask", "REST API", "Google Colab"],
    github: "https://github.com/Idhil686",
    live: null,
    status: "Completed",
  },
  {
    title: "USIU Lost & Found",
    description:
      "A full-stack platform where USIU-Africa students report and recover lost items. I led the team as Team Lead. Features secure login and signup with bcrypt and JWT, a lost/found reporting form, a live listings dashboard and a contact directory, going three features beyond the class specification.",
    image: "/hero.jpg",
    stack: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
    github: "https://github.com/Idhil686/usiu-lost-and-found",
    live: null,
    status: "Completed",
  },
  {
    title: "USIU Sports App",
    description:
      "A native Android app for USIU sports, with Basketball and Volleyball modules, player rosters and team-joining flows. Uses Firebase Authentication and Firestore with real-time roster updates. I debugged dependency conflicts and Firestore security rules to reach a stable, demo-ready build.",
    image: "/hero.jpg",
    stack: ["Java", "Android Studio", "Firebase Auth", "Firestore"],
    github: "https://github.com/Idhil686",
    live: null,
    status: "Completed",
  },
  {
    title: "Alzheimer's MRI Classifier & Student Grade Predictor",
    description:
      "Two deep learning models: a CNN that classifies stages of Alzheimer's disease from MRI scans, and a PyTorch neural network that predicts student academic outcomes. Each model is deployed behind its own Flask inference API.",
    image: "/hero.jpg",
    stack: ["Python", "TensorFlow/Keras", "PyTorch", "CNN", "Flask"],
    github: "https://github.com/Idhil686",
    live: null,
    status: "Completed",
  },
  {
    title: "Finance & Budgeting App",
    description:
      "A friendly finance and budgeting app to help freelancers, students and institutions track and save money, with expense tracking, budget planning and financial insights. Proposed and scoped for the ACN Makerspace.",
    image: "/hero.jpg",
    stack: ["React", "Node.js", "MongoDB", "Figma", "scikit-learn"],
    github: "https://github.com/Idhil686",
    live: null,
    status: "In Progress",
  },
  {
    title: "Credit Card Fraud Detection",
    description:
      "A machine learning project that processes customer transaction data to detect fraudulent credit card transactions and protect users from financial fraud.",
    image: "/hero.jpg",
    stack: ["Python", "scikit-learn", "pandas", "NumPy"],
    github: "https://github.com/Idhil686",
    live: null,
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
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Full-stack web apps, Android apps and machine learning systems I've built, plus what I'm working on now.
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
                  {project.status === "Completed" ? <CheckCircle2 size={10} /> : <Clock size={10} />}
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
            See all my code —{" "}
            <a
              href="https://github.com/Idhil686"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              follow me on GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
