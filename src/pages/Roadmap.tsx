import { Lightbulb, Wrench, Rocket, Sparkles, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Roadmap = () => {
  const phases = [
    {
      icon: Lightbulb,
      phase: "Phase 1",
      title: "Research & Foundation",
      period: "Q1–Q2 2025",
      subtitle: "Laying the Core.",
      points: [
        "Research validation with university partners and labs",
        "Architecture definition for secure edge compute and device identity",
        "Provisional patent filings initiated",
        "Sentinel DevKit v1 prototype assembled and tested on bench",
        "MSME registration and compliance path initiated",
      ],
      impact: "EdgeAura transitions from vision to working silicon.",
    },
    {
      icon: Wrench,
      phase: "Phase 2",
      title: "Pilot & Partnerships",
      period: "Q3–Q4 2025",
      subtitle: "Turning prototypes into pilots.",
      points: [
        "Field testing of Sentinel DevKit v1 in research & industrial sites",
        "Early collaboration with partners for OTA and telemetry validation",
        "CE/FCC pre-compliance testing underway",
        "Patent claims refinement and extended filing",
        "Design of Sentinel DevKit v2 — modular communication stack with RS-485, Wi-Fi, and LoRa",
      ],
      impact: "EdgeAura proves reliability across lab and field.",
    },
    {
      icon: Rocket,
      phase: "Phase 3",
      title: "Productization & Scale",
      period: "Q1–Q3 2026",
      subtitle: "From pilot to platform.",
      points: [
        "Launch of EdgeAura Labs Collaboration Program",
        "Integration with industrial & agritech OEMs",
        "Multi-node pilot deployments (50–100 units)",
        "Submission for CE/FCC certification",
        "Investor and incubation outreach for expansion",
      ],
      impact: "EdgeAura scales from prototype to trusted platform.",
    },
    {
      icon: Sparkles,
      phase: "Phase 4",
      title: "Vision 2027+ — The Autonomous Edge",
      period: "2027+",
      subtitle: "From protection to perception.",
      points: [
        "The next era of EdgeAura is self-defending and self-learning",
        "A distributed network of intelligent nodes that detect, adapt, and evolve together",
        "Each device strengthens the others, building a collective trust fabric that spans industries",
      ],
      impact: "The edge will think, protect, and evolve on its own.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              The Path Ahead
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From research spark to reliable edge intelligence.
            </p>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              EdgeAura's journey follows a single principle — evolution through precision.
              Every milestone reflects a step from concept to confidence, from trusted circuits to trusted networks.
              We're not chasing trends — we're building foundations that endure.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-12">
            {phases.map((phase, idx) => (
              <div
                key={idx}
                className="relative pl-8 md:pl-16 border-l-2 border-primary/30 hover:border-primary transition-colors"
              >
                <div className="absolute -left-5 top-0 w-10 h-10 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                  <phase.icon className="h-5 w-5 text-primary" />
                </div>

                <div className="pb-8">
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-primary">{phase.phase}</span>
                    <h3 className="text-2xl md:text-3xl font-bold mt-1">{phase.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{phase.period}</p>
                    <p className="text-foreground font-medium mt-2 italic">{phase.subtitle}</p>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {phase.points.map((point, pointIdx) => (
                      <li key={pointIdx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-secondary mr-2 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-secondary/10 to-primary/10 border border-primary/20 rounded-lg">
                    <p className="text-sm font-medium text-primary">{phase.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Validation */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-slide-up text-center">
            <Shield className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Trust isn't claimed — it's earned.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              EdgeAura operates under patent filings in progress, aligned with global compliance frameworks including CE, FCC, and upcoming Cyber-Resilience mandates.
              Our legal, research, and technical foundations evolve together — ensuring our innovation is as defensible as our devices.
            </p>
            <div className="inline-block px-6 py-3 bg-background border border-primary/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Patent Filings in Progress • MSME Registered • CE/FCC Testing Underway
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Whole Vision — One Line</h2>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
              EdgeAura is not just a device or platform — it's the belief that trust should live where data is born.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A world where every edge system can protect itself, learn from experience, and operate with human-level reliability — that's the EdgeAura vision.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Follow our journey. Collaborate with us.</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              From prototypes to pilots, every phase of EdgeAura grows through collaboration.
              Join our partner network, contribute to testing programs, or explore our upcoming DevKit releases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-secondary to-primary hover:shadow-[0_0_30px_rgba(0,245,160,0.3)]"
              >
                <a href="/join-us">Join Collaboration</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <a href="mailto:contact@edgeaura.ai">Request Pilot Access</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Roadmap;
