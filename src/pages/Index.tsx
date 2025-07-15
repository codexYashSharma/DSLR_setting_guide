import { Camera, Upload, Zap, Target, Settings, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 camera-grid opacity-20 pointer-events-none" />
      
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Features Section */}
      <Features />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
