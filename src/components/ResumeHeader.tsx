import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Phone, ExternalLink, Linkedin, Download } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";
import { downloadResumeAsPDF } from "@/lib/pdf-utils";

const ResumeHeader = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-primary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-8 text-primary-foreground md:flex-row md:gap-12">
            {/* Profile Image */}
            <div className="animate-scale-in flex-shrink-0">
              <div className="relative">
                <div className="h-48 w-48 overflow-hidden rounded-full border-4 border-white/20 shadow-strong md:h-56 md:w-56">
                  <img 
                    src={profileImage} 
                    alt="Aditya Chitmitwar - Senior Software Engineer"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 rounded-full bg-white/20 p-3 backdrop-blur-sm">
                  <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left animate-fade-up">
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                ADITYA CHITMITWAR
              </h1>
              <div className="mb-6 text-xl md:text-2xl font-medium opacity-90">
                Senior Software Engineer
              </div>
              
              <div className="mb-8 flex flex-wrap justify-center gap-4 text-sm md:justify-start md:text-base">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Pune, India
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  achitmitwar@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +91 91562 42019
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                <button 
                  onClick={downloadResumeAsPDF}
                  className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium transition-all hover:bg-white/20 hover:scale-105 border border-white/20"
                >
                  <Download className="h-4 w-4" />
                  Download PDF
                </button>
                <a 
                  href="https://achitmitwar.github.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium transition-all hover:bg-white/20 hover:scale-105"
                >
                  <ExternalLink className="h-4 w-4" />
                  Portfolio
                </a>
                <a 
                  href="https://linkedin.com/in/aditya-chitmitwar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium transition-all hover:bg-white/20 hover:scale-105"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeHeader;