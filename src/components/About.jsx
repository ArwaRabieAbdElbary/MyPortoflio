import { MapPin, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--primary) / 0.25), hsl(var(--primary) / 0.1))",
                color: "hsl(var(--primary))",
              }}
            >
              About Me
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Crafting Digital Experiences with Passion
            </h2>

            <p className="text-lg leading-relaxed mb-8 text-muted">
              I'm a motivated frontend developer with a strong background in
              React and Vue, combined with solid UI/UX knowledge. I thrive on
              building scalable and visually appealing frontend solutions while
              continuously improving my technical skills and contributing to
              business objectives.
            </p>

            <div className="space-y-5">
              <InfoItem
                icon={<MapPin size={22} />}
                label="Location"
                value="Cairo, Egypt"
              />

              <InfoItem
                icon={<GraduationCap size={22} />}
                label="Education"
                value="B.Sc. Computer Science, Assiut University (GPA: 3.13/4)"
              />

              <InfoItem
                icon={<Briefcase size={22} />}
                label="Status"
                value="Open to opportunities"
              />
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6">
            <StatCard value="3+" label="Projects Completed" />
            <StatCard value="1+" label="Years Experience" />
            <StatCard value="10+" label="Technologies" />
            <StatCard value="2" label="Internships" />
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-4">
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
      style={{ backgroundColor: "hsl(var(--muted))" }}
    >
      <span style={{ color: "hsl(var(--primary))" }}>{icon}</span>
    </div>

    <div className="flex-1">
      <p className="text-sm text-muted">{label}</p>
      <p className="font-medium leading-relaxed">{value}</p>
    </div>
  </div>
);

const StatCard = ({ value, label }) => (
  <div className="ui-card text-center">
    <p
      className="text-5xl font-bold mb-2"
      style={{ color: "hsl(var(--primary))" }}
    >
      {value}
    </p>
    <p className="text-muted">{label}</p>
  </div>
);

export default About;
