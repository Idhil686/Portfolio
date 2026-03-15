import { useState } from "react";
import { Button } from "@/components/button";
import { Mail, MapPin, Phone, Send, Github } from "lucide-react";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Let's <span className="text-primary">Connect</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — Info */}
          <div className="space-y-8">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm always open to new opportunities, collaborations, or just a
              friendly chat about tech. Feel free to reach out!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:idhilhassan52@gmail.com"
                className="flex items-center gap-4 glass rounded-xl p-4 hover:border-primary/30 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="text-sm font-medium group-hover:text-primary transition-colors">
                    idhilhassan52@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+254704222585"
                className="flex items-center gap-4 glass rounded-xl p-4 hover:border-primary/30 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Phone</div>
                  <div className="text-sm font-medium group-hover:text-primary transition-colors">
                    +254 704 222 585
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 glass rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Location</div>
                  <div className="text-sm font-medium">Nairobi, Kenya</div>
                </div>
              </div>
            </div>

            {/* GitHub */}
            <div>
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-widest">
                Find me on
              </p>
              <a
                href="https://github.com/Idhil686"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 glass rounded-xl px-5 py-3 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
              >
                <Github size={20} />
                <span className="text-sm font-medium">github.com/Idhil686</span>
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-sm text-muted-foreground">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-muted-foreground">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-muted-foreground">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="What's on your mind?"
                className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
            </div>

            <Button size="default" className="w-full justify-center" disabled={status === "sending"}>
              {status === "sending" ? (
                "Sending..."
              ) : status === "sent" ? (
                "Message Sent ✓"
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </Button>

            {status === "sent" && (
              <p className="text-center text-sm text-primary animate-fade-in">
                Thanks! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          Designed & Built by{" "}
          <span className="text-primary font-medium">Idhil Abdi Hassan</span> ·{" "}
          {new Date().getFullYear()}
        </div>
      </div>
    </section>
  );
};
