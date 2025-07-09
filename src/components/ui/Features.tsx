import { Aperture, Sun, Zap, Target, Smartphone, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Aperture,
      title: "Aperture Optimization",
      description: "Perfect depth of field settings for portraits, landscapes, and macro photography."
    },
    {
      icon: Sun,
      title: "White Balance Precision",
      description: "Automatic color temperature adjustment for natural, vibrant colors in any lighting."
    },
    {
      icon: Zap,
      title: "ISO Intelligence",
      description: "Minimize noise while maintaining detail with smart ISO recommendations."
    },
    {
      icon: Target,
      title: "Shutter Speed Mastery",
      description: "Freeze motion or create artistic blur with precisely calculated shutter speeds."
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Access from any device - smartphone, tablet, or desktop for on-the-go assistance."
    },
    {
      icon: BookOpen,
      title: "Learning Mode",
      description: "Understand why each setting is recommended with detailed explanations."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="p-4 mb-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-sans">
              Powerful <span className="gradient-text">Features</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to master DSLR photography, powered by cutting-edge AI technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="glass-card hover:bg-card/50 transition-all group hover:scale-105 flash-effect"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-r from-dslr-orange to-dslr-red rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform focus-indicator">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="settings-panel p-6 text-center">
            <div className="settings-display text-4xl font-bold mb-2">95%</div>
            <p className="text-gray-400">Accuracy Rate</p>
          </div>
          <div className="settings-panel p-6 text-center">
            <div className="settings-display text-4xl font-bold mb-2">&lt;3s</div>
            <p className="text-gray-400">Analysis Time</p>
          </div>
          <div className="settings-panel p-6 text-center">
            <div className="settings-display text-4xl font-bold mb-2">50k+</div>
            <p className="text-gray-400">Photos Analyzed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;