import { Search, Menu, User, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gradient-primary">
              olhaipô
            </h1>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="flex items-center border border-primary/30 rounded-full shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-200">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Para onde você quer ir?"
                    className="w-full px-6 py-3 rounded-l-full border-0 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="border-l border-primary/30 px-6 py-3">
                  <span className="text-sm text-muted-foreground">Qualquer data</span>
                </div>
                <div className="border-l border-primary/30 px-6 py-3">
                  <span className="text-sm text-muted-foreground">Adicionar hóspedes</span>
                </div>
                <Button className="rounded-full p-2 m-1 gradient-primary hover:opacity-90 transition-opacity">
                  <Search className="h-4 w-4 text-white" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden sm:flex text-sm text-primary hover:text-accent">
              Anuncie seu espaço
            </Button>
            <Button variant="ghost" size="sm" className="text-primary hover:text-accent">
              <Globe className="h-4 w-4" />
            </Button>
            <div className="flex items-center space-x-2 border border-primary/30 rounded-full p-2 hover:shadow-lg hover:border-primary/50 transition-all duration-200 cursor-pointer">
              <Menu className="h-4 w-4 text-primary" />
              <div className="w-6 h-6 gradient-secondary rounded-full flex items-center justify-center">
                <User className="h-3 w-3 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-3">
          <div className="flex items-center border border-primary/30 rounded-full shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-200">
            <Search className="h-4 w-4 text-primary ml-4" />
            <input
              type="text"
              placeholder="Para onde você quer ir?"
              className="flex-1 px-4 py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      </div>
    </header>
  );
}