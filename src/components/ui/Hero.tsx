import { Camera, Upload, Zap, ArrowRight, Focus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {
  const dslrSettings = {
    iso: "400",
    aperture: "f/2.8",
    shutter: "1/125s",
    wb: "Auto"
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden hero-gradient">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-card rounded-full mb-8 animate-fade-in border border-border focus-indicator">
            <Zap className="h-4 w-4 text-dslr-orange mr-2" />
            <span className="text-sm text-muted-foreground">shutter + matrix (smart setting grid)</span>
          </div>

          {/* Main Headline */}
          <div className="p-8 mb-8 pixel-grain">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 animate-fade-in text-foreground font-sans">
              Perfect
              <span className="gradient-text block">DSLR Settings</span>
              Every Shot
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in">
            Upload your frame or use live camera input. Our AI analyzes your shot and suggests 
            ideal ISO, aperture, shutter speed, and white balance settings for stunning results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in mb-12">
            <Button 
              size="lg" 
              className="shutter-button text-white font-medium px-8 py-4 text-lg group"
            >
              <Upload className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Upload Frame
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-dslr-orange text-dslr-orange hover:bg-dslr-orange hover:text-white px-8 py-4 text-lg group flash-effect focus-indicator"
            >
              <Camera className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Use Camera
            </Button>
          </div>

          {/* DSLR Settings Preview Panel */}
          <div className="settings-panel p-6 max-w-md mx-auto mb-12">
            <div className="text-center mb-4">
              <Focus className="h-6 w-6 text-dslr-orange mx-auto mb-2" />
              <h3 className="text-white font-semibold">AI Recommended Settings</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="settings-display text-lg font-bold">ISO {dslrSettings.iso}</div>
                <div className="text-gray-400 text-xs">Sensitivity</div>
              </div>
              <div className="text-center">
                <div className="settings-display text-lg font-bold">{dslrSettings.aperture}</div>
                <div className="text-gray-400 text-xs">Aperture</div>
              </div>
              <div className="text-center">
                <div className="settings-display text-lg font-bold">{dslrSettings.shutter}</div>
                <div className="text-gray-400 text-xs">Shutter</div>
              </div>
              <div className="text-center">
                <div className="settings-display text-lg font-bold">{dslrSettings.wb}</div>
                <div className="text-gray-400 text-xs">White Balance</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="glass-card backdrop-blur-sm hover:bg-card/80 transition-all group shadow-sm flash-effect">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-dslr-orange to-dslr-red rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform focus-glow">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Instant Analysis</h3>
              <p className="text-muted-foreground text-sm">AI analyzes your photo in seconds</p>
            </CardContent>
          </Card>

          <Card className="glass-card backdrop-blur-sm hover:bg-card/80 transition-all group shadow-sm flash-effect">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-dslr-orange to-dslr-red rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform focus-glow">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Perfect Settings</h3>
              <p className="text-muted-foreground text-sm">Optimized for your specific scene</p>
            </CardContent>
          </Card>

          <Card className="glass-card backdrop-blur-sm hover:bg-card/80 transition-all group shadow-sm flash-effect">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-dslr-orange to-dslr-red rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform focus-glow">
                <Upload className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Easy Upload</h3>
              <p className="text-muted-foreground text-sm">Drop your image and get results</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Floating Camera Icon */}
      <div className="absolute top-20 right-10 opacity-10 animate-float hidden lg:block focus-indicator">
        <Camera className="h-32 w-32 text-dslr-orange" />
      </div>
    </section>
  );
};

export default Hero;