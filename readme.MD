# 🛡️ LatticeGuard SBOM

**Quantum-Safe Software Supply Chain Security Platform**

LatticeGuard SBOM is an advanced dependency security tool that generates Software Bills of Materials (SBOMs), scans them for malicious threats via a 5-signal risk engine, and cryptographically deals them using **hybrid classical and post-quantum cryptography** (Ed25519 + NIST FIPS 204 ML-DSA-65).

---

## 🛡️ Core Verification Pipeline

### 1. Pre-Fetch Name Safety Gate
Before any network call, package names are verified against an ML-DSA-65 signed list of top PyPI packages.
*   Levenshtein distance & homoglyph normalization to catch typosquatting.
*   Signed attestation per verdict.

### 2. 5-Signal Risk Scoring
Every resolved package receives a 0–100 risk score computed from five independent signals.
*   Evaluates CVE severity, package age, maintainer count, and download volume.
*   Each score is cryptographically signed with ML-DSA-65 + Ed25519.

### 3. Static Source Scan
Downloads archives in-memory and heavily scans the **entire file** contents for malicious patterns.
*   Detects `exec`, `eval` obfuscation, and credential harvesting.
*   Catches unauthorized network calls without code execution.

### 4. Cryptographic Export & Audit
Every event across the pipeline is sealed with hybrid classical and post-quantum keys (ML-DSA-65 + Ed25519).
*   The final CycloneDX SBOM, risk scores, and scan findings are exported as a mathematically verifiable cryptographic chain.

---

## 🛠️ Technology Stack

**Frontend:**
*   React 19 + Vite
*   Tailwind CSS 4.0 + Framer Motion (Glassmorphism UI)
*   Wouter (Client-side routing)
*   Lucide React (Icons)

**Backend:**
*   Python 3.12
*   FastAPI + Uvicorn
*   `liboqs-python` (Open Quantum Safe library for ML-DSA-65)
*   Cryptography (Ed25519 hashing and signing)

---

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed on your machine:
*   [Node.js](https://nodejs.org/) (v24.13.0 or higher)
*   [Python](https://www.python.org/) (v3.12.x)
*   [pnpm](https://pnpm.io/) (v10.26.1) -> Install via: `npm install -g pnpm@10.26.1`

---

## 🏃‍♂️ How to Run the Project Locally

You will need to run the Backend and the Frontend in two separate terminals.

### 1. Start the Backend (Quantum Engine)
Open your first terminal and run:
```bash
cd backend
pip install -r requirements.txt  # (or install manually: fastapi uvicorn[standard] liboqs-python cryptography)
python -m uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```
*Note: Make sure your Python environment has `liboqs-python` installed properly for the ML-DSA-65 signatures to work.*

### 2. Start the Frontend (Web App)
Open a **second** terminal, ensure you are in the project root directory, and run:
```powershell
# Install dependencies (First time only)
pnpm install

# Start the Vite development server
$env:PORT="5173"; $env:BASE_PATH="/"; pnpm --filter @workspace/latticeguard-sbom dev
```

### 3. Open the App
Navigate to [http://localhost:5173](http://localhost:5173) in your web browser.

---

## 🔒 The Quantum Threat (Why ML-DSA-65?)
Classical cryptographic signatures (RSA, ECDSA) rely on mathematical problems like integer factorization, which can be easily broken in polynomial time by Shor's Algorithm running on a Cryptographically Relevant Quantum Computer (CRQC).

LatticeGuard uses **Module-Learning With Errors (M-LWE)** over high-dimensional lattices. Because we introduce random algebraic "noise" into the matrix, the resulting Shortest Vector Problem (SVP) remains exponentially difficult. By layering ML-DSA-65 over traditional signatures, LatticeGuard protects your supply chain from both present-day classical attacks and future "Harvest Now, Decrypt Later" quantum adversaries.

---

## 🤝 Team
Built by **Team INFIFNITE** for the QC² Hackathon 2026.
