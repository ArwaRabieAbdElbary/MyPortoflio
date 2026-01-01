import { Github, Linkedin, Mail, ArrowUp, Figma } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/ArwaRabieAbdElbary",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/arwa-rabiee/",
    },
    {
      name: "Behance",
      icon: Figma,
      url: "https://www.behance.net/arwarabie1",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:arwarabie295@gmail.com",
    },
  ];

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
  ];

  return (
    <footer
      className="relative border-t"
      style={{
        borderColor: "hsl(var(--border))",
        backgroundColor: "hsl(var(--card))",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-7 pb-5">
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gradient">Arwa Rabie</span>
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Frontend Developer & UI/UX Designer passionate about creating
              beautiful and functional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: "hsl(var(--fg))" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted text-sm inline-flex items-center gap-2 group transition-all"
                  >
                    <span className="w-0 h-[2px] bg-primary group-hover:w-4 transition-all duration-300" />
                    <span className="group-hover:text-primary group-hover:translate-x-1 transition-all duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: "hsl(var(--fg))" }}
            >
              Let's Connect
            </h4>
            <p className="text-muted text-sm mb-4">
              Feel free to reach out for collaborations or just a friendly chat.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: "hsl(var(--muted))",
                    color: "hsl(var(--fg))",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "hsl(var(--primary))";
                    e.currentTarget.style.color = "#111";
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px hsl(var(--primary) / 0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "hsl(var(--muted))";
                    e.currentTarget.style.color = "hsl(var(--fg))";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "hsl(var(--border))" }}
        >
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Arwa Rabie. All rights reserved.
          </p>

          <p className="text-muted text-sm">
            Built with <span className="text-primary">React</span> &{" "}
            <span className="text-primary">Tailwind CSS</span>
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-50 cursor-pointer"
          style={{
            background: "var(--grad-primary)",
            color: "#111",
            boxShadow: "var(--shadow-glow)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px) scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
          }}
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
