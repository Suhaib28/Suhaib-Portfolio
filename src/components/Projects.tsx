import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Bloom My Cash",
      description: "Full-stack personal finance tracking application with dynamic dashboards and responsive layouts",
      achievements: [
        "Built with React, Tailwind CSS, and Node.js with JWT authentication",
        "Deployed on AWS (EC2, RDS, S3) with CI/CD pipelines achieving >99% uptime",
        "Reduced manual deployment overhead and improved team collaboration by 25%",
      ],
      tech: ["React", "Node.js", "AWS", "CI/CD", "REST APIs"],
    },
    {
      title: "AI Tutor",
      description: "Personalized learning assistant using NLP, RAG, and LangChain pipelines",
      achievements: [
        "Leveraged OpenAI GPT models with semantic vector search for 40% accuracy improvement",
        "Built Flask-React full-stack system supporting 500+ active users with sub-second responses",
        "Automated model evaluation and Docker-based scaling, sustaining 99% uptime",
      ],
      tech: ["Python", "Flask", "React", "OpenAI", "RAG", "Docker", "Postgres"],
    },
    {
      title: "ThreadSetterz",
      description: "Data-driven fashion feed system with algorithmic ranking and real-time recommendations",
      achievements: [
        "Achieved 98% match accuracy with O(log n) retrieval complexity",
        "Improved feed responsiveness by 45% using optimized data structures",
        "Maintained 1.5-second response time across 10K+ concurrent sessions",
      ],
      tech: ["React.js", "Node.js", "MongoDB", "DSA", "Algorithms"],
    },
    {
      title: "Sayam For All",
      description: "Real-time accessibility communication platform enabling audio, video, and text chat",
      achievements: [
        "Built with WebRTC and WebSockets for fault-tolerant real-time communication",
        "Integrated custom accessibility features, increasing adoption by 40%",
        "Achieved 99% uptime with Python/JavaScript backend services",
      ],
      tech: ["WebRTC", "WebSockets", "Python", "JavaScript", "Accessibility"],
    },
    {
      title: "Mesa Historical Baseball Museum App",
      description: "Kotlin-based Android application with interactive timelines and offline access",
      achievements: [
        "Implemented MVVM architecture with Room DB for offline functionality",
        "Reduced crash rates by 20% and load times by 40% through optimization",
        "Served 300+ students and educators with smooth navigation",
      ],
      tech: ["Kotlin", "Android SDK", "MVVM", "Room DB"],
    },
    {
      title: "TastefulServer",
      description: "Multi-threaded C++ HTTP server with socket programming and concurrency controls",
      achievements: [
        "Reduced latency by 35% under 1,000+ simultaneous requests",
        "Cut CPU utilization by 20% through gdb and Valgrind profiling",
        "Achieved >99% runtime reliability with memory-safe error recovery",
      ],
      tech: ["C++", "Socket Programming", "Multi-threading", "Performance Optimization"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-glow">Featured Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="card-glass border-primary/20 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm flex items-start">
                      <span className="text-primary mr-2">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <Badge 
                      key={i}
                      variant="outline"
                      className="border-primary/50 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
