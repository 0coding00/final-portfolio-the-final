export default function About() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-display-sm md:text-display font-bold mb-8">
          About <span className="text-gradient">Me</span>
        </h1>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate frontend developer with a keen eye for design and a love for creating 
              exceptional digital experiences. With expertise in modern web technologies, I transform 
              ideas into beautiful, functional applications that users love.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in the Netherlands, I work with startups and established companies to bring their 
              visions to life through clean code, thoughtful design, and performance-optimized solutions.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
            
            <div className="pt-6">
              <h3 className="font-display text-xl font-semibold mb-4">Current Focus</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Building scalable React applications</li>
                <li>• Performance optimization and Core Web Vitals</li>
                <li>• Modern CSS and design systems</li>
                <li>• TypeScript and developer experience</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="card-elegant p-8 rounded-lg">
              <h3 className="font-display text-xl font-semibold mb-4">Quick Facts</h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Location</dt>
                  <dd className="text-foreground">Syria</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Experience</dt>
                  <dd className="text-foreground">1+ Years</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Availability</dt>
                  <dd className="text-primary font-medium">Open to opportunities</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Preferred Role</dt>
                  <dd className="text-foreground">Junior Frontend Developer</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}