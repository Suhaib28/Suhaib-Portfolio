import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C++", "Kotlin", "JavaScript", "TypeScript", "SQL"],
    },
    {
      title: "Frontend & Mobile",
      skills: ["React", "HTML/CSS", "Tailwind CSS", "Material Design", "UI/UX", "Android SDK", "MVVM"],
    },
    {
      title: "Backend & APIs",
      skills: ["Flask", "Node.js", "REST APIs", "GraphQL", "OpenAPI", "Microservices", "Authentication"],
    },
    {
      title: "Cloud & Infrastructure",
      skills: ["AWS (EC2, RDS, S3, Bedrock)", "GCP", "Docker", "Kubernetes", "Linux CLI", "Nginx"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Git/GitHub", "CI/CD", "GitHub Actions", "TeamCity", "Buildkite", "Automation", "Agile/Scrum"],
    },
    {
      title: "Data & Analytics",
      skills: ["SQL/MySQL", "Data Pipelines", "ETL", "Tableau", "Power BI", "Pandas", "NumPy"],
    },
    {
      title: "AI/ML & NLP",
      skills: ["NLP", "LLMs", "RAG", "Semantic Search", "Generative AI", "LangChain", "OpenAI GPT"],
    },
    {
      title: "Core Competencies",
      skills: ["Data Structures & Algorithms", "OOP", "Testing", "Debugging", "Performance Optimization"],
    },
    {
      title: "Professional Skills",
      skills: ["Leadership", "Collaboration", "Communication", "Problem-Solving", "Adaptability", "Analytical Thinking"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-glow">Technical Expertise</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="card-glass rounded-xl p-6 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
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
