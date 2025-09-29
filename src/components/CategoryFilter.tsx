import {
  Home,
  Users,
  Music,
  Utensils,
  Waves,
  TreePine,
  Camera,
  Sparkles,
} from "lucide-react";

const categories = [
  { id: "casas", name: "Casas", icon: Home },
  { id: "grandes-grupos", name: "Grandes grupos", icon: Users },
  { id: "pista-danca", name: "Pista de dança", icon: Music },
  { id: "churrasqueira", name: "Churrasqueira", icon: Utensils },
  { id: "piscina", name: "Piscina", icon: Waves },
  { id: "area-verde", name: "Área verde", icon: TreePine },
  { id: "estudio", name: "Estúdio foto", icon: Camera },
  { id: "luxo", name: "Luxo", icon: Sparkles },
];

export function CategoryFilter() {
  return (
    <div className="border-b border-primary/20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-8 py-4 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              className="flex flex-col items-center space-y-2 min-w-0 group hover:scale-105 transition-all duration-200"
            >
              <div className="p-2 rounded-xl bg-secondary/30 group-hover:bg-secondary/50 group-hover:shadow-md transition-all duration-200">
                <category.icon className="h-6 w-6 text-primary/70 group-hover:text-primary" />
              </div>
              <span className="text-sm text-foreground/70 group-hover:text-primary whitespace-nowrap transition-colors duration-200">
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
