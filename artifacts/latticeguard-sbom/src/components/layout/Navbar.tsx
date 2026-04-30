import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Shield, ShieldCheck, Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/",            label: "Home" },
  { href: "/scan",        label: "Scanner" },
  { href: "/threat-model",label: "Threat Model" },
  { href: "/audit",       label: "Audit & CI/CD" },
  { href: "/verify",      label: "Verifier" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel h-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="relative">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Shield className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base font-bold tracking-tight text-white">
              Lattice<span className="text-blue-400">Guard</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-semibold text-blue-400 uppercase tracking-wider">
              v2.0
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive(link.href)
                    ? "text-white bg-blue-500/10 border border-blue-500/20"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Badges + mobile toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[11px] font-semibold text-indigo-400 uppercase tracking-wider">
              <Zap className="w-3 h-3" />
              ML-DSA-65
            </span>
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
              <ShieldCheck className="w-3 h-3" />
              FIPS 204
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute top-16 left-0 right-0 glass-panel border-t border-white/5 px-4 py-3 flex flex-col gap-1 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    isActive(link.href)
                      ? "text-white bg-blue-500/10 border border-blue-500/20"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
