import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("mb-12", align === "center" ? "text-center" : "text-left", className)}
    >
      {eyebrow && (
        <span className="text-brand-500 bg-brand-500/10 mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-widest uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-primary mb-4 text-3xl leading-tight font-bold md:text-4xl">{title}</h2>
      {description && (
        <p className="text-secondary mx-auto max-w-2xl text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
