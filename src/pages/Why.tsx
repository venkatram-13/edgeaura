import { Shield, TrendingUp, Heart, Clock, Scale, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Why = () => {
  return (
    <main className="min-h-screen">
      {/* Problem Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              The edge runs our world — yet it was never built for defense.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Factories, farms, and labs still rely on legacy protocols that trust everything and protect nothing.
              Over 46,000 industrial devices remain exposed online, transmitting control data in plain text.
              Every day, attacks on operational systems rise — costing industries millions in downtime and safety risks.
            </p>
            <p className="text-xl font-medium text-foreground">
              The edge is fragile. Trust can't live in the cloud anymore.
            </p>
          </div>
        </div>
      </section>

      {/* Market Reality */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-slide-up">
            <div className="flex items-center space-x-3 mb-6">
              <TrendingUp className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">
                A $244 B market. Billions of devices. One missing ingredient: trust.
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The IoT and edge computing markets are expanding faster than their defenses.
              Cloud platforms are shutting down, and legacy giants protect outdated ecosystems.
              SMEs — who make up most of the world's factories and research labs — are left behind.
            </p>
            <p className="text-lg text-foreground">
              EdgeAura stands at the intersection of urgency and opportunity,
              delivering what the market finally demands: affordable, hardware-anchored security.
            </p>
          </div>
        </div>
      </section>

      {/* Our Why */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-slide-up text-center">
            <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Edge Deserves a Guardian
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We built EdgeAura for one reason — to make the edge trustworthy again.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              EdgeAura was born from a belief that security shouldn't depend on perfect connectivity or cloud uptime.
              We bring hardware-rooted trust and intelligence directly to the devices that operate our world —
              factories, farms, and critical systems where failure isn't an option.
            </p>
            <p className="text-xl font-semibold text-foreground">
              Security first. Connectivity optional.
            </p>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <div className="animate-slide-up mb-12">
            <Clock className="h-10 w-10 text-primary mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The world is finally ready for the edge to evolve.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Until now, hardware-grade security was costly, complex, and reserved for enterprises.
              But regulation, technology maturity, and market urgency have changed everything.
              The cloud-first era is ending — the trust-first era begins here.
            </p>
            <p className="text-lg font-medium text-foreground">
              EdgeAura didn't arrive early. It arrived when the world needed it most.
            </p>
          </div>

          {/* Timeline */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { year: "2018", label: "Cloud-first hype" },
              { year: "2023", label: "Cloud exits (Google IoT Core)" },
              { year: "2025", label: "Hardware mandates" },
              { year: "2025+", label: "EdgeAura Era Begins" },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Tailwinds */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-slide-up">
            <Scale className="h-10 w-10 text-primary mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Security-by-design is no longer optional — it's the law.
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">EU Cyber Resilience Act (2024)</p>
                  <p className="text-muted-foreground">Mandates secure-by-hardware design for connected products.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">U.S. Critical Infrastructure Mandates (2025+)</p>
                  <p className="text-muted-foreground">Hardware attestation for government systems.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Cyber Insurance Standards</p>
                  <p className="text-muted-foreground">Premiums now favor TPM-equipped and attested devices.</p>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground">
              EdgeAura's architecture aligns seamlessly with these mandates,
              positioning it ahead of compliance curves rather than chasing them.
            </p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-slide-up">
            <Lock className="h-12 w-12 text-primary mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-medium italic text-foreground mb-8">
              "When a factory's heartbeat stops, it's not a network issue — it's a trust issue."
            </blockquote>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              EdgeAura was designed to ensure that heartbeat never stops.
              We stand for reliability, integrity, and resilience — not just as features,
              but as fundamentals for a secure industrial future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-secondary to-primary hover:shadow-[0_0_30px_rgba(0,245,160,0.3)]"
              >
                <a href="/technology">Discover Our Technology</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <a href="mailto:contact@edgeaura.ai">Request Investor Deck (NDA)</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Why;
