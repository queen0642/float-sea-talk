import { Button } from "@/components/ui/button";
import { MessageCircle, BarChart3, Database, Waves } from "lucide-react";

const FloatChatHeader = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Waves className="h-8 w-8 text-primary animate-float" />
              <h1 className="text-2xl font-bold bg-ocean-gradient bg-clip-text text-transparent">
                FloatChat
              </h1>
            </div>
            <div className="hidden md:block text-sm text-muted-foreground">
              AI-Powered ARGO Ocean Data Discovery
            </div>
          </div>
          
          <nav className="flex items-center space-x-6">
            <Button variant="ghost" className="flex items-center space-x-2">
              <MessageCircle className="h-4 w-4" />
              <span>Chat</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span>Visualize</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-2">
              <Database className="h-4 w-4" />
              <span>Data</span>
            </Button>
            <Button variant="default" className="glow-primary">
              Get Started
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default FloatChatHeader;