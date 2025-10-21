import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactOverlay from "@/components/ContactOverlay";
import Index from "./pages/Index";
import Why from "./pages/Why";
import Technology from "./pages/Technology";
import UseCases from "./pages/UseCases";
import Roadmap from "./pages/Roadmap";
import JoinUs from "./pages/JoinUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar onContactClick={() => setIsContactOpen(true)} />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/why" element={<Why />} />
                <Route path="/technology" element={<Technology />} />
                <Route path="/use-cases" element={<UseCases />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/join-us" element={<JoinUs />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
            <ContactOverlay isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
