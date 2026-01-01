import {
  ExternalLink,
  Github,
  Hotel,
  UtensilsCrossed,
  FolderKanban,
  Palette,
  Dumbbell,
} from "lucide-react";

const projects = [
  {
    title: "Trainly",
    description:
      "Trainly is a user-centric training platform designed to simplify trainer discovery, verification, and subscription management through AI-powered features and intuitive dashboards.",
    icon: Dumbbell,
    tags: ["Vue.js", "TailwindCSS", "Firebase", "Stripe"],
    live: "https://trainly-110.netlify.app/",
    repo: "https://github.com/ArwaRabieAbdElbary/Trainly.git",
    type: "development",
  },
  {
    title: "Hotel Booking System",
    description:
      "A comprehensive web application for admins and guests, providing seamless room booking management to improve hotel operations and guest satisfaction.",
    icon: Hotel,
    tags: ["React", "REST API", "Authentication", "CRUD"],
    live: "https://jsb-hotelmanagement.netlify.app/",
    repo: "https://github.com/ArwaRabieAbdElbary/HotelManagement.git",
    type: "development",
  },
  {
    title: "Food Management App",
    description:
      "Web app for admins and users, providing food inventory management, order tracking, and real-time analytics to improve operations and user experience.",
    icon: UtensilsCrossed,
    tags: ["React", "Dashboard", "Analytics"],
    live: "https://food-mangment-system.netlify.app/",
    repo: "https://github.com/ArwaRabieAbdElbary/Food-Managment-Project-.git",
    type: "development",
  },
  {
    title: "Project Management System",
    description:
      "Feature-rich web app for managing projects and tasks, with authentication, CRUD operations, drag & drop task board, interactive charts, and a clean, responsive user interface focused on productivity.",
    icon: FolderKanban,
    tags: ["React", "JWT", "Drag & Drop", "Axios", "React Hook Form"],
    live: "https://poject-managment-system-jsb.netlify.app/",
    repo: "https://github.com/ArwaRabieAbdElbary/PMS.git",
    type: "development",
  },
  {
    title: "Quiz Management System",
    description:
      "Quiz Management System is a full-featured platform for creating, managing, and taking quizzes, with role-based dashboards for instructors and students, secure authentication, real-time results tracking, and a responsive, modern UI.",
    icon: FolderKanban,
    tags: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    live: "https://jsb-quizapp.netlify.app",
    repo: "https://github.com/ArwaRabieAbdElbary/Quiz-App.git",
    type: "development",
  },
  {
    title: "Masar - EdTech Platform",
    description:
      "An intelligent learning platform that personalizes education for students aged 8–25. Using AI recommendations, students receive lessons that match their level and goals, while teachers get better tools to guide learning.",
    icon: Palette,
    tags: ["UI/UX Design", "Figma", "User Research", "Prototyping"],
    live: "https://www.behance.net/gallery/240115689/Masar-Saudi-EdTech-Platform-App-UIUX-Case-Study/modules/1383450817",
    type: "design",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 relative"
      style={{
        background:
          "radial-gradient(1000px 400px at top, hsl(var(--primary) / 0.12), transparent 60%)",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
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
              My Projects
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Work
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Here are some of the projects I've built that showcase my skills
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group rounded-2xl overflow-hidden
                bg-card
                border border-border/50
                shadow-card
                transition-all duration-500
                hover:-translate-y-3
                hover:shadow-[0_20px_50px_-20px_hsl(var(--primary)/0.45)]
                flex flex-col"
              >
                <div
                  className="p-6"
                  style={{
                    background:
                      project.type === "design"
                        ? "linear-gradient(135deg, hsl(280 70% 50% / 0.2), hsl(173 71% 50% / 0.2))"
                        : "linear-gradient(to bottom right, hsl(var(--primary) / 0.2), transparent)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shadow-soft"
                    style={{
                      backgroundColor:
                        project.type === "design"
                          ? "hsl(280 70% 50% / 0.15)"
                          : "hsl(var(--background))",
                    }}
                  >
                    <project.icon
                      className={
                        project.type === "design"
                          ? "text-purple-400"
                          : "text-primary"
                      }
                      size={26}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6 min-h-[32px]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full h-fit"
                        style={{
                          backgroundColor:
                            project.type === "design"
                              ? "hsl(280 70% 50% / 0.15)"
                              : "hsl(var(--muted))",
                          color:
                            project.type === "design"
                              ? "hsl(280 70% 70%)"
                              : "hsl(var(--fg) / 0.7)",
                          border:
                            project.type === "design"
                              ? "1px solid hsl(280 70% 50% / 0.3)"
                              : "1px solid hsl(var(--border))",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-5 mt-auto">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium
                      text-foreground
                      hover:text-primary
                      active:text-primary
                      transition-colors group/link"
                    >
                      <ExternalLink
                        size={16}
                        className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                      />
                      {project.type === "design"
                        ? "View Case Study"
                        : "View Project"}
                    </a>

                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium
                        text-muted-foreground
                        hover:text-primary
                        active:text-primary
                        transition-colors group/code"
                      >
                        <Github
                          size={16}
                          className="group-hover/code:rotate-12 transition-transform"
                        />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
