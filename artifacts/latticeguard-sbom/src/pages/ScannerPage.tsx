import { motion } from "framer-motion";
import { ScanLine, Shield } from "lucide-react";
import MainTool from "@/components/sections/MainTool";

export default function ScannerPage() {
  return (
    <div className="page-enter">
      {/* Page header */}
      <div className="relative border-b border-white/5 bg-gradient-to-b from-blue-500/5 to-transparent">
        <div className="absolute inset-0 lattice-bg animate-lattice opacity-30" />
        <div className="relative max-w-4xl mx-auto px-6 py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <ScanLine className="w-3.5 h-3.5" />
            SBOM Generator
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-3xl md:text-4xl font-bold text-white mb-3"
          >
            Dependency{" "}
            <span className="gradient-text">Scanner</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed"
          >
            Verify package names, score supply chain risk, scan source code, and seal your
            Software Bill of Materials with hybrid post-quantum cryptography.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="flex justify-center flex-wrap gap-2 mt-5"
          >
            {["Name Verification", "CVE Risk Scoring", "Static Source Scan", "ML-DSA-65 Signing", "CycloneDX SBOM"].map((chip) => (
              <span key={chip} className="px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/60 text-[11px] text-slate-400 font-medium">
                {chip}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main tool */}
      <MainTool />
    </div>
  );
}
