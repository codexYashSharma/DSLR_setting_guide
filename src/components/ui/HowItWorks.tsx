import { Upload, Brain, Settings, Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Frame",
      description: "Simply drag and drop your photo or use your device's camera to capture a live shot.",
      color: "from-dslr-orange to-red-500"
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Our advanced AI analyzes lighting, composition, subject matter, and environmental conditions.",
      color: "from-dslr-red to-pink-500"
    },
    {
      icon: Settings,
      title: "Get Recommendations",
      description: "Receive personalized ISO, aperture, shutter speed, and white balance settings.",
      color: "from-purple-500 to-dslr-red"
    },
    {
      icon: Camera,
      title: "Perfect Shot",
      description: "Apply the settings to your DSLR and capture stunning, professional-quality photos.",
      color: "from-green-500 to-dslr-orange"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-card/30 pixel-grain">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="p-4 mb-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-sans">
              How It <span className="gradient-text">Works</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From upload to perfect shot in four simple steps. Our AI does the complex analysis, 
            you get the perfect settings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative group">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-dslr-orange to-dslr-red opacity-50 z-10 flash-effect" />
                )}
                
                <Card className="glass-card hover:bg-card/50 transition-all group-hover:scale-105 h-full flash-effect">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    {/* Step Number */}
                    <div className="w-8 h-8 bg-gradient-to-r from-dslr-orange to-dslr-red rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold text-white focus-glow">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform focus-indicator`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-4 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground flex-grow">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Ready to improve your photography?</p>
          <div className="shutter-button inline-flex items-center px-6 py-3 rounded-full text-white font-medium transition-colors cursor-pointer">
            Try It Now - It's Free
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;