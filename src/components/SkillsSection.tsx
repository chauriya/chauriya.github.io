import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: ["JavaScript", "React", "Vue.js", "Angular", "HTML & CSS"]
    },
    {
      title: "Backend Technologies", 
      skills: ["Node.js", "PHP", "GraphQL", "REST APIs"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Elasticsearch"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      title: "Testing & Quality",
      skills: ["Cypress", "Nightwatch", "Jest", "Mocha", "Chai", "Postman", "JMeter"]
    }
  ];

  return (
    <section className="bg-gradient-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">Technical Skills</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <Card key={category.title} className="p-6 shadow-soft animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;