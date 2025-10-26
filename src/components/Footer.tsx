import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-primary/20 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold text-glow mb-2">Suhaib Ahmad Siddiqui</p>
            <p className="text-muted-foreground">Full-Stack Software Engineer</p>
          </div>

          <div className="flex gap-6">
            <a 
              href="https://github.com/Suhaib28" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/suhaib28" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:sasidd11@asu.edu"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/10 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Suhaib Ahmad Siddiqui. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
