import { useCounter } from "../../hooks/useCounter";
import { motion } from "framer-motion";

const STATS = [
  {
    end: 30,
    suffix: "+",
    label: "Projects Delivered",
    description: "Across startups & enterprises",
  },
  { end: 3, suffix: "+", label: "Years Experience", description: "Building production-grade apps" },
  { end: 15, suffix: "+", label: "Technologies", description: "React, Next.js, NestJS & more" },
  {
    end: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Based on post-project reviews",
  },
];

function StatCard({
  end,
  suffix,
  label,
  description,
  index,
}: {
  end: number;
  suffix: string;
  label: string;
  description: string;
  index: number;
}) {
  const { count, ref } = useCounter(end, 2000);

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="bg-surface border-default shadow-card hover:shadow-card-hover group flex flex-col items-center rounded-2xl border p-8 text-center transition-all duration-300"
    >
      <div className="gradient-text mb-2 text-4xl font-bold tabular-nums md:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="text-primary mb-1 text-base font-semibold">{label}</div>
      <div className="text-muted text-sm">{description}</div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="section-padding bg-surface-secondary">
      <div className="container-xl">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
