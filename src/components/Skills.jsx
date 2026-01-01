const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "React.js",
      "Vue.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "API & Authentication",
    skills: ["RESTful APIs", "JWT", "Postman", "Swagger"],
  },
  {
    title: "Version Control & Deployment",
    skills: ["Git", "GitHub", "Netlify"],
  },
  {
    title: "UI/UX & Design",
    skills: ["Figma", "Wireframe", "Responsive Design", "Kanban", "Trello"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "hsl(var(--muted) / 0.3)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Circle */}
        <div
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-20 animate-pulse"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.3), transparent 70%)",
            animation: "float 8s ease-in-out infinite",
          }}
        />

        {/* Top Right Triangle */}
        <div
          className="absolute top-32 right-16 w-32 h-32 opacity-10"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--primary) / 0.4), transparent)",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            animation: "rotate 20s linear infinite",
          }}
        />

        {/* Middle Left Square */}
        <div
          className="absolute top-1/3 left-12 w-24 h-24 opacity-15"
          style={{
            background: "hsl(var(--primary) / 0.25)",
            borderRadius: "var(--radius)",
            animation: "float 10s ease-in-out infinite reverse",
          }}
        />

        {/* Bottom Right Circle */}
        <div
          className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.3), transparent 60%)",
            animation: "float 12s ease-in-out infinite",
          }}
        />

        {/* Small floating dots */}
        <div
          className="absolute top-1/4 right-1/3 w-3 h-3 rounded-full"
          style={{
            backgroundColor: "hsl(var(--primary))",
            opacity: 0.4,
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full"
          style={{
            backgroundColor: "hsl(var(--primary))",
            opacity: 0.5,
            animation: "float 7s ease-in-out infinite reverse",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--primary) / 0.25), hsl(var(--primary) / 0.1))",
              color: "hsl(var(--primary))",
            }}
          >
            My Skills
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical Expertise
          </h2>

          <p className="text-lg max-w-2xl mx-auto text-muted">
            Continuously learning and improving to deliver high-quality
            solutions
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Background grid pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="ui-card relative group hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Card corner accent */}
              <div
                className="absolute -top-2 -right-2 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--primary) / 0.3), transparent)",
                  borderRadius: "var(--radius)",
                }}
              />

              <h3 className="text-xl font-semibold mb-6 relative">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg text-sm font-medium border transition"
                    style={{
                      backgroundColor: "hsl(var(--muted))",
                      borderColor: "hsl(var(--border))",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
