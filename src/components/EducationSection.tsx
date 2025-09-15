import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Computer Application",
      institution: "Shri Shankaracharya College of Engineering and Technology",
      period: "July 2010 — June 2013",
      type: "master"
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "School Of Studies",
      period: "July 2007 — June 2010",
      type: "bachelor"
    }
  ];

  const certification = {
    name: "Azure-900",
    provider: "Microsoft Azure",
    type: "Cloud Fundamentals"
  };

  return (
    <section className="bg-gradient-accent py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">Education & Certification</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </h3>
              {education.map((edu, index) => (
                <Card key={index} className="p-6 shadow-soft animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="mb-3">
                    <h4 className="text-lg font-semibold text-primary">{edu.degree}</h4>
                    <p className="text-foreground font-medium">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {edu.period}
                  </div>
                  <Badge variant="secondary" className="mt-3 text-xs">
                    {edu.type === 'master' ? 'Master\'s Degree' : 'Bachelor\'s Degree'}
                  </Badge>
                </Card>
              ))}
            </div>

            {/* Certification */}
            <div>
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2 mb-6">
                <Award className="h-5 w-5 text-primary" />
                Certification
              </h3>
              <Card className="p-6 shadow-soft animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-center">
                  <div className="mb-4">
                    <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-primary">{certification.name}</h4>
                    <p className="text-foreground font-medium">{certification.provider}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {certification.type}
                  </Badge>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;