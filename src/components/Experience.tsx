import { Briefcase, Users, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: "Undergraduate Teaching Assistant",
      organization: "Arizona State University",
      period: "May 2023 - Dec 2023",
      highlights: [
        "Mentored 300+ students in object-oriented programming, debugging, and data structures",
        "Delivered interactive lessons on DSA using live coding demonstrations",
        "Facilitated workshops promoting clean code practices and documentation discipline",
        "Collaborated with faculty on grading rubrics and instructional materials",
      ],
    },
    {
      icon: Users,
      title: "President",
      organization: "Indian Muslim Student Network (IMSN)",
      period: "Aug 2024 - Present",
      highlights: [
        "Organized largest cultural event in club history with 250+ attendees",
        "Demonstrated leadership and adaptability by managing full logistics independently",
        "Boosted cultural awareness by 60% through targeted marketing campaigns",
        "Streamlined operations with structured task boards and communication workflows",
      ],
    },
    {
      icon: Award,
      title: "Operations Director",
      organization: "Software Developers Association (SoDA)",
      period: "May 2024 - Present",
      highlights: [
        "Directed operations for 200+ member software engineering club",
        "Reduced event preparation time by 35% through streamlined workflows",
        "Secured sponsorships and strengthened student-industry relationships",
        "Enhanced event turnout through data-driven engagement strategies",
      ],
    },
    {
      icon: Users,
      title: "Workshop Leader & Mentor",
      organization: "AI Society",
      period: "Aug 2023 - Dec 2023",
      highlights: [
        "Hosted AI workshops on prompt engineering and automation for 40+ students",
        "Improved workshop comprehension by 50% through accessible explanations",
        "Provided one-on-one mentorship on AI integration and prompt design",
        "Coordinated summer camp modules and guided project delivery",
      ],
    },
    {
      icon: Award,
      title: "Board Member",
      organization: "DevHacks (DevLabs)",
      period: "May 2023 - Dec 2023",
      highlights: [
        "Supported 400+ participants in large-scale hackathons",
        "Designed evaluation rubrics emphasizing scalability and code efficiency",
        "Mentored participants on software architecture and presentation delivery",
        "Coordinated venue logistics and sponsor outreach for smooth execution",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-glow">Experience & Leadership</span>
        </h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div 
                key={index}
                className="card-glass rounded-xl p-6 md:p-8 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg border border-primary/30">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.organization}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <span className="text-primary mr-2">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
