import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { scrollTo } from "../../hooks/useLenis";
import { cn } from "../../lib/utils";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    scrollTo(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-surface/80 border-default border-b shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="container-xl flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#hero")}
          className="text-primary text-lg font-bold tracking-tight transition-opacity hover:opacity-80"
        >
          <span className="gradient-text">Dev</span>
          <span>.Portfolio</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200",
                  isActive ? "text-brand-500" : "text-secondary hover:text-primary transition-colors"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-brand-500/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="text-secondary hover:text-primary hover:bg-surface-secondary rounded-lg p-2 transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => handleNavClick("#contact")}
            className="gradient-brand hidden items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 md:flex"
          >
            Hire Me
          </button>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="text-secondary hover:bg-surface-secondary rounded-lg p-2 transition-all md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="bg-surface border-default space-y-1 border-b px-6 pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-secondary hover:text-primary hover:bg-surface-secondary w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-all"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="gradient-brand mt-2 w-full rounded-lg px-4 py-3 text-sm font-semibold text-white"
          >
            Hire Me
          </button>
        </div>
      )}
    </header>
  );
}
