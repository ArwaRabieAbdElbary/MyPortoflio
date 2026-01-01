import { Briefcase, Calendar, GraduationCap, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    title: "UI/UX Development Internship",
    company: "ITI (Information Technology Institute)",
    period: "07/2025 – 12/2025",
    description:
      "Frontend intern, built web interfaces using Vue and learned UI/UX fundamentals. Developed graduation project 'Trainly' – a platform connecting trainers and trainees.",
    type: "internship",
  },
  {
    title: "Intern – Front-End Developer (React JS)",
    company: "Upskilling IT Services",
    period: "11/2024 – 01/2025",
    description:
      "Internship focusing on Front-End Development using React JS. Built multiple web applications and improved practical skills.",
    type: "internship",
  },
  {
    title: "Web Development using React",
    company: "SEF Academy",
    period: "Training Course",
    description:
      "Comprehensive training on web development focused on React.js ecosystem and modern frontend practices.",
    type: "course",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[hsl(222_47%_6%)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
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

          <h2 className="text-5xl font-bold mb-4 text-foreground">
            Experience & <span className="text-gradient">Training</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl">
            Building expertise through hands-on projects and continuous learning
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border/60 rounded-2xl p-8
                transition-all duration-500
                hover:-translate-y-1
                hover:border-primary/40
                hover:shadow-[0_25px_60px_-20px_hsl(var(--primary)/0.45)]
                animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px]
                bg-gradient-to-r from-primary to-cyan-400
                scale-x-0 group-hover:scale-x-100
                origin-left transition-transform duration-500"
              />

              <div className="flex items-start gap-6">
                {/* Icon */}
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-xl
                  bg-primary/10 border border-primary/20
                  transition-all duration-300
                  group-hover:scale-110 group-hover:rotate-6
                  group-hover:shadow-[0_8px_24px_hsl(var(--primary)/0.35)]"
                >
                  {exp.type === "course" ? (
                    <GraduationCap className="text-primary" size={24} />
                  ) : (
                    <Briefcase className="text-primary" size={24} />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3
                        className="text-xl font-bold text-foreground mb-1
                        group-hover:text-primary transition-colors"
                      >
                        {exp.title}
                      </h3>
                      <p className="text-primary font-semibold">
                        {exp.company}
                      </p>
                    </div>

                    <div
                      className="flex items-center gap-2 px-3 py-1 rounded-lg text-sm
                      bg-muted/40 text-muted-foreground"
                    >
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className="hidden md:flex w-10 h-10 items-center justify-center rounded-full
                  bg-muted text-muted-foreground
                  opacity-0 transition-all duration-300
                  group-hover:opacity-100
                  group-hover:bg-primary
                  group-hover:text-background
                  group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
