import { useEffect } from "react";
import ResumeHeader from "@/components/ResumeHeader";
import ProfileSection from "@/components/ProfileSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";

const Index = () => {
  useEffect(() => {
    document.title = "Aditya Chitmitwar - Senior Software Engineer";
  }, []);

  return (
    <div id="resume-content" className="min-h-screen bg-background">
      <ResumeHeader />
      <ProfileSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      
      {/* Footer */}
      <footer className="bg-primary py-8 text-center text-primary-foreground">
        <div className="container mx-auto px-4">
          <p className="text-sm opacity-80">
            © 2024 Aditya Chitmitwar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;