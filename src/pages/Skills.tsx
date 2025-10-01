const skillCategories = [
  {
    title: "Frontend Frameworks",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Vue.js", level: 80 },
      { name: "Svelte", level: 75 },
    ]
  },
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", level: 95 },
      { name: "JavaScript", level: 98 },
      { name: "HTML5", level: 100 },
      { name: "CSS3", level: 95 },
      { name: "Python", level: 70 },
    ]
  },
  {
    title: "Styling & UI",
    skills: [
      { name: "Tailwind CSS", level: 95 },
      { name: "Styled Components", level: 85 },
      { name: "SCSS/Sass", level: 90 },
      { name: "Framer Motion", level: 85 },
      { name: "shadcn/ui", level: 90 },
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: 95 },
      { name: "Vite", level: 90 },
      { name: "Webpack", level: 80 },
      { name: "Docker", level: 75 },
      { name: "Vercel", level: 90 },
      { name: "AWS", level: 70 },
    ]
  }
];

export default function Skills() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display text-display-sm md:text-display font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card-elegant p-8 rounded-lg hover-lift">
              <h3 className="font-display text-xl font-semibold mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="font-display text-2xl font-semibold mb-8">
            Additional Expertise
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Responsive Design",
              "Performance Optimization",
              "SEO Best Practices",
              "Accessibility (WCAG)",
              "API Integration",
              "State Management",
              "Testing (Jest, Cypress)",
              "Agile/Scrum",
            ].map((skill, index) => (
              <div
                key={index}
                className="card-elegant p-4 rounded-lg text-center hover-glow transition-smooth"
              >
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}