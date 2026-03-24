# ============================================
# LatticeGuard SBOM - One-Click Startup Script
# ============================================
# Usage: .\start.ps1
# This script installs all dependencies and runs
# both the backend API and frontend UI together.
# ============================================

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  LatticeGuard SBOM - Starting Up..." -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# --- Step 1: Install Python dependencies ---
Write-Host "[1/3] Installing Python dependencies..." -ForegroundColor Yellow
pip install -r backend/requirements.txt --quiet 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "  Warning: Some Python packages may not have installed correctly." -ForegroundColor Red
} else {
    Write-Host "  Python dependencies installed." -ForegroundColor Green
}

# --- Step 2: Install Node.js dependencies ---
Write-Host "[2/3] Installing Node.js dependencies..." -ForegroundColor Yellow
pnpm install --ignore-scripts --silent 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "  Warning: Some Node packages may not have installed correctly." -ForegroundColor Red
} else {
    Write-Host "  Node.js dependencies installed." -ForegroundColor Green
}

# --- Step 3: Start both servers ---
Write-Host "[3/3] Starting servers..." -ForegroundColor Yellow
Write-Host ""

# Start backend API server in a background job
$backendJob = Start-Job -ScriptBlock {
    Set-Location $using:PWD
    python -m uvicorn backend.main:app --reload --port 8000 2>&1
}

# Give the backend a moment to start
Start-Sleep -Seconds 2

# Set environment variables for the frontend
$env:PORT = "5173"
$env:BASE_PATH = "/"

Write-Host "========================================" -ForegroundColor Green
Write-Host "  LatticeGuard is RUNNING!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "  Frontend (Website):  " -NoNewline; Write-Host "http://localhost:5173/" -ForegroundColor Cyan
Write-Host "  Backend API:         " -NoNewline; Write-Host "http://localhost:8000/latticeguard-api/health" -ForegroundColor Cyan
Write-Host "  API Docs (Swagger):  " -NoNewline; Write-Host "http://localhost:8000/docs" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Press Ctrl+C to stop all servers." -ForegroundColor DarkGray
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

# Open the browser automatically
Start-Process "http://localhost:5173/"

# Run frontend in the foreground (keeps the script alive)
try {
    pnpm --filter @workspace/latticeguard-sbom dev
} finally {
    # Cleanup: stop the backend when frontend exits
    Write-Host ""
    Write-Host "Shutting down backend server..." -ForegroundColor Yellow
    Stop-Job $backendJob -ErrorAction SilentlyContinue
    Remove-Job $backendJob -ErrorAction SilentlyContinue
    Write-Host "All servers stopped. Goodbye!" -ForegroundColor Green
}
