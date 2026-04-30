import { motion } from "framer-motion";
import { ClipboardList } from "lucide-react";
import AuditLog from "@/components/sections/AuditLog";
import CiCdPanel from "@/components/sections/CiCdPanel";

export default function AuditPage() {
  return (
    <div className="page-enter">
      <div className="relative border-b border-white/5 bg-gradient-to-b from-emerald-500/5 to-transparent">
        <div className="absolute inset-0 lattice-bg animate-lattice opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <ClipboardList className="w-3.5 h-3.5" />
            PQC Audit Trail
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-3xl md:text-4xl font-bold text-white mb-3"
          >
            Audit &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
              CI/CD
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed"
          >
            Every cryptographic event is independently signed and appended to the immutable
            session audit log. Integrate with your CI/CD pipeline in one command.
          </motion.p>
        </div>
      </div>
      <AuditLog />
      <CiCdPanel />
    </div>
  );
}
