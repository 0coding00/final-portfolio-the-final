import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import eTaxi from "@/assets/e-taxi.jpg";
import resaurantProject from "@/assets/resaurantProject.png"
import coolivaProject from "@/assets/coolivaProject.png"
import quizApp from "@/assets/quizApp.png"
const projects = [
  {
    id: 1,
    title: "E-Taxi WebSite",
    description:
      "A comprehensive admin dashboard for managing products, orders, and analytics with real-time updates.",
    category: "Fullstack",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    image: eTaxi ,
    github: "https://github.com/yousefknifati/ecommerce-dashboard",
    live: "https://dashboard-demo.yousefknifati.dev",
    featured: true,
  },
  {
    id: 2,
    title: "e-restaurant",
    description:
      "A collaborative task management application with drag-and-drop functionality and team features.",
    category: "Frontend",
    technologies: ["Next", "TypeScript", "Framer Motion", "Zustand"],
    image: resaurantProject,
    github: "https://github.com/yousefknifati/task-manager",
    live: "https://tasks.yousefknifati.dev",
    featured: true,
  },
  {
    id: 3,
    title: "Cooliva AC Company",
    description:
      "A beautiful AC application with . website built with performance and accessibility in mind",
    category: "Frontend",
    technologies: ["Next.js", "TypeScript", "Tailwind css", "Framer Motion"],
    image: coolivaProject,
    github: "https://github.com/yousefknifati/weather-app",
    live: "https://weather.yousefknifati.dev",
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with performance and accessibility in mind.",
    category: "UI",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: quizApp,
    github: "https://github.com/yousefknifati/portfolio",
    live: "https://yousefknifati.dev",
    featured: true,
  },
];

const categories = ["All", "Frontend", "Fullstack", "UI", "Personal"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display text-display-sm md:text-display font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my work, from web applications to UI designs
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-smooth"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="card-elegant hover-lift group">
              <CardHeader className="p-0">
                <div className="aspect-video bg-muted rounded-t-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt="Frontend Developer Workspace"
                      className="w-full  rounded-lg shadow-2xl"
                    />
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="mb-2 group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
                <CardDescription className="mb-4 text-muted-foreground">
                  {project.description}
                </CardDescription>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex gap-2">
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild className="flex-1 hover-glow">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in working together or want to see more of my work?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="hover-glow">
              <a href="/contact">Get In Touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/yousefknifati"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
