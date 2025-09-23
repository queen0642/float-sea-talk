import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Bot, User, MapPin, TrendingUp } from "lucide-react";

const ChatInterface = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content: "Welcome to FloatChat! I can help you discover and visualize ARGO ocean data. Try asking me about temperature profiles, salinity data, or specific ocean regions.",
      timestamp: "Just now"
    },
    {
      id: 2,
      type: "user", 
      content: "Show me temperature data for the North Atlantic",
      timestamp: "2 min ago"
    },
    {
      id: 3,
      type: "bot",
      content: "I found 2,847 ARGO float observations in the North Atlantic region. Here's a summary of the temperature profile data:",
      timestamp: "2 min ago"
    }
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        type: "user",
        content: message,
        timestamp: "Just now"
      }]);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-card rounded-lg border border-border overflow-hidden">
      {/* Chat Header */}
      <div className="p-4 border-b border-border bg-surface-gradient">
        <h3 className="font-semibold text-lg flex items-center space-x-2">
          <Bot className="h-5 w-5 text-primary" />
          <span>ARGO Data Assistant</span>
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Ask me anything about ocean data and visualizations
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] ${msg.type === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'} rounded-lg p-3`}>
              <div className="flex items-start space-x-2">
                {msg.type === 'bot' ? (
                  <Bot className="h-4 w-4 mt-0.5 text-primary" />
                ) : (
                  <User className="h-4 w-4 mt-0.5" />
                )}
                <div className="flex-1">
                  <p className="text-sm">{msg.content}</p>
                  <span className="text-xs opacity-70 mt-1 block">{msg.timestamp}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex space-x-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask about ocean data, temperature profiles, regions..."
            className="flex-1"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button onClick={handleSend} className="glow-primary">
            <Send className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Quick Actions */}
        <div className="flex flex-wrap gap-2 mt-3">
          <Button variant="outline" size="sm" className="text-xs">
            <MapPin className="h-3 w-3 mr-1" />
            Atlantic Ocean
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            <TrendingUp className="h-3 w-3 mr-1" />
            Temperature Trends
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            Salinity Data
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;