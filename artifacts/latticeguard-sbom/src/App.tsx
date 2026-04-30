import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LandingPage from "@/pages/LandingPage";
import ScannerPage from "@/pages/ScannerPage";
import ThreatModelPage from "@/pages/ThreatModelPage";
import AuditPage from "@/pages/AuditPage";
import VerifyPage from "@/pages/VerifyPage";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Switch>
          <Route path="/"             component={LandingPage}    />
          <Route path="/scan"         component={ScannerPage}    />
          <Route path="/threat-model" component={ThreatModelPage}/>
          <Route path="/audit"        component={AuditPage}      />
          <Route path="/verify"       component={VerifyPage}     />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
