import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import eTaxi from "@/assets/e-taxi.jpg";

const Index = () => {
  const featuredSkills = [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Node.js",
  ];

  const featuredProject = {
    title: "E-Taxi WebSite",
    description:
      "A comprehensive admin dashboard with real-time analytics and modern UI",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    image: { eTaxi },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="container mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Available for new opportunities
                </Badge>
                <h1 className="font-display text-display-sm md:text-display font-bold leading-tight">
                  Frontend Developer &
                  <span className="text-gradient block">Digital Craftsman</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  I create exceptional digital experiences through clean code,
                  thoughtful design, and performance-optimized solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="hover-glow group">
                  <Link to="/projects">
                    View My Work
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>

              {/* Quick Skills */}
              <div className="pt-8">
                <p className="text-sm text-muted-foreground mb-4">
                  Technologies I work with:
                </p>
                <div className="flex flex-wrap gap-2">
                  {featuredSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="hover-glow"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={heroImage}
                  alt="Frontend Developer Workspace"
                  className="w-[450px] rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-lg transform rotate-6 scale-105 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Featured <span className="text-gradient">Project</span>
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              Take a look at one of my recent projects that showcases my
              technical skills and design approach.
            </p>

            <Card className="card-elegant hover-lift group">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6 text-left">
                    <div>
                      <h3 className="font-display text-2xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                        {featuredProject.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {featuredProject.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {featuredProject.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                      <Button size="sm" className="hover-glow">
                        <Link className="w-4 h-4 mr-2" to="https://taxi-flax-phi.vercel.app" />
                        Live Demo
                      </Button>
                    </div>
                  </div>

                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <img
                      src={eTaxi}
                      alt="Frontend Developer Workspace"
                      className="w-[450px] rounded-lg shadow-2xl"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "1+", label: "Years Experience" },
              { number: "10+", label: "Projects Completed" },
              { number: "20+", label: "Technologies" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Something{" "}
              <span className="text-gradient">Amazing</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your project and bring your ideas to life with
              modern web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hover-glow">
                <Link to="/contact">Start a Conversation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn More About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
