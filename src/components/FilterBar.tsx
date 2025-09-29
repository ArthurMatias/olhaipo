import { Filter, MapPin, Calendar, Users, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export function FilterBar() {
  return (
    <div className="border-b border-primary/20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4 overflow-x-auto">
            <div className="flex items-center space-x-2 bg-secondary/50 rounded-full px-4 py-2 hover:bg-secondary/70 hover:shadow-md cursor-pointer transition-all duration-200 whitespace-nowrap border border-primary/10">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground">Localização</span>
              <ChevronDown className="h-4 w-4 text-primary" />
            </div>

            <div className="flex items-center space-x-2 bg-secondary/50 rounded-full px-4 py-2 hover:bg-secondary/70 hover:shadow-md cursor-pointer transition-all duration-200 whitespace-nowrap border border-primary/10">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground">Data</span>
              <ChevronDown className="h-4 w-4 text-primary" />
            </div>

            <div className="flex items-center space-x-2 bg-secondary/50 rounded-full px-4 py-2 hover:bg-secondary/70 hover:shadow-md cursor-pointer transition-all duration-200 whitespace-nowrap border border-primary/10">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground">Convidados</span>
              <ChevronDown className="h-4 w-4 text-primary" />
            </div>

            <div className="flex items-center space-x-2 bg-secondary/50 rounded-full px-4 py-2 hover:bg-secondary/70 hover:shadow-md cursor-pointer transition-all duration-200 whitespace-nowrap border border-primary/10">
              <span className="text-sm text-foreground">Preço</span>
              <ChevronDown className="h-4 w-4 text-primary" />
            </div>

            <div className="flex items-center space-x-2 bg-secondary/50 rounded-full px-4 py-2 hover:bg-secondary/70 hover:shadow-md cursor-pointer transition-all duration-200 whitespace-nowrap border border-primary/10">
              <span className="text-sm text-foreground">Tipo de festa</span>
              <ChevronDown className="h-4 w-4 text-primary" />
            </div>
          </div>

          <Button className="flex items-center space-x-2 gradient-primary hover:opacity-90 text-white transition-all duration-200">
            <Filter className="h-4 w-4" />
            <span>Filtros</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
