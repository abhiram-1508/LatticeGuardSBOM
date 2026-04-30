import { motion } from "framer-motion";
import { Shield, BarChart2, Search, Clock, Package, CheckCircle } from "lucide-react";

const STAGES = [
  {
    n: "01",
    icon: <Shield className="w-6 h-6" />,
    color: "#00d4ff",
    title: "Pre-Fetch Name Safety Gate",
    subtitle: "Safety Gate",
    desc: "Before any network call, every package name is verified against our ML-DSA-65 signed list of top PyPI packages. Levenshtein distance and homoglyph normalization catch typosquatting.",
    bullets: [
      "ML-DSA-65 signed top-8K list",
      "Levenshtein distance & homoglyph normalization",
      "Signed attestation per verdict",
    ],
  },
  {
    n: "02",
    icon: <BarChart2 className="w-6 h-6" />,
    color: "#7c3aed",
    title: "5-Signal Risk Scoring",
    subtitle: "Risk Evaluation",
    desc: "Every resolved package receives a 0–100 risk score computed from five independent signals. Each score is cryptographically signed with ML-DSA-65 + Ed25519.",
    bullets: [
      "Evaluates CVE severity & package age",
      "Assesses maintainer count & download volume",
      "Risk score is signed with ML-DSA-65 + Ed25519",
    ],
  },
  {
    n: "03",
    icon: <Search className="w-6 h-6" />,
    color: "#ff3366",
    title: "Static Source Scan",
    subtitle: "Source Analysis",
    desc: "Downloads packages in-memory and heavily scans the entire file contents for malicious patterns, identifying unauthorized behavior without executing code.",
    bullets: [
      "Scans the entire file contents",
      "Detects exec(base64...) and eval obfuscation",
      "Catches unauthorized network calls",
      "Detects credential harvesting",
    ],
  },
  {
    n: "04",
    icon: <Package className="w-6 h-6" />,
    color: "#00ff88",
    title: "Cryptographic Export & Audit",
    subtitle: "Audit & Export",
    desc: "Every event is sealed with hybrid classical and post-quantum keys (ML-DSA-65 + Ed25519). The final SBOM and risk results are exported as a mathematically verifiable package.",
    bullets: [
      "Tamper-evident logs per event",
      "Hybrid ML-DSA-65 + Ed25519 signatures",
      "CycloneDX 1.5 JSON export",
      "Mathematically verifiable cryptographic chain",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 relative">
      <div className="absolute inset-0 lattice-bg opacity-20" />

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 mb-4"
          >
            <CheckCircle className="w-3.5 h-3.5 text-[#00d4ff]" />
            <span className="text-xs text-[#00d4ff] font-medium">Core Security Pipeline</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            How LatticeGuard Works
          </motion.h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Four automated stages run from dependency resolution through quantum-safe SBOM export —
            every step signed, every verdict recorded.
          </p>
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff]/40 via-[#7c3aed]/40 to-[#ff9900]/40" />

          <div className="space-y-8">
            {STAGES.map((stage, i) => (
              <motion.div
                key={stage.n}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex gap-6"
              >
                {/* Node */}
                <div
                  className="relative z-10 flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center border"
                  style={{
                    backgroundColor: `${stage.color}12`,
                    borderColor: `${stage.color}30`,
                    color: stage.color,
                  }}
                >
                  {stage.icon}
                  <div
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold text-black"
                    style={{ backgroundColor: stage.color }}
                  >
                    {stage.n}
                  </div>
                </div>

                {/* Card */}
                <div className="glass-card rounded-2xl p-5 flex-1 mb-2">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span
                        className="text-xs font-mono font-bold uppercase tracking-wider"
                        style={{ color: stage.color }}
                      >
                        {stage.subtitle}
                      </span>
                      <h3 className="text-base font-bold text-white mt-0.5">{stage.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{stage.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {stage.bullets.map((b, j) => (
                      <span
                        key={j}
                        className="text-xs px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400"
                      >
                        ✓ {b}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
