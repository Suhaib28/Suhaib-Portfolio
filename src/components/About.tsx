const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-glow">About Me</span>
        </h2>
        
        <div className="card-glass rounded-2xl p-8 md:p-12 hover-lift">
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              I'm a <strong className="text-primary">Computer Science student</strong> at Arizona State University 
              with a <strong className="text-primary">3.89 GPA</strong>, set to graduate in December 2026. 
              I specialize in building <strong className="text-primary">full-stack applications</strong>, 
              implementing <strong className="text-primary">AI/ML solutions</strong>, and designing 
              <strong className="text-primary"> scalable cloud infrastructure</strong>.
            </p>
            
            <p>
              My experience spans <strong className="text-primary">enterprise-grade software development</strong> with 
              expertise in <strong className="text-primary">React, Node.js, Python, and AWS</strong>. I've delivered 
              projects achieving <strong className="text-primary">99% uptime</strong> and 
              <strong className="text-primary"> 40% performance improvements</strong> through optimized architectures, 
              automated CI/CD pipelines, and data-driven engineering practices.
            </p>
            
            <p>
              I'm passionate about <strong className="text-primary">agile development</strong>, 
              <strong className="text-primary"> test-driven design</strong>, and 
              <strong className="text-primary"> DevOps automation</strong>. My technical skills include 
              <strong className="text-primary"> REST APIs, microservices, Docker, Kubernetes</strong>, and 
              <strong className="text-primary"> modern frontend frameworks</strong>. I also have hands-on experience 
              with <strong className="text-primary">NLP, RAG systems, and generative AI</strong>.
            </p>
            
            <p>
              Beyond technical skills, I bring proven <strong className="text-primary">leadership</strong> and 
              <strong className="text-primary"> collaboration abilities</strong> from roles including President of 
              the Indian Muslim Student Network, Operations Director at Software Developers Association, and 
              Undergraduate Teaching Assistant where I mentored 300+ students in 
              <strong className="text-primary"> data structures, algorithms, and software engineering best practices</strong>.
            </p>
            
            <p>
              I thrive in <strong className="text-primary">cross-functional teams</strong>, communicate technical 
              concepts clearly to both technical and non-technical stakeholders, and consistently deliver 
              <strong className="text-primary"> production-ready solutions</strong> that balance innovation with 
              maintainability and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
