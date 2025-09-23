import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Droplets, Thermometer, Globe } from "lucide-react";

const DataVisualization = () => {
  const mockData = [
    { region: "North Atlantic", temp: "18.2°C", salinity: "35.1 PSU", floats: 1247 },
    { region: "Pacific Basin", temp: "15.8°C", salinity: "34.7 PSU", floats: 2103 },
    { region: "Southern Ocean", temp: "4.1°C", salinity: "34.2 PSU", floats: 892 },
    { region: "Indian Ocean", temp: "21.3°C", salinity: "35.4 PSU", floats: 756 }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Real-time Ocean Insights</h3>
        <p className="text-muted-foreground">
          Powered by ARGO's global network of autonomous profiling floats
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-surface-gradient border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center space-x-2">
              <Globe className="h-5 w-5 text-primary" />
              <span>Active Floats</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">4,998</div>
            <p className="text-sm text-muted-foreground">Collecting data worldwide</p>
          </CardContent>
        </Card>

        <Card className="bg-surface-gradient border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center space-x-2">
              <Thermometer className="h-5 w-5 text-accent" />
              <span>Avg Temperature</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-accent">14.8°C</div>
            <p className="text-sm text-muted-foreground">Global ocean average</p>
          </CardContent>
        </Card>

        <Card className="bg-surface-gradient border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center space-x-2">
              <Droplets className="h-5 w-5 text-primary" />
              <span>Salinity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">34.9</div>
            <p className="text-sm text-muted-foreground">PSU average</p>
          </CardContent>
        </Card>

        <Card className="bg-surface-gradient border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-accent" />
              <span>Profiles Today</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-accent">1,247</div>
            <p className="text-sm text-muted-foreground">New measurements</p>
          </CardContent>
        </Card>
      </div>

      {/* Regional Data */}
      <Card className="wave-animation">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="h-5 w-5 text-primary" />
            <span>Regional Ocean Data</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockData.map((region, index) => (
              <div
                key={region.region}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/50 float-element"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <div>
                  <h4 className="font-semibold">{region.region}</h4>
                  <p className="text-sm text-muted-foreground">{region.floats} active floats</p>
                </div>
                <div className="flex space-x-6 text-sm">
                  <div className="text-center">
                    <div className="font-semibold text-accent">{region.temp}</div>
                    <div className="text-muted-foreground">Temperature</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-primary">{region.salinity}</div>
                    <div className="text-muted-foreground">Salinity</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataVisualization;