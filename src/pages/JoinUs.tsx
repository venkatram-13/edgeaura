import { Users, Target, Code, Crown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactOverlay from "@/components/ContactOverlay";
import { ApplicationForm } from "@/components/ApplicationForm";
import { useState } from "react";

const JoinUs = () => {
  const [showContactOverlay, setShowContactOverlay] = useState(false);
  const roles = [
    {
      icon: Target,
      title: "Advisor — \"Guide the Mission.\"",
      engagement: "4–6 hrs/month",
      duration: "6–12 months",
      cadence: "Monthly review + optional sync",
      summary:
        "Strategic and technical mentors who help refine EdgeAura's direction, evaluate architecture decisions, and connect us with the broader innovation network.",
      responsibilities: [
        "Join design or strategy reviews",
        "Offer feedback on hardware, firmware, and architecture",
        "Facilitate partnerships, introductions, or grant insights",
      ],
      requirements: ["LinkedIn and GitHub URLs are mandatory", "Resume not required"],
      idealFor: "Senior engineers, professors, domain experts, or technical advisors",
      cta: "Join as Advisor",
    },
    {
      icon: Code,
      title: "Collaborator — \"Build with Precision.\"",
      engagement: "8–12 hrs/week",
      duration: "4–6 months",
      cadence: "Weekly sync + bi-weekly lab review",
      summary: "Hands-on contributors who build real EdgeAura modules — firmware, HDL design, analytics, or testing.",
      responsibilities: [
        "Work on assigned projects or test benches",
        "Contribute to prototypes and documentation",
        "Collaborate asynchronously via EdgeAura Labs channels",
      ],
      requirements: ["Resume mandatory", "GitHub/LinkedIn optional"],
      idealFor: "Embedded engineers, FPGA developers, IoT researchers, or cybersecurity specialists",
      cta: "Join as Collaborator",
    },
    {
      icon: Crown,
      title: "Lead Collaborator — \"Own and Evolve.\"",
      engagement: "15–25 hrs/week",
      duration: "6–12 months",
      cadence: "Weekly roadmap sync + mid-week checkpoint",
      summary: "Lead a subsystem — firmware, FPGA, or cloud-edge integration — and mentor others under that track.",
      responsibilities: [
        "Define milestones, guide module development",
        "Review pull requests, verify test outcomes",
        "Participate in roadmap planning and technical design",
        "Eligible for co-founder or leadership track after milestone validation",
      ],
      requirements: ["Resume mandatory", "GitHub/LinkedIn recommended"],
      idealFor: "Senior developers, hardware architects, and system engineers with leadership mindset",
      cta: "Apply for Lead Collaborator Role",
    },
  ];

  const culturePrinciples = [
    {
      title: "Discipline",
      description: "Security isn't an afterthought; it's a routine.",
    },
    {
      title: "Curiosity",
      description: "Every module starts with a question worth answering.",
    },
    {
      title: "Integrity",
      description: "Every design choice respects ethics and trust.",
    },
  ];

  return (
    <>
      <Navbar onContactClick={() => setShowContactOverlay(true)} />
      <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-slide-up">
            <Users className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Build the Future of Trust with Us
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-4">
              EdgeAura isn't hiring. We're inviting minds.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              We believe the future of secure hardware won't come from large corporations but from small, focused groups who care about doing things right.
              If you think in circuits, code, or systems — and you believe technology should earn trust — EdgeAura is where you belong.
            </p>
          </div>
        </div>
      </section>

      {/* Collaboration Tiers */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Choose how you'd like to build with us.</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {roles.map((role, idx) => (
              <div
                key={idx}
                className="p-6 border border-border rounded-2xl bg-card hover:border-primary hover:shadow-[0_0_30px_rgba(0,245,160,0.15)] transition-all duration-300"
              >
                <role.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{role.title}</h3>

                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <p>
                    <span className="font-semibold text-foreground">Engagement:</span> {role.engagement}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Duration:</span> {role.duration}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Cadence:</span> {role.cadence}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{role.summary}</p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-foreground mb-2">Responsibilities:</p>
                  <ul className="space-y-1">
                    {role.responsibilities.map((resp, respIdx) => (
                      <li key={respIdx} className="text-xs text-muted-foreground flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-foreground mb-2">Requirements:</p>
                  <ul className="space-y-1">
                    {role.requirements.map((req, reqIdx) => (
                      <li key={reqIdx} className="text-xs text-muted-foreground flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  <span className="font-semibold text-foreground">Ideal For:</span> {role.idealFor}
                </p>

                <Button className="w-full bg-gradient-to-r from-secondary to-primary hover:shadow-[0_0_20px_rgba(0,245,160,0.3)]">
                  {role.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <ApplicationForm />
        </div>
      </section>

      {/* Engagement Snapshot */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-8">Engagement Snapshot</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-lg">
              <thead className="bg-muted/50">
                <tr>
                  <th className="p-4 text-left text-sm font-semibold">Role</th>
                  <th className="p-4 text-left text-sm font-semibold">Engagement</th>
                  <th className="p-4 text-left text-sm font-semibold">Duration</th>
                  <th className="p-4 text-left text-sm font-semibold">Cadence</th>
                  <th className="p-4 text-left text-sm font-semibold">Focus</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="p-4 text-sm">Advisor</td>
                  <td className="p-4 text-sm text-muted-foreground">4–6 hrs/mo</td>
                  <td className="p-4 text-sm text-muted-foreground">6–12 months</td>
                  <td className="p-4 text-sm text-muted-foreground">Monthly sync</td>
                  <td className="p-4 text-sm text-muted-foreground">Guidance & network</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-4 text-sm">Collaborator</td>
                  <td className="p-4 text-sm text-muted-foreground">8–12 hrs/wk</td>
                  <td className="p-4 text-sm text-muted-foreground">4–6 months</td>
                  <td className="p-4 text-sm text-muted-foreground">Weekly/bi-weekly</td>
                  <td className="p-4 text-sm text-muted-foreground">Module contribution</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-4 text-sm">Lead Collaborator</td>
                  <td className="p-4 text-sm text-muted-foreground">15–25 hrs/wk</td>
                  <td className="p-4 text-sm text-muted-foreground">6–12 months</td>
                  <td className="p-4 text-sm text-muted-foreground">Weekly roadmap sync</td>
                  <td className="p-4 text-sm text-muted-foreground">Ownership & leadership</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Simple. Transparent. Collaborative.</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              "Fill out the short application form",
              "Share your resume / GitHub / portfolio",
              "Complete a trial micro-task aligned to your skillset",
              "Onboard into EdgeAura Labs workspace",
            ].map((step, idx) => (
              <div key={idx} className="text-center p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <div className="text-2xl font-bold text-primary mb-2">{idx + 1}</div>
                <p className="text-sm text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mb-6">
            We value precision, curiosity, and integrity over titles. Every contribution is documented and credited — always.
          </p>

          <blockquote className="text-center text-xl italic text-foreground border-l-4 border-primary pl-4 py-2">
            "We don't build for headlines. We build for history."
          </blockquote>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-4">Built on Three Principles.</h2>
          <p className="text-center text-muted-foreground mb-12">
            EdgeAura is a space where engineers grow into innovators and innovators become founders.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {culturePrinciples.map((principle, idx) => (
              <div key={idx} className="text-center p-6 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="text-xl font-bold mb-2 text-primary">{principle.title}</h3>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-slide-up">
            <p className="text-2xl md:text-3xl font-medium text-foreground mb-8">
              We're not hiring — we're assembling.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              If you believe in designing machines that can protect themselves, you belong here.
            </p>
            <div className="inline-block px-6 py-3 bg-background border border-primary/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Patent filings in progress • MSME Registered • CE/FCC Testing Underway
              </p>
              <p className="text-sm text-muted-foreground mt-1">© 2025 EdgeAura Labs</p>
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />
      <ContactOverlay
        isOpen={showContactOverlay}
        onClose={() => setShowContactOverlay(false)}
      />
    </>
  );
};

export default JoinUs;
