import { motion } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";
import { skillGroups } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface-secondary">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Skills & Technologies"
          description="A curated set of modern tools I use to ship great products — from pixel-perfect UIs to scalable APIs."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-surface border-default shadow-card rounded-2xl border p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-primary text-lg font-bold">{group.category}</h3>
              </div>
              <div className="space-y-3">
                {group.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: gi * 0.1 + si * 0.05 }}
                    className="bg-surface-secondary hover:bg-brand-500/5 hover:border-brand-500/20 group flex cursor-default items-center gap-3 rounded-xl border border-transparent p-3 transition-all"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-secondary group-hover:text-primary text-sm font-medium transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
