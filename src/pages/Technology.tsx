import { Lock, Zap, Wifi, Brain, Users, Cpu, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Technology = () => {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Technology that breathes trust.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6">
              EdgeAura isn't just engineered — it's orchestrated.
              Every pulse of current, every byte of logic, every handshake across the network carries one emotion: trust.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              Built on a secure-silicon foundation and refined through edge intelligence, our systems combine physics, firmware, and foresight into one living organism — one that learns, adapts, and protects without needing permission from the cloud.
            </p>
            <p className="text-xl font-semibold text-foreground italic">
              Born in silicon. Raised in code. Guarded by design.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simplicity outside. Conscious complexity within.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "Integrity at Source",
                description:
                  "Each device begins life with a cryptographically unique identity — an unforgeable birthmark etched in secure silicon.",
              },
              {
                icon: Zap,
                title: "Local Intelligence",
                description:
                  "Custom edge compute cores perform in-device inference and analytics in under 50 ms — no constant cloud tether.",
              },
              {
                icon: Wifi,
                title: "Adaptive Connectivity",
                description:
                  "Modular interfaces — RS-485, LoRa, BLE, Wi-Fi, and more — translate legacy languages into tomorrow's secure dialects.",
              },
            ].map((principle, idx) => (
              <div
                key={idx}
                className="p-6 border border-border rounded-xl hover:border-primary hover:shadow-[0_0_30px_rgba(0,245,160,0.15)] transition-all duration-300"
              >
                <principle.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{principle.title}</h3>
                <p className="text-muted-foreground">{principle.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-lg text-muted-foreground mt-8 italic">
            Think of it as a conversation between electricity and intelligence — moderated by EdgeAura.
          </p>
        </div>
      </section>

      {/* The Stack */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-slide-up text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Layers of precision. One pulse of trust.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We call it <span className="font-semibold text-foreground">The Sentinel Stack</span> — a layered framework where every stratum adds resilience.
              From encrypted bus transactions to edge-level micro-learning, each layer communicates with the next through controlled entropy and verified intent.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4 mb-8">
            {["Trust", "Compute", "Connect", "Learn", "Evolve"].map((layer, idx) => (
              <div
                key={idx}
                className="w-full max-w-md p-4 bg-gradient-to-r from-secondary/20 to-primary/20 border border-primary/30 rounded-lg text-center font-semibold hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {layer}
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground italic">
            We don't publish the blueprint — but you'll feel its discipline when you hold the device. It hums differently.
          </p>
          <p className="text-center text-lg font-medium text-foreground mt-4">
            Hardware that listens. Firmware that thinks.
          </p>
        </div>
      </section>

      {/* Intelligence in Motion */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-slide-up">
            <Brain className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Learning at the edge — where milliseconds matter.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              EdgeAura nodes process sensor data, anomalies, and behavior patterns right where they occur.
              Our embedded neural micro-routines evolve silently — optimizing power, precision, and protection in real time.
            </p>
            <p className="text-lg text-foreground font-medium">
              They don't wait for permission. They just act — fast, safe, and traceable.
            </p>
          </div>
        </div>
      </section>

      {/* Under the Hood */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="animate-slide-up mb-8">
            <Cpu className="h-10 w-10 text-primary mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A glimpse beneath the glass — without giving away the gears.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "240 MHz dual-core edge compute optimized for low-latency inference",
              "Secure-element co-processor for identity, attestation & entropy",
              "Dual-slot update engine with rollback assurance",
              "Adaptive telemetry bus for RS-485/LoRa hybrid routing",
              "Power envelope < 500 mW with dynamic trust throttling",
            ].map((spec, idx) => (
              <div
                key={idx}
                className="p-4 border border-border rounded-lg hover:border-primary transition-colors"
              >
                <Shield className="h-6 w-6 text-secondary mb-2" />
                <p className="text-sm text-muted-foreground">{spec}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground italic mt-8">
            Enough to intrigue a builder. Not enough to brief a competitor.
          </p>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-slide-up">
            <Users className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Designed by engineers, perfected through collaboration.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl mx-auto">
              EdgeAura isn't a closed system; it's a growing ecosystem of minds.
              We invite researchers, firmware developers, and system integrators to explore, extend, and experiment with us.
            </p>
            <p className="text-lg text-foreground mb-8">
              Bring your protocols. Bring your vision.
              We'll meet you halfway — in the language of secure connectivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-secondary to-primary hover:shadow-[0_0_30px_rgba(0,245,160,0.3)]"
              >
                <a href="/join-us">Join EdgeAura Labs</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <a href="mailto:contact@edgeaura.ai">Collaborate Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Technology;
