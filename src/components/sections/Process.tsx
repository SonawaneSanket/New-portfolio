import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import { processSteps } from "../../data/process";

const ICON_MAP: Record<string, any> = {
  search: Search,
  "pen-tool": PenTool,
  code: Code,
  rocket: Rocket,
};

export default function Process() {
  return (
    <section id="process" className="section-padding bg-surface-secondary relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-xl relative z-10">
        <SectionHeader
          eyebrow="How I Work"
          title="From Idea to Shipped Product"
          description="A clear, collaborative process designed to reduce surprises and maximise results."
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative mt-16">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-default opacity-30" />

          {processSteps.map((step, idx) => {
            const Icon = ICON_MAP[step.icon] || Code;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className="absolute -inset-4 bg-brand-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    {/* Circle Background */}
                    <div className="absolute inset-0 rounded-3xl bg-surface border border-default shadow-sm group-hover:border-brand-500/50 group-hover:shadow-brand-500/20 transition-all duration-300 transform group-hover:rotate-6" />
                    
                    <div className="relative z-10 p-5 rounded-2xl bg-brand-500/5 text-secondary group-hover:text-brand-500 transition-colors">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>

                    {/* Number Badge */}
                    <div className="absolute -right-2 -top-2 w-8 h-8 rounded-xl bg-surface-secondary border border-default flex items-center justify-center text-xs font-bold text-muted shadow-sm group-hover:text-brand-500 group-hover:border-brand-500/30 transition-colors">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="px-4">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Connector */}
                {idx < processSteps.length - 1 && (
                  <div className="md:hidden w-[2px] h-12 bg-gradient-to-b from-border to-transparent my-4" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
