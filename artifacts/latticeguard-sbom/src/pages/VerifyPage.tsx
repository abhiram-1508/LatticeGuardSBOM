import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Verification from "@/components/sections/Verification";

export default function VerifyPage() {
  return (
    <div className="page-enter">
      <div className="relative border-b border-white/5 bg-gradient-to-b from-indigo-500/5 to-transparent">
        <div className="absolute inset-0 lattice-bg animate-lattice opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            SBOM Signature Verification
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-3xl md:text-4xl font-bold text-white mb-3"
          >
            Verification{" "}
            <span className="gradient-text">Engine</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed"
          >
            Upload any LatticeGuard SBOM and instantly verify every ML-DSA-65 + Ed25519
            signature. Run a tamper simulation to see supply chain attack detection live.
          </motion.p>
        </div>
      </div>
      <Verification />
    </div>
  );
}
