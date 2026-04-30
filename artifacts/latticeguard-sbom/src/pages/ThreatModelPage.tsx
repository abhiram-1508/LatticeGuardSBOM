import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";
import QuantumThreat from "@/components/sections/QuantumThreat";

export default function ThreatModelPage() {
  return (
    <div className="page-enter">
      <div className="relative border-b border-white/5 bg-gradient-to-b from-red-500/5 to-transparent">
        <div className="absolute inset-0 lattice-bg animate-lattice opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            Quantum Threat Intelligence
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-3xl md:text-4xl font-bold text-white mb-3"
          >
            Threat{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
              Model
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed"
          >
            Understand how Shor's and Grover's algorithms threaten classical cryptography
            and why ML-DSA-65 keeps your supply chain secure beyond 2035.
          </motion.p>
        </div>
      </div>
      <QuantumThreat />
    </div>
  );
}
