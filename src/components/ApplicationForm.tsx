import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  github_link: z.string().url("Invalid URL").optional().or(z.literal("")),
  linkedin_link: z.string().url("Invalid URL").optional().or(z.literal("")),
  resume_url: z.string().url("Invalid URL").optional().or(z.literal("")),
  role: z.enum(["Advisor", "Collaborator", "Lead Collaborator"], {
    required_error: "Please select a role",
  }),
  reason: z.string().min(50, "Please provide at least 50 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export const ApplicationForm = () => {
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      github_link: "",
      linkedin_link: "",
      resume_url: "",
      role: undefined,
      reason: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      // Insert into database
      const { error: insertError } = await supabase.from("applications").insert({
        name: values.name,
        email: values.email,
        github_link: values.github_link || null,
        linkedin_link: values.linkedin_link || null,
        resume_url: values.resume_url || null,
        role: values.role,
        reason: values.reason,
      });

      if (insertError) throw insertError;

      // Send confirmation email
      const { error: emailError } = await supabase.functions.invoke(
        "send-application-email",
        {
          body: {
            name: values.name,
            email: values.email,
            role: values.role,
          },
        }
      );

      if (emailError) {
        console.error("Email error:", emailError);
        // Don't fail the submission if email fails
      }

      // Show success dialog
      setShowSuccessDialog(true);
      form.reset();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to submit application",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="relative bg-background/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl" />
        <div className="relative">
          <h3 className="text-2xl font-bold text-primary mb-2">
            Apply to Join EdgeAura
          </h3>
          <p className="text-muted-foreground mb-8">
            Fill out the form below to start your journey with us
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="github_link"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>GitHub Profile</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://github.com/username"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="linkedin_link"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn Profile</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://linkedin.com/in/username"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="resume_url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Resume URL</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://drive.google.com/..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role Applying For *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Advisor">Advisor</SelectItem>
                          <SelectItem value="Collaborator">
                            Collaborator
                          </SelectItem>
                          <SelectItem value="Lead Collaborator">
                            Lead Collaborator
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="reason"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Why are you interested in working with EdgeAura? *
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your interest and what you can bring to EdgeAura..."
                        className="min-h-[150px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </Form>
        </div>
      </div>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl text-primary">
              Application Submitted Successfully!
            </DialogTitle>
            <DialogDescription className="text-base pt-4">
              Thank you for your interest in joining EdgeAura. We have received
              your application and sent a confirmation email to your inbox. Our
              team will review your submission and contact you shortly.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setShowSuccessDialog(false)} className="mt-4">
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};
