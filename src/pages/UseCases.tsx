import { FlaskConical, Factory, Leaf, Heart, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const UseCases = () => {
  const useCases = [
    {
      icon: FlaskConical,
      title: "Research Labs — From Prototype to Proof",
      subtitle: "Building the edge, one experiment at a time.",
      challenge:
        "Researchers and universities often lack affordable, secure edge hardware for prototyping and IoT validation. Simulations can't capture real-world noise, latency, or interference — and off-the-shelf boards rarely meet compliance or security needs.",
      solution:
        "EdgeAura gives labs a secure, modular testbed for embedded experimentation. It enables cryptographic identity, safe OTA updates, and data-integrity tracking — all while staying open, programmable, and affordable.",
      impact: "The ideal bridge between academic research and industrial deployment.",
      bgColor: "from-blue-900/20 to-cyan-900/20",
    },
    {
      icon: Factory,
      title: "Industrial Edge — Where Downtime Costs Millions",
      subtitle: "Keeping production lines alive — securely.",
      challenge:
        "Legacy PLCs and serial networks still dominate industrial automation, leaving factories vulnerable to intrusion or failure.",
      solution:
        "By anchoring identity and update integrity directly in hardware, EdgeAura ensures every node in the chain remains authenticated and operational — even in network-isolated facilities.",
      impact: "Consistent uptime. Verified devices. Trusted operations.",
      bgColor: "from-gray-800/20 to-gray-900/20",
    },
    {
      icon: Leaf,
      title: "Agritech Systems — Intelligence Beyond Connectivity",
      subtitle: "When networks fail, fields shouldn't.",
      challenge:
        "Remote farms depend on unstable connections. When the cloud drops, automation stops.",
      solution:
        "Our edge nodes analyze and validate locally — syncing only when conditions allow. They maintain decision loops offline, protecting data authenticity even miles away from a signal.",
      impact: "Offline intelligence. Authentic data. Sustainable farming.",
      bgColor: "from-green-900/20 to-emerald-900/20",
    },
    {
      icon: Heart,
      title: "Medtech Devices — Precision You Can Trust",
      subtitle: "In healthcare, every signal matters.",
      challenge:
        "Medical IoT devices transmit sensitive readings through shared channels, risking tampering or misreads.",
      solution:
        "With hardware-anchored trust, every byte is authenticated from the moment it leaves a patient-connected device. EdgeAura safeguards medical data without slowing diagnostics or compliance.",
      impact: "When trust is tangible, care becomes continuous.",
      bgColor: "from-red-900/20 to-rose-900/20",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Built for the Real World
            </h1>
            <p className="text-lg text-muted-foreground">
              EdgeAura serves diverse domains with one shared requirement: trust at the edge.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-2xl border border-border bg-gradient-to-br ${useCase.bgColor} hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,160,0.15)]`}
              >
                <useCase.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground italic mb-4">{useCase.subtitle}</p>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">Challenge:</p>
                    <p className="text-sm text-muted-foreground">{useCase.challenge}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">What EdgeAura Changes:</p>
                    <p className="text-sm text-muted-foreground">{useCase.solution}</p>
                  </div>

                  <div className="pt-2 border-t border-border/50">
                    <p className="text-sm font-medium text-primary">{useCase.impact}</p>
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
            <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Trust, engineered and validated.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              EdgeAura's architecture and systems are under active patent filings and CE/FCC compliance validation.
              Our solutions are developed in collaboration with academic institutions, research labs, and industrial partners.
              We believe transparency builds trust — and trust builds technology.
            </p>

            <div className="inline-block px-6 py-3 bg-background border border-primary/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Patent filings in progress • MSME Registered • CE/FCC Testing Underway
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's bring trust to your domain.</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're welcoming collaborations from research institutions, innovators, and system integrators.
              Whether it's a joint pilot, a security study, or co-development, EdgeAura Labs is the place to start.
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
                <a href="mailto:contact@edgeaura.ai">Contact EdgeAura Labs</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UseCases;
