import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Mail, MessageCircle } from "lucide-react";
import confetti from "canvas-confetti";
import SectionHeader from "../shared/SectionHeader";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

const PROJECT_TYPES = [
  "Landing Page",
  "Web Application",
  "WordPress Site",
  "API Integration",
  "Other",
];

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // Simulate send (replace with your preferred email service)
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Form submitted:", data);
    reset();
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#0ea5e9", "#8b5cf6", "#ffffff"],
    });
  };

  return (
    <section id="contact" className="section-padding bg-surface-secondary">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's Build Something Great Together"
          description="Have a project in mind? Let's talk about it. I typically respond within 24 hours."
        />

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-5">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 md:col-span-2"
          >
            <div>
              <h3 className="text-primary mb-2 text-lg font-bold">Start a Conversation</h3>
              <p className="text-secondary text-sm leading-relaxed">
                Whether it's a quick question or a full project brief — my inbox is open.
              </p>
            </div>

            <a
              href="mailto:sanket28896@gmail.com"
              className="bg-surface border-default hover:border-brand-500/40 group flex items-center gap-3 rounded-xl border p-4 transition-colors"
            >
              <span className="bg-brand-500/10 flex h-10 w-10 items-center justify-center rounded-lg">
                <Mail size={18} className="text-brand-500" />
              </span>
              <div>
                <div className="text-muted text-xs">Email me at</div>
                <div className="text-primary group-hover:text-brand-500 text-sm font-medium transition-colors">
                  sanket28896@gmail.com
                </div>
              </div>
            </a>

            <div className="bg-surface border-default flex items-center gap-3 rounded-xl border p-4">
              <span className="bg-brand-500/10 flex h-10 w-10 items-center justify-center rounded-lg">
                <MessageCircle size={18} className="text-brand-500" />
              </span>
              <div>
                <div className="text-muted text-xs">Response time</div>
                <div className="text-primary text-sm font-medium">Within 24 hours</div>
              </div>
            </div>

            <div className="bg-brand-500/8 border-brand-500/20 rounded-xl border p-4">
              <p className="text-secondary text-sm">
                🟢 <strong className="text-primary">Currently available</strong> for new projects
                and collaborations.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-surface border-default shadow-card space-y-5 rounded-2xl border p-6 md:col-span-3 md:p-8"
          >
            {isSubmitSuccessful && (
              <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-sm font-medium text-green-600 dark:text-green-400">
                ✅ Message sent! I'll get back to you within 24 hours.
              </div>
            )}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-muted mb-1.5 block text-xs font-semibold tracking-wider uppercase">
                  Name
                </label>
                <input
                  {...register("name")}
                  placeholder="Your name"
                  className="bg-surface-secondary border-default text-primary placeholder:text-muted focus:border-brand-500/50 w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none"
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
              </div>
              <div>
                <label className="text-muted mb-1.5 block text-xs font-semibold tracking-wider uppercase">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="you@company.com"
                  className="bg-surface-secondary border-default text-primary placeholder:text-muted focus:border-brand-500/50 w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="text-muted mb-1.5 block text-xs font-semibold tracking-wider uppercase">
                Project Type
              </label>
              <select
                {...register("projectType")}
                className="bg-surface-secondary border-default text-primary focus:border-brand-500/50 w-full cursor-pointer appearance-none rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none"
              >
                <option value="">Select project type...</option>
                {PROJECT_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {errors.projectType && (
                <p className="mt-1 text-xs text-red-500">{errors.projectType.message}</p>
              )}
            </div>

            <div>
              <label className="text-muted mb-1.5 block text-xs font-semibold tracking-wider uppercase">
                Message
              </label>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Tell me about your project, timeline, and goals..."
                className="bg-surface-secondary border-default text-primary placeholder:text-muted focus:border-brand-500/50 w-full resize-none rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="gradient-brand flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />{" "}
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
