import { ArrowDown, Mail, Linkedin, Github, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl animate-float"
          style={{ backgroundColor: "hsl(var(--primary) / 0.15)" }}
        />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "hsl(var(--primary) / 0.08)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10 text-center">
        <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: "hsl(var(--muted))" }}
          >
            Frontend Developer
          </span>
        </div>

        {/* Heading */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Hi, I'm <span className="text-gradient">Arwa Rabie</span>
        </h1>

        {/* Description */}
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-muted animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          A passionate Frontend Developer specializing in React.js and Vue,
          creating scalable and visually appealing web solutions with a focus on
          exceptional user experiences.
        </p>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#projects"
            className="ui-btn ui-btn-primary px-8 py-4 text-lg hover:scale-105 transition-transform"
          >
            View My Work
          </a>

          <a
            href="/ArwaRabieCV(Frontend Developer).pdf"
            download
            className="ui-btn px-8 py-4 text-lg border hover:bg-[hsl(var(--primary))] hover:text-black hover:border-[hsl(var(--primary))] transition-all flex items-center gap-2"
          >
            <Download size={20} />
            Download CV
          </a>
        </div>

        {/* Social */}
        <div
          className="flex items-center justify-center gap-6 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          {/* Email */}
          <a
            href="#contact"
            className="p-3 rounded-full transition hover:opacity-100 opacity-70"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/arwa-rabiee/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full transition hover:opacity-100 opacity-70"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/ArwaRabieAbdElbary"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full transition hover:opacity-100 opacity-70"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
