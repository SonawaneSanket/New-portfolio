import { motion, type Variants } from "framer-motion";
import { ArrowDown, Sparkles, Terminal, Zap, TrendingUp, Cpu } from "lucide-react";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiNestjs } from "react-icons/si";
import { scrollTo } from "../../hooks/useLenis";
import Magnetic from "../shared/Magnetic";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-padding relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full opacity-20 dark:opacity-10"
          style={{ background: "radial-gradient(circle, #0ea5e9 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full opacity-15 dark:opacity-8"
          style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #0ea5e9 0%, #8b5cf6 50%, transparent 70%)",
          }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#64748b 1px, transparent 1px), linear-gradient(90deg, #64748b 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating Elements - Hidden on mobile */}
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
        {/* Left Side: Tech Stack / Code */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [-1, 1, -1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="glass absolute top-[25%] left-[8%] w-56 rounded-2xl border border-white/10 p-4 shadow-2xl"
        >
          <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-2">
            <Terminal size={14} className="text-brand-400" />
            <span className="text-muted font-mono text-[10px] tracking-widest uppercase">
              Stack.config
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaReact className="text-brand-400" size={12} />
                <span className="text-secondary text-xs font-medium">Frontend</span>
              </div>
              <span className="text-brand-400 font-mono text-[10px]">React 19</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SiNextdotjs className="text-white" size={12} />
                <span className="text-secondary text-xs font-medium">Framework</span>
              </div>
              <span className="text-muted font-mono text-[10px]">Next.js</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SiNestjs className="text-red-500" size={12} />
                <span className="text-secondary text-xs font-medium">Backend</span>
              </div>
              <span className="text-muted font-mono text-[10px]">NestJS</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0], x: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="glass absolute bottom-[20%] left-[5%] flex items-center gap-4 rounded-2xl border border-white/10 p-4 shadow-2xl"
        >
          <div className="bg-brand-500/20 rounded-xl p-2">
            <Cpu size={18} className="text-brand-400" />
          </div>
          <div>
            <div className="text-muted text-[10px] font-bold tracking-tighter uppercase">
              API Latency
            </div>
            <div className="text-primary text-sm font-bold">
              12ms <span className="text-[10px] font-normal text-green-500">avg</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Performance / Metrics */}
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [1, -1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="glass absolute top-[30%] right-[8%] w-64 rounded-2xl border border-white/10 p-5 shadow-2xl"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap size={16} className="fill-yellow-400/20 text-yellow-400" />
              <span className="text-primary text-xs font-bold">Lighthouse</span>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-green-500 text-[10px] font-bold text-green-500">
              99
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "98%" }}
                transition={{ duration: 1.5, delay: 1 }}
                className="h-full bg-green-500"
              />
            </div>
            <div className="text-muted flex justify-between text-[10px] font-medium">
              <span>Performance</span>
              <span className="text-white">98%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1.2 }}
                className="h-full bg-blue-500"
              />
            </div>
            <div className="text-muted flex justify-between text-[10px] font-medium">
              <span>SEO & UX</span>
              <span className="text-white">100%</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="glass absolute right-[5%] bottom-[25%] rounded-2xl border border-white/10 p-4 shadow-2xl"
        >
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-muted text-[10px] font-bold tracking-widest uppercase">
                Conversion
              </span>
              <span className="text-primary text-sm font-bold">+24.5%</span>
            </div>
            <TrendingUp size={20} className="text-green-500" />
          </div>
        </motion.div>
      </div>

      <div className="container-xl relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div variants={item} className="mb-6 inline-flex items-center gap-2">
            <span className="border-brand-500/30 bg-brand-500/5 text-brand-500 flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium">
              <Sparkles size={14} />
              Available for freelance & full-time
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-primary mb-6 text-4xl leading-tight font-bold md:text-6xl lg:text-7xl"
          >
            I Build Web Apps <span className="gradient-text">That Convert</span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl">& Scale Effortlessly</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={item}
            className="text-secondary mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl"
          >
            Full-stack developer specializing in React, Next.js & NestJS — turning complex problems
            into clean, fast, and business-driven digital experiences.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Magnetic strength={0.3}>
              <button
                onClick={() => scrollTo("#projects")}
                className="gradient-brand shadow-brand-500/25 w-full rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:opacity-90 active:scale-[0.98] sm:w-auto"
              >
                View Projects
              </button>
            </Magnetic>
            <Magnetic strength={0.3}>
              <button
                onClick={() => scrollTo("#contact")}
                className="border-default text-primary hover:bg-surface-secondary hover:border-brand-500/50 w-full rounded-xl border px-8 py-4 text-base font-semibold transition-all sm:w-auto"
              >
                Hire Me →
              </button>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => scrollTo("#stats")}
        className="text-muted hover:text-primary absolute bottom-8 left-1/2 -translate-x-1/2 p-2 transition-colors"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
