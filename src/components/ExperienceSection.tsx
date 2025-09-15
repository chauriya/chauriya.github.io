import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Development Engineer II",
      company: "LivePerson Inc.",
      location: "Pune",
      period: "June 2025 — Present",
      description: "As a Lead Engineer at LivePerson Inc., I am responsible for monitoring SLA dashboards and service health to ensure system stability, while also reviewing and maintaining the Jira board to manage team priorities effectively. My role involves responding to requests for assistance, planning and reviewing releases, and contributing to coding tasks using Angular, Vue.js, and Nest.js. In addition, I manage server maintenance and oversee deployments, including configuring and orchestrating Kubernetes workloads in GCP to support scalable and reliable application delivery.",
      technologies: ["Angular", "Vue.js", "Nest.js", "Kubernetes", "GCP", "Jira"]
    },
    {
      title: "Technical Lead",
      company: "Capita India Pvt Ltd",
      location: "India",
      period: "June 2019 — July 2025",
      description: "Lead a team of developers and oversee technical projects at Capita India Pvt Ltd. Responsible for managing the development and implementation of software solutions. Collaborate with stakeholders to gather requirements and ensure timely delivery of projects. Utilize JavaScript, Git, SQL, and DevOps tools to optimize software development processes. Provide technical guidance and mentorship to team members. Continuously improve software development practices and stay updated with industry trends.",
      technologies: ["JavaScript", "Git", "SQL", "DevOps", "Team Leadership"]
    },
    {
      title: "Senior Software Developer",
      company: "Ingram Micro SSC Pvt Ltd",
      location: "India",
      period: "September 2018 — June 2019",
      description: "Contributed to the development of software solutions at Ingram Micro SSC Pvt Ltd as a Senior Software Developer. Collaborated with cross-functional teams to deliver high-quality software products. Utilized JavaScript, Git, SQL, and DevOps tools to develop and maintain software applications. Participated in the full software development lifecycle from requirements gathering to deployment. Worked on optimizing software performance and ensuring adherence to coding standards. Mentored junior developers and provided technical assistance to team members.",
      technologies: ["JavaScript", "Git", "SQL", "DevOps", "Mentoring"]
    },
    {
      title: "Senior Software Developer",
      company: "NeoSoft Technologies",
      location: "India",
      period: "July 2016 — September 2018",
      description: "Worked as a Senior Software Developer at NeoSoft Technologies. Developed and maintained software applications using JavaScript, Git, SQL, and DevOps tools. Collaborated with cross-functional teams to gather requirements and deliver high-quality software solutions. Participated in code reviews and provided technical guidance to junior developers. Contributed to optimizing software performance and ensuring adherence to coding standards. Stayed updated with the latest software development trends and technologies.",
      technologies: ["JavaScript", "Git", "SQL", "DevOps", "Code Review"]
    }
  ];

  return (
    <section data-section="experience" className="py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-primary">Professional Experience</h2>
          
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                style={{ 
                  pageBreakInside: 'avoid',
                  breakInside: 'avoid',
                  pageBreakBefore: index === 0 ? 'auto' : 'avoid'
                }}
              >
                <Card className="p-5 shadow-soft">
                  <div className="mb-2.5 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-base font-bold text-primary">{exp.title}</h3>
                      <p className="text-sm font-semibold text-foreground">{exp.company}</p>
                    </div>
                    <div className="text-xs text-muted-foreground whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="mb-2.5 text-muted-foreground leading-relaxed text-sm" style={{ maxWidth: '100%' }}>
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs px-1.5 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;