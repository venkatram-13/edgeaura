import { Lock, Puzzle, Zap, TrendingUp, Factory, Leaf, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/edgeaura-logo.svg";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Cinematic Entry */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-secondary to-primary rounded-full blur-[120px] animate-glow-pulse"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* <div className="mb-8 animate-fade-in">
            <img src={logo} alt="EdgeAura Logo" className="h-24 w-24 mx-auto mb-6 drop-shadow-[0_0_40px_rgba(0,245,160,0.4)]" />
          </div> */}

          <div className="space-y-4 mb-8 mt-20">
            <h1 className="text-5xl md:text-7xl font-bold animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="mb-2">PLUG IN.</div>
              <div className="mb-2">POWER UP.</div>
              <div className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                LOCK DOWN.
              </div>
            </h1>
          </div>

          <div className="animate-slide-up max-w-3xl mx-auto" style={{ animationDelay: "0.4s" }}>
            <p className="text-xl md:text-2xl text-foreground mb-4">
              Hardware-rooted security for the intelligent edge.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Where industrial reliability meets cryptographic trust.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-secondary to-primary hover:shadow-[0_0_40px_rgba(0,245,160,0.4)] transition-all duration-300 text-lg px-8"
            >
              Talk to Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8"
            >
              View Investor One-Pager
            </Button>
          </div>

          <p className="text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.8s" }}>
            MSME Registered • Patent Filings in Progress
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 px-6 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              The edge wasn't built for defense.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Industrial IoT systems run the world's factories, farms, and labs — but their foundations are exposed.
              46,000+ Modbus devices remain online, unencrypted. Cloud-first platforms collapse under connectivity gaps.
              When the network fails, trust vanishes.
            </p>
            <p className="text-xl font-semibold text-foreground">
              EdgeAura exists to restore that trust.
            </p>
          </div>
        </div>
      </section>

      {/* The EdgeAura Promise */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The EdgeAura Promise</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Lock,
                title: "Security Anchored in Silicon",
                description: "Hardware root of trust. Every command signed, every device verified.",
              },
              {
                icon: Puzzle,
                title: "Modular by Design",
                description: "RS-485, Wi-Fi, BLE, LoRa — connect legacy and modern networks alike.",
              },
              {
                icon: Zap,
                title: "Offline Intelligence",
                description: "Edge AI inference <50 ms. Works when clouds and links go dark.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-6 border border-border rounded-xl hover:border-primary hover:shadow-[0_0_30px_rgba(0,245,160,0.15)] transition-all duration-300"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xl font-medium text-muted-foreground italic">
            Minimal form. Maximum assurance.
          </p>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-24 px-6 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-slide-up">
            <TrendingUp className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              A $244 B shift toward secure edge intelligence.
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-4 bg-background/50 border border-border rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">IoT Security Market</p>
                <p className="text-2xl font-bold text-primary">$141.77 B</p>
                <p className="text-xs text-muted-foreground">by 2030</p>
              </div>
              <div className="p-4 bg-background/50 border border-border rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Edge Security Market</p>
                <p className="text-2xl font-bold text-primary">$103.12 B</p>
                <p className="text-xs text-muted-foreground">by 2032</p>
              </div>
              <div className="p-4 bg-background/50 border border-border rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Ransomware Increase</p>
                <p className="text-2xl font-bold text-primary">46 %</p>
                <p className="text-xs text-muted-foreground">targeting OT systems</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Regulators demand hardware attestation.
              Insurers require device-level verification.
              The world is moving from cloud-first to trust-first — and EdgeAura leads that evolution.
            </p>
          </div>
        </div>
      </section>

      {/* Built for the Real World */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Built for the Real World</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Factory,
                title: "Industrial",
                description: "Downtime costs $50 K per hour. EdgeAura prevents it — through secure OTA and protocol hardening.",
              },
              {
                icon: Leaf,
                title: "Agritech",
                description: "In the field, connectivity dies. Our nodes stay alive — offline telemetry, LoRa security, zero loss.",
              },
              {
                icon: Heart,
                title: "Medtech",
                description: "Data defines life. Hardware-anchored identity ensures every reading is authentic.",
              },
            ].map((useCase, idx) => (
              <div
                key={idx}
                className="p-6 bg-gradient-to-br from-card to-background border border-border rounded-xl hover:border-primary hover:shadow-[0_0_30px_rgba(0,245,160,0.15)] transition-all duration-300"
              >
                <useCase.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 px-6 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center justify-center space-x-3 text-sm text-muted-foreground animate-slide-up">
            <span className="inline-block w-2 h-2 bg-primary rounded-full animate-glow-pulse"></span>
            <span>MSME Registered</span>
            <span>•</span>
            <span>Patent Filings in Progress</span>
            <span>•</span>
            <span>CE/FCC Testing</span>
            <span>•</span>
            <span>Security Lane Active</span>
            <span className="inline-block w-2 h-2 bg-primary rounded-full animate-glow-pulse"></span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Join us in securing the industrial edge.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-3xl mx-auto">
              We're building a new class of edge systems — combining hardware security, reliability, and intelligence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              If you're an investor, collaborator, or researcher who believes the edge deserves better — let's talk.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-secondary to-primary hover:shadow-[0_0_40px_rgba(0,245,160,0.4)] transition-all duration-300"
              >
                <a href="/join-us">Collaborate with EdgeAura</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <a href="mailto:contact@edgeaura.ai">Request NDA Deck</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
