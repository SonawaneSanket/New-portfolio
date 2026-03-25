import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "../../types";
import { getLenis } from "../../hooks/useLenis";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    
    const lenis = getLenis();
    if (project) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="bg-surface fixed inset-x-4 top-[5vh] bottom-[5vh] z-50 flex flex-col overflow-hidden rounded-2xl shadow-2xl md:inset-x-auto md:left-1/2 md:w-full md:max-w-3xl md:-translate-x-1/2"
          >
            {/* Header image */}
            <div className="relative h-48 flex-shrink-0 overflow-hidden md:h-64">
              <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
              >
                <X size={18} />
              </button>
              <div className="absolute bottom-4 left-6">
                <div className="mb-2 flex flex-wrap gap-2">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/20 px-2 py-0.5 text-xs text-white backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                <p className="text-white/60 text-xs mt-1 font-medium">{project.date}</p>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-8 overflow-y-auto p-6 md:p-8" data-lenis-prevent>
              {/* Problem */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-500/10 text-sm">
                    🔴
                  </span>
                  <h3 className="text-primary text-lg font-bold">The Problem</h3>
                </div>
                <p className="text-secondary leading-relaxed">{project.problem}</p>
              </div>

              {/* Solution */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 text-sm">
                    💡
                  </span>
                  <h3 className="text-primary text-lg font-bold">The Solution</h3>
                </div>
                <p className="text-secondary leading-relaxed">{project.solution}</p>
              </div>

              {/* Result */}
              <div className="bg-brand-500/8 border-brand-500/20 rounded-xl border p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-green-500/10 text-sm">
                    ✅
                  </span>
                  <h3 className="text-primary text-lg font-bold">The Result</h3>
                </div>
                <p className="text-secondary leading-relaxed">{project.result}</p>
              </div>

              {/* Tech stack */}
              <div>
                <h4 className="text-muted mb-3 text-sm font-semibold tracking-wider uppercase">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t: string) => (
                    <span
                      key={t}
                      className="bg-surface-secondary border-default text-secondary rounded-full border px-3 py-1 text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="gradient-brand flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="border-default text-primary hover:bg-surface-secondary flex flex-1 items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-colors"
                  >
                    <FaGithub size={16} /> GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
