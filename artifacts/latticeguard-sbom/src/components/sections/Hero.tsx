import { motion } from "framer-motion";
import { Shield, ShieldCheck, Zap, Lock, ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "wouter";

const STATS = [
  { value: "8,000+", label: "Packages Tracked",   color: "#3b82f6" },
  { value: "5-Signal", label: "Risk Engine",       color: "#6366f1" },
  { value: "ML-DSA-65", label: "NIST FIPS 204",   color: "#10b981" },
  { value: "3,293 B", label: "PQ Signature Size",  color: "#f59e0b" },
];

const CHIPS = [
  "Levenshtein Detection", "Homoglyph Normalization",
  "ML-DSA-65 Attestations", "CVE Risk Scoring",
  "Static Source Scan", "CycloneDX SBOM",
  "SPDX License Map", "Ed25519 Hybrid",
];

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-start pt-16 lg:pt-24 pb-20 overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 lattice-bg animate-lattice opacity-50" />

      {/* Radial glow — softer, professional */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-600/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Lattice nodes */}
      <LatticeNodes />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
        >
          <Zap className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-sm text-blue-300 font-medium">
            Post-Quantum Cryptography · NIST FIPS 204 ML-DSA-65
          </span>
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="text-white">Quantum-Safe</span>
          <br />
          <span className="gradient-text">Supply Chain Security</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Verify dependencies against 8,000 top PyPI packages with{" "}
          <span className="text-blue-400 font-medium">ML-DSA-65 signed attestations</span>,
          score supply chain risk across 5 signals, scan tarballs for malicious patterns,
          and seal your SBOM with hybrid post-quantum cryptography.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link href="/scan">
            <span className="btn-primary animate-quantum-pulse cursor-pointer">
              Analyze Dependencies
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
          <a href="#how-it-works" className="btn-ghost">
            <Shield className="w-4 h-4 text-blue-400" />
            How It Works
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="glass-card card-hover rounded-xl p-4 text-center"
              style={{ borderColor: `${stat.color}20` }}
            >
              <p className="text-2xl font-bold mb-1" style={{ color: stat.color }}>
                {stat.value}
              </p>
              <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Feature chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.38 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {CHIPS.map((chip) => (
            <span
              key={chip}
              className="px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/50 text-xs text-slate-400 font-medium"
            >
              {chip}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600"
      >
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-blue-500/40" />
        <Lock className="w-3 h-3 text-blue-500/40" />
      </motion.div>
    </section>
  );
}

function LatticeNodes() {
  const nodes = [
    { x: 8, y: 18, delay: 0 },
    { x: 88, y: 14, delay: 0.5 },
    { x: 18, y: 78, delay: 1 },
    { x: 92, y: 72, delay: 1.5 },
    { x: 50, y: 8,  delay: 0.3 },
    { x: 12, y: 52, delay: 0.8 },
    { x: 82, y: 47, delay: 1.2 },
    { x: 47, y: 88, delay: 0.6 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {nodes.map((n, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.3, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: n.delay }}
          className="absolute w-1.5 h-1.5 rounded-full bg-blue-500"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        />
      ))}
      <svg className="absolute inset-0 w-full h-full opacity-8">
        <line x1="8%"  y1="18%" x2="50%"  y2="8%"  stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="50%" y1="8%"  x2="88%"  y2="14%" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="8%"  y1="18%" x2="12%"  y2="52%" stroke="#6366f1" strokeWidth="0.5" />
        <line x1="88%" y1="14%" x2="82%"  y2="47%" stroke="#6366f1" strokeWidth="0.5" />
        <line x1="12%" y1="52%" x2="18%"  y2="78%" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="82%" y1="47%" x2="92%"  y2="72%" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="47%" y1="88%" x2="18%"  y2="78%" stroke="#6366f1" strokeWidth="0.5" />
        <line x1="47%" y1="88%" x2="92%"  y2="72%" stroke="#6366f1" strokeWidth="0.5" />
      </svg>
    </div>
  );
}
