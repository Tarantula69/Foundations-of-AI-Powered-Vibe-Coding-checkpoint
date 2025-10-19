import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/90" />
        <div 
          className="absolute inset-0 opacity-50"
          style={{ background: 'var(--gradient-glow)' }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
                Mohamed Zakaria Znaidi
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light max-w-2xl mx-auto">
              Frontend Developer crafting beautiful, responsive web experiences with modern technologies
            </p>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating intuitive user interfaces and bringing designs to life. 
            My goal is to build accessible, performant applications that make a difference.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              variant="hero" 
              size="xl"
              className="shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.4)]"
              onClick={() => console.log('View My Projects clicked')}
            >
              View My Projects
            </Button>
          </div>

          {/* Decorative Elements */}
          <div className="flex items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Available for opportunities</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl animate-pulse delay-1000" />
    </main>
  );
};

export default Index;
