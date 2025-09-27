import { Heart, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  capacity: number;
  type: string;
}

export function PropertyCard({
  id,
  title,
  location,
  price,
  rating,
  reviewCount,
  imageUrl,
  capacity,
  type,
}: PropertyCardProps) {
  return (
    <div className="group cursor-pointer hover:scale-[1.02] transition-all duration-300">
      <div className="relative aspect-square rounded-xl overflow-hidden mb-3 ring-1 ring-primary/10 group-hover:ring-primary/30 group-hover:shadow-xl transition-all duration-300">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-110 transition-all duration-200">
          <Heart className="h-4 w-4 text-muted-foreground hover:text-red-500" />
        </button>
        <div className="absolute bottom-3 left-3">
          <span className="bg-white/95 backdrop-blur-sm text-xs px-3 py-1.5 rounded-full text-primary border border-primary/20">
            {type}
          </span>
        </div>
      </div>
      
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-foreground truncate group-hover:text-primary transition-colors">{title}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-current text-accent" />
            <span className="text-sm font-medium text-foreground">{rating}</span>
            <span className="text-sm text-muted-foreground">({reviewCount})</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground">{location}</p>
        <p className="text-sm text-muted-foreground">Até {capacity} pessoas</p>
        
        <div className="flex items-center justify-between mt-2">
          <div>
            <span className="font-semibold text-gradient-primary">R$ {price.toLocaleString()}</span>
            <span className="text-sm text-muted-foreground"> /diária</span>
          </div>
        </div>
      </div>
    </div>
  );
}