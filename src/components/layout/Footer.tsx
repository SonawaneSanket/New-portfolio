import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SOCIALS = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaEnvelope, href: "mailto:sanket28896@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-default bg-surface-secondary border-t">
      <div className="container-xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="mb-1 text-lg font-bold">
              <span className="gradient-text">Dev</span>
              <span className="text-primary">.Portfolio</span>
            </div>
            <p className="text-secondary text-sm">Building high-converting web experiences.</p>
          </div>          

          {/* Socials */}
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-secondary hover:text-primary hover:bg-surface rounded-lg p-2 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-default text-muted mt-8 border-t pt-6 text-center text-xs">
          © {new Date().getFullYear()} Dev Portfolio. Crafted with React, TypeScript & ❤️
        </div>
      </div>
    </footer>
  );
}
