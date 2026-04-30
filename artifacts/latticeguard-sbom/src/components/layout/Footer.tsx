import { Shield, Code2, Github, ExternalLink } from "lucide-react";
import { Link } from "wouter";

const NAV_COLS = [
  {
    title: "Pages",
    links: [
      { label: "Home",         href: "/" },
      { label: "Scanner",      href: "/scan" },
      { label: "Threat Model", href: "/threat-model" },
      { label: "Audit & CI/CD",href: "/audit" },
      { label: "Verifier",     href: "/verify" },
    ],
  },
  {
    title: "Standards",
    links: [
      { label: "NIST FIPS 204 (ML-DSA)", href: "#" },
      { label: "CycloneDX SBOM",         href: "#" },
      { label: "SPDX License Map",        href: "#" },
      { label: "Ed25519 Hybrid Sig",      href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#08101e]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <Shield className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-bold text-white">
                Lattice<span className="text-blue-400">Guard</span>
                <span className="ml-1.5 text-xs text-slate-600 font-normal">v2.0</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Quantum-safe Software Bill of Materials (SBOM) generator and verifier.
              Built for the post-quantum era.
            </p>
            <p className="mt-3 text-xs text-slate-600">
              Team INFIFNITE · QC² Hackathon 2026
            </p>
          </div>

          {/* Nav cols */}
          {NAV_COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>
                      <span className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer">
                        {l.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <Code2 className="w-3.5 h-3.5 text-blue-500/60" />
            Built with NIST FIPS 204 · ML-DSA-65 · Ed25519
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <a
              href="https://github.com/baparao15/LatticeGaurdSBOM_INFINITE"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <span>© 2026 LatticeGuard</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
