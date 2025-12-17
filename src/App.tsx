import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Interview from "./pages/Interview";
import InterviewChat from "./pages/InterviewChat";
import Login from "./pages/Login";
import Prepare from "./pages/Prepare";
import Offer from "./pages/Offer";
import HowItWorks from "./pages/HowItWorks";
import ModuleWrapUp from "./pages/ModuleWrapUp";
import Artifacts from "./pages/Artifacts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/interview/chat" element={<InterviewChat />} />
          <Route path="/app/login" element={<Login />} />
          <Route path="/app/prepare" element={<Prepare />} />
          <Route path="/app/offer" element={<Offer />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/app/module/:moduleId/complete" element={<ModuleWrapUp />} />
          <Route path="/app/artifacts" element={<Artifacts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
