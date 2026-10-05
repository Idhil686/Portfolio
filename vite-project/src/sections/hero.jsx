import { useMemo } from "react";
import { Button } from "@/components/button";
import { ArrowDown, Github, Mail, Phone } from "lucide-react";

const dots = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  duration: `${15 + Math.random() * 20}s`,
}));

export const Hero = () => {
  const memoizedDots = useMemo(() => dots, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt="hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {memoizedDots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#16a34a",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration} ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">3rd Year Student · USIU-Africa</span>
          </div>

          {/* Name & Title */}
          <h1
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Hi, I'm{" "}
            <span className="text-primary">Idhil</span>
            <br />
            <span className="text-foreground/80 text-4xl md:text-5xl font-medium">
              Full-Stack Developer
            </span>
          </h1>

          {/* Bio */}
          <p
            className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
           I'm a Computer Science student at USIU-Africa who builds full-stack web
          apps, Android apps and machine learning systems. I'm currently looking
          for software engineering internships.      
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap items-center gap-4 mb-12 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <a
              href="#contact"
              className="px-8 py-4 text-base rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div
            className="flex items-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { icon: Github, href: "https://github.com/Idhil686", label: "GitHub" },
              { icon: Mail, href: "mailto:idhilhassan52@gmail.com", label: "Email" },
              { icon: Phone, href: "tel:+254704222585", label: "Phone" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown size={20} className="text-muted-foreground" />
        </a>
      </div>
    </section>
  );
};
