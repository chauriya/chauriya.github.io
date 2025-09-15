import { Card } from "@/components/ui/card";

const ProfileSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <Card className="p-8 shadow-medium">
            <h2 className="mb-6 text-3xl font-bold text-primary">Professional Profile</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">12+ years of experience</strong> in full-stack web development with expertise in JavaScript,
                Node.js, React, Vue.js, Angular, GraphQL, REST APIs, and databases (MySQL,
                PostgreSQL, MongoDB).
              </p>
              <p>
                <strong className="text-foreground">Proficient in</strong> Elasticsearch, Docker & Kubernetes deployments, CI/CD pipelines,
                and cloud platforms (Azure DevOps, AWS, GCP).
              </p>
              <p>
                <strong className="text-foreground">Strong background in</strong> automated testing (Cypress, Nightwatch, Jest, Mocha, Chai,
                Postman, JMeter).
              </p>
              <p>
                <strong className="text-foreground">Experienced in</strong> design patterns, scalable architectures, and server administration
                with a focus on quality and timely delivery.
              </p>
              <p>
                <strong className="text-foreground">Excellent</strong> problem-solving, leadership, and communication skills with proven
                ability to translate requirements into effective solutions.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;