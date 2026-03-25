import { CheckCircle2, Bot, Code, Rocket, Globe, PenTool, Layout } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import SpotlightCard from "../shared/SpotlightCard";
import { services } from "../../data/services";

const ICON_MAP: Record<string, any> = {
  bot: Bot,
  code: Code,
  rocket: Rocket,
  globe: Globe,
  "pen-tool": PenTool,
  layout: Layout,
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-surface">
      <div className="container-xl">
        <SectionHeader
          eyebrow="What I Do"
          title="Services Focused on Outcomes"
          description="I don't just write code — I solve business problems. Every engagement is measured by the impact it creates."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = ICON_MAP[service.icon] || Code;
            return (
              <SpotlightCard key={service.id} className="group flex flex-col items-start text-left p-8">
                {/* Premium Icon Container (Process Style) */}
                <div className="relative mb-8">
                  <div className="absolute -inset-4 bg-brand-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    {/* Circle Background */}
                    <div className="absolute inset-0 rounded-2xl bg-surface-secondary border border-default shadow-sm group-hover:border-brand-500/50 group-hover:shadow-brand-500/20 transition-all duration-300 transform group-hover:rotate-6" />
                    
                    <div className="relative z-10 p-4 rounded-xl bg-brand-500/5 text-secondary group-hover:text-brand-500 transition-colors">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-primary mb-3 text-xl font-bold transition-colors group-hover:text-brand-500">
                    {service.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Outcomes List */}
                <div className="mt-auto w-full space-y-3 pt-6 border-t border-default/50">
                  {service.outcomes.map((outcome) => (
                    <div key={outcome} className="flex gap-2 text-sm">
                      <CheckCircle2 size={14} className="text-brand-500 flex-shrink-0" />
                      <span className="text-secondary font-medium">{outcome}</span>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
