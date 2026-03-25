import SpotlightCard from "./SpotlightCard";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import type { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
  index: number;
}

export default function ProjectCard({ project, onOpenCaseStudy}: ProjectCardProps) {
  return (
    <SpotlightCard
      className="group flex flex-col overflow-hidden p-0"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="rounded-lg bg-white/90 p-2 text-gray-900 transition-colors hover:bg-white"
            >
              <FaExternalLinkAlt size={14} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="rounded-lg bg-white/90 p-2 text-gray-900 transition-colors hover:bg-white"
            >
              <FaGithub size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="bg-surface-secondary border-default text-secondary rounded-full border px-2.5 py-0.5 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-primary group-hover:text-brand-500 mb-1 text-lg font-bold transition-colors">
          {project.title}
        </h3>
        <p className="text-muted mb-2 text-[10px] font-semibold tracking-wider uppercase">{project.date}</p>
        <p className="text-secondary mb-5 flex-1 text-sm leading-relaxed">{project.description}</p>

        <button
          onClick={() => onOpenCaseStudy(project)}
          className="text-brand-500 group/btn flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
        >
          View Case Study{" "}
          <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </SpotlightCard>
  );
}
