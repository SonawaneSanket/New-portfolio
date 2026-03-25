import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";
import ProjectCard from "../shared/ProjectCard";
import CaseStudyModal from "../shared/CaseStudyModal";
import { projects } from "../../data/projects";
import type { Project } from "../../types";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Next.js", value: "nextjs" },
  { label: "React", value: "react" },
  { label: "WordPress", value: "wordpress" },
  { label: "Landing Pages", value: "landing-page" },
  { label: "HTML/CSS", value: "html" },
];

export default function Projects() {
  const [active, setActive] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Featured Work"
          title="Projects That Delivered Results"
          description="Not just code — business outcomes. Each project started with a problem and ended with measurable impact."
        />

        {/* Filter tabs */}
        <div className="mb-10 flex justify-center">
          <div className="bg-surface-secondary border-default flex items-center gap-1 rounded-xl border p-1">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`relative rounded-lg px-5 py-2 text-sm font-medium transition-all duration-200 ${
                  active === f.value ? "text-white" : "text-secondary hover:text-primary"
                }`}
              >
                {active === f.value && (
                  <motion.span
                    layoutId="filter-pill"
                    className="gradient-brand absolute inset-0 rounded-lg"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={setSelectedProject}
                index={i}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
