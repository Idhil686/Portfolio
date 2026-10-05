import { Code2, GraduationCap, Lightbulb, Rocket } from "lucide-react";

const skillGroups = [
  { title: "Languages", items: ["Python", "JavaScript", "Java", "SQL", "Prolog", "C++", "HTML/CSS"] },
  { title: "Web & Mobile", items: ["React", "Vite", "Node.js", "Express.js", "Flask", "Tailwind CSS", "Android (Java)", "Android Studio", "Firebase"] },
  { title: "Machine Learning", items: ["scikit-learn", "TensorFlow/Keras", "PyTorch", "NumPy", "pandas", "GridSearchCV", "SMOTE"] },
  { title: "Data & Backend", items: ["MongoDB", "Mongoose", "REST APIs", "JWT & bcrypt Authentication"] },
  { title: "Cloud & DevOps", items: ["AWS", "Google Cloud Platform", "Docker", "CI/CD Pipelines", "Terraform", "Ansible"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Google Colab", "Figma", "Postman", "Node-RED"] },
];

const stats = [
  { value: "3rd", label: "Year Student" },
  { value: "6", label: "Projects" },
  { value: "40+", label: "Technologies" },
  { value: "USIU", label: "Africa" },
];

const traits = [
  { icon: GraduationCap, title: "Student", desc: "3rd year Computer Science student at USIU-Africa." },
  { icon: Code2, title: "Developer", desc: "Full-stack web, Android and machine learning projects." },
  { icon: Lightbulb, title: "Problem Solver", desc: "I enjoy breaking down complex problems into simple solutions." },
  { icon: Rocket, title: "Fast Learner", desc: "Always exploring new technologies and frameworks." },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Who I <span className="text-primary">Am</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Image + Stats */}
          <div className="space-y-8">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden glass">
                <img
                  src="/profile.jpeg"
                  alt="Idhil Abdi Hassan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-10" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="glass rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-primary">{value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Bio + Skills */}
          <div className="space-y-8">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Hello! I'm Idhil Hassan, a Computer Science student with hands-on
                experience in full-stack web development, machine learning and
                Android engineering. I enjoy learning new technologies and working
                with others to solve problems and deliver projects.
              </p>
              <p>
                I've built an accident-severity predictor with scikit-learn and Flask,
                led a team shipping a MERN Lost & Found platform, built an Android
                sports app with Firebase, and trained deep learning models in
                TensorFlow and PyTorch. I've also supported students and staff as
                an ICT Support Assistant at the university.
              </p>
              <p>
                Currently pursuing a BSc in Computer Science (Software Engineering) at
                United States International University Africa (USIU-Africa) in
                Nairobi, Kenya.
              </p>
            </div>

            {/* Traits */}
            <div className="grid grid-cols-2 gap-4">
              {traits.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="glass rounded-xl p-4 space-y-2 hover:border-primary/30 transition-colors duration-300">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <div className="font-medium text-sm">{title}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
                Tech Stack
              </h3>
              <div className="space-y-4">
                {skillGroups.map(({ title, items }) => (
                  <div key={title}>
                    <div className="text-xs text-primary font-medium mb-2">{title}</div>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 glass rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
