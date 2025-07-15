import { Camera, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="relative z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-dslr-orange to-dslr-red rounded-lg">
              <Camera className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Shuttrix</h1>
              <p className="text-xs text-muted-foreground">shutter + matrix (smart setting grid)</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-muted-foreground hover:text-dslr-orange transition-colors">
              How It Works
            </a>
            <a href="#features" className="text-muted-foreground hover:text-dslr-orange transition-colors">
              Features
            </a>
            <a href="#about" className="text-muted-foreground hover:text-dslr-orange transition-colors">
              About
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button className="hidden sm:flex bg-dslr-red hover:bg-red-600 text-white font-medium">
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-foreground">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;