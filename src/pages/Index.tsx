import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FloatChatHeader from "@/components/FloatChatHeader";
import ChatInterface from "@/components/ChatInterface";
import DataVisualization from "@/components/DataVisualization";
import { ArrowRight, Waves, Brain, BarChart3, Globe } from "lucide-react";
import oceanHero from "@/assets/ocean-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <FloatChatHeader />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-deep-gradient">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${oceanHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative container mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-ocean-gradient bg-clip-text text-transparent">
                FloatChat
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 mb-4">
              AI-Powered Conversational Interface for 
            </p>
            <p className="text-lg md:text-xl text-primary font-semibold mb-8">
              ARGO Ocean Data Discovery and Visualization
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Explore the depths of ocean science through natural conversations. 
              Discover patterns, visualize trends, and unlock insights from the world's 
              largest ocean observation network.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow-primary animate-pulse-glow">
                Start Exploring
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
                View Demo
              </Button>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 opacity-60">
            <Waves className="h-12 w-12 text-primary animate-float" />
          </div>
          <div className="absolute top-32 right-16 opacity-40">
            <Globe className="h-16 w-16 text-accent animate-float" />
          </div>
          <div className="absolute bottom-20 left-1/4 opacity-50">
            <BarChart3 className="h-10 w-10 text-primary animate-float" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Dive Deep into Ocean Science
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform complex oceanographic data into meaningful insights through 
              the power of conversational AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-surface-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 float-element">
              <CardContent className="p-8 text-center">
                <Brain className="h-12 w-12 text-primary mx-auto mb-4 glow-primary" />
                <h3 className="text-xl font-semibold mb-3">AI-Powered Queries</h3>
                <p className="text-muted-foreground">
                  Ask natural language questions about ocean data and get intelligent, 
                  context-aware responses from our advanced AI system.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-surface-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 float-element">
              <CardContent className="p-8 text-center">
                <BarChart3 className="h-12 w-12 text-accent mx-auto mb-4 glow-accent" />
                <h3 className="text-xl font-semibold mb-3">Smart Visualizations</h3>
                <p className="text-muted-foreground">
                  Generate beautiful, interactive charts and maps that bring your 
                  ocean data to life with just a simple conversation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-surface-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 float-element">
              <CardContent className="p-8 text-center">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4 glow-primary" />
                <h3 className="text-xl font-semibold mb-3">Global ARGO Network</h3>
                <p className="text-muted-foreground">
                  Access real-time data from thousands of autonomous floats 
                  measuring temperature, salinity, and pressure worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Experience FloatChat in Action
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                See how easy it is to explore ocean data through natural conversation. 
                Our AI assistant understands your questions and provides relevant 
                insights and visualizations.
              </p>
              <ChatInterface />
            </div>
            
            <div>
              <DataVisualization />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ocean-gradient relative overflow-hidden">
        <div className="wave-animation absolute inset-0"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Explore the Ocean's Secrets?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join researchers worldwide who are using FloatChat to unlock 
            new discoveries in ocean science.
          </p>
          <Button size="lg" variant="secondary" className="glow-accent">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2024 FloatChat. Powered by ARGO Global Ocean Observing System.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;