import { Camera, Mail, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 text-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-dslr-orange to-dslr-red rounded-lg">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Shuttrix</h3>
                <p className="text-sm text-muted-foreground">shutter + matrix (smart setting grid)</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              Empowering photographers with AI-driven camera settings recommendations 
              for perfect shots every time.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-card rounded-lg flex items-center justify-center hover:bg-dslr-orange transition-colors cursor-pointer">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-white" />
              </div>
              <div className="w-10 h-10 bg-card rounded-lg flex items-center justify-center hover:bg-dslr-orange transition-colors cursor-pointer">
                <Github className="h-5 w-5 text-muted-foreground hover:text-white" />
              </div>
              <div className="w-10 h-10 bg-card rounded-lg flex items-center justify-center hover:bg-dslr-orange transition-colors cursor-pointer">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-dslr-orange transition-colors">How It Works</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-dslr-orange transition-colors">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-dslr-orange transition-colors">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-dslr-orange transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-dslr-orange transition-colors">Photography Tips</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-dslr-orange transition-colors">Camera Settings Guide</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-dslr-orange transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-dslr-orange transition-colors">API Documentation</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Shuttrix. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-dslr-orange text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-dslr-orange text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-dslr-orange text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;