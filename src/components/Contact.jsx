import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_prv7s6d",
        "template_uja55uo",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "sGQKkHCsYSVgOCVzK"
      )
      .then((response) => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        toast.error("Failed to send message. Try again.");
        console.error("FAILED...", err);
      });
  };

  // Social Links
  const socialLinks = [
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/arwa-rabiee/",
      label: "LinkedIn",
    },
    {
      Icon: Github,
      href: "https://github.com/ArwaRabieAbdElbary",
      label: "GitHub",
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6
                             bg-[hsl(var(--muted))] text-[hsl(var(--primary))]"
            >
              Contact
            </span>

            <h2
              className="font-display text-4xl md:text-5xl font-bold mb-6
                           text-[hsl(var(--fg))]"
            >
              Let’s Work Together
            </h2>

            <p className="text-muted max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting
              projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-[hsl(var(--fg))]">
                Get in Touch
              </h3>

              <div className="space-y-6 mb-10">
                {/* Email */}
                <a
                  href="mailto:arwarabie295@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center
                               bg-[hsl(var(--muted))] shadow-sm
                               group-hover:shadow-glow transition-all"
                  >
                    <Mail size={22} className="text-[hsl(var(--primary))]" />
                  </div>

                  <div>
                    <p className="text-sm text-muted">Email</p>
                    <p
                      className="font-medium text-[hsl(var(--fg))]
                                  group-hover:text-[hsl(var(--primary))] transition-colors"
                    >
                      arwarabie295@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+201104172793"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center
                               bg-[hsl(var(--muted))] shadow-sm
                               group-hover:shadow-glow transition-all"
                  >
                    <Phone size={22} className="text-[hsl(var(--primary))]" />
                  </div>

                  <div>
                    <p className="text-sm text-muted">Phone</p>
                    <p
                      className="font-medium text-[hsl(var(--fg))]
                                  group-hover:text-[hsl(var(--primary))] transition-colors"
                    >
                      +20 01104172793
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center
                               bg-[hsl(var(--muted))] shadow-sm"
                  >
                    <MapPin size={22} className="text-[hsl(var(--primary))]" />
                  </div>

                  <div>
                    <p className="text-sm text-muted">Location</p>
                    <p className="font-medium text-[hsl(var(--fg))]">
                      Cairo, Egypt
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <p className="text-sm text-muted mb-4">Find me on</p>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 rounded-xl flex items-center justify-center
                               bg-[hsl(var(--muted))] text-muted
                               hover:text-[hsl(var(--primary))]
                               hover:shadow-glow transition-all"
                  >
                    <social.Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* ================= Right Form ================= */}
            <div className="ui-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                {["name", "email"].map((field) => (
                  <div key={field}>
                    <label className="block text-sm font-medium mb-2 text-[hsl(var(--fg))]">
                      Your {field === "name" ? "Name" : "Email"}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      value={formData[field]}
                      onChange={(e) =>
                        setFormData({ ...formData, [field]: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border
                                 bg-[hsl(var(--card))]
                                 border-[hsl(var(--border))]
                                 text-[hsl(var(--fg))]
                                 focus:ring-2 focus:ring-[hsl(var(--primary))/50]"
                      required
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium mb-2 text-[hsl(var(--fg))]">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border resize-none
                               bg-[hsl(var(--card))]
                               border-[hsl(var(--border))]
                               text-[hsl(var(--fg))]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="ui-btn ui-btn-primary w-full gap-2 cursor-pointer hover:scale-[1.02] transition-all"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
