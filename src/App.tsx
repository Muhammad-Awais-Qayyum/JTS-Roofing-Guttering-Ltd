import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "@/components/Layout/WhatsAppButton";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import GalleryPage from "./pages/Gallery";
import ReviewsPage from "./pages/Reviews";
import ContactPage from "./pages/Contact";
import QuotePage from "./pages/Quote";
import CustomCursor from "./hooks/CustomCursor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
    <div className="hidden md:block">

      <CustomCursor />
      </div>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quote" element={<QuotePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton phone="+447459382882" />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
