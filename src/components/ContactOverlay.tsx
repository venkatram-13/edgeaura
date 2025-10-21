import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface ContactOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactOverlay = ({ isOpen, onClose }: ContactOverlayProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Thank you for reaching out. The EdgeAura Labs team will connect with you soon.");
    setFormData({ name: "", email: "", organization: "", message: "" });
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg mx-4 bg-card border border-border rounded-2xl p-8 shadow-[0_0_50px_rgba(0,245,160,0.15)]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Send a Message
          </h2>
          <p className="text-muted-foreground text-sm">
            We'd love to hear from you — whether it's about collaboration, partnerships, or ideas that align with our mission.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              required
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-background border-border focus:border-primary"
            />
          </div>

          <div>
            <Input
              required
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-background border-border focus:border-primary"
            />
          </div>

          <div>
            <Input
              placeholder="Your company or institution (optional)"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              className="bg-background border-border focus:border-primary"
            />
          </div>

          <div>
            <Textarea
              required
              placeholder="Type your message here…"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-background border-border focus:border-primary min-h-[120px]"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-secondary to-primary hover:shadow-[0_0_30px_rgba(0,245,160,0.3)] transition-all duration-300"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-4">
          Your information is never shared. EdgeAura respects privacy and confidentiality.
        </p>
      </div>
    </div>
  );
};

export default ContactOverlay;
