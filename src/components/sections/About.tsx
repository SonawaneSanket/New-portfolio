import { motion } from "framer-motion";
import personalPicture from "../../assets/personal_picture.png";
import { Sparkles, Download, MessageSquare, Zap, Target, Heart } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import { scrollTo } from "../../hooks/useLenis";

const HIGHLIGHTS = [
  { icon: Zap, text: "Performance-obsessed — every millisecond counts" },
  { icon: Target, text: "Business-focused — I care about your outcomes, not just the code" },
  { icon: Heart, text: "Collaborative — clear communication throughout every project" },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-xl">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="shadow-card relative mx-auto aspect-square max-w-sm overflow-hidden rounded-2xl md:max-w-none">
              <img
                src={personalPicture}
                alt="Developer portrait"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              
              {/* Gemini Logo Overlay */}
              <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-lg bg-black/40 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-md border border-white/10">
                <Sparkles size={10} className="text-brand-400" />
                <span>Gemini Optimized</span>
              </div>
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="bg-surface shadow-card border-default absolute -right-4 -bottom-4 rounded-xl border p-4 md:-right-6 md:-bottom-6"
            >
              <div className="gradient-text text-2xl font-bold">3+ yrs</div>
              <div className="text-muted text-xs">of shipping products</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionHeader
              eyebrow="About Me"
              title="The Developer Behind the Work"
              align="left"
              className="mb-6"
            />

            <div className="text-secondary mb-8 space-y-4 leading-relaxed">
              <p>
                I'm a full-stack developer who specializes in building{" "}
                <strong className="text-primary">high-converting landing pages</strong> and{" "}
                <strong className="text-primary">scalable web applications</strong> using React,
                Next.js, and NestJS.
              </p>
              <p>
                What sets me apart? I bridge the gap between design and business — I don't just
                implement what I'm told, I push back when something won't serve your users, and
                suggest better solutions when I see them.
              </p>
              <p>
                Whether you need a lightning-fast marketing page or a complex SaaS product, I bring
                the same level of care, craft, and clarity to the work.
              </p>
            </div>

            <div className="mb-8 space-y-3">
              {HIGHLIGHTS.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <span className="bg-brand-500/10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg">
                    <Icon size={16} className="text-brand-500" />
                  </span>
                  <span className="text-secondary pt-1 text-sm">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => scrollTo("#contact")}
                className="gradient-brand flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <MessageSquare size={16} /> Let's Talk
              </button>
              <a
                href="https://drive.google.com/file/d/1v7XNFUwyxw3L8iVcECOXKtcYEr4pUaMY/view?usp=sharing"
                download
                className="border-default text-primary hover:bg-surface-secondary flex items-center justify-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition-colors"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
