import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-glow">Get In Touch</span>
        </h2>
        
        <div className="card-glass rounded-2xl p-8 md:p-12 space-y-8">
          <p className="text-lg text-center text-muted-foreground">
            I'm actively seeking <strong className="text-primary">software engineering opportunities</strong> and 
            <strong className="text-primary"> internships</strong>. Whether you're looking for a 
            <strong className="text-primary"> full-stack developer</strong>, 
            <strong className="text-primary"> AI/ML engineer</strong>, or 
            <strong className="text-primary"> cloud architect</strong>, I'd love to connect and discuss how I can 
            contribute to your team.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 border border-primary/20">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:sasidd11@asu.edu" className="text-primary hover:underline">
                  sasidd11@asu.edu
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 border border-primary/20">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <a href="tel:+16233205231" className="text-primary hover:underline">
                  (623) 320-5231
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 border border-primary/20">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <a 
                  href="https://linkedin.com/in/suhaib28" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  linkedin.com/in/suhaib28
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 border border-primary/20">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">GitHub</p>
                <a 
                  href="https://github.com/Suhaib28" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  github.com/Suhaib28
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-muted/20 border border-primary/20">
            <div className="bg-primary/10 p-3 rounded-lg">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="text-primary">Tempe, Arizona</p>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground border-glow"
              asChild
            >
              <a href="mailto:sasidd11@asu.edu">Send Message</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
