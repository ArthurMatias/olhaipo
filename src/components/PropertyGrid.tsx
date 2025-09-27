import { PropertyCard } from './PropertyCard';

const mockProperties = [
  {
    id: '1',
    title: 'Casa de Festa Luxuosa com Piscina',
    location: 'São Paulo, SP',
    price: 2500,
    rating: 4.9,
    reviewCount: 127,
    imageUrl: 'https://images.unsplash.com/photo-1559341709-f13b9686dbf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGhvdXNlJTIwcG9vbCUyMGJhY2t5YXJkfGVufDF8fHx8MTc1Nzk4NzEzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    capacity: 50,
    type: 'Casa de Festa'
  },
  {
    id: '2',
    title: 'Salão de Eventos Elegante',
    location: 'Rio de Janeiro, RJ',
    price: 3200,
    rating: 4.8,
    reviewCount: 89,
    imageUrl: 'https://images.unsplash.com/photo-1746549855902-0028190ed877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGhhbGwlMjBiYWxscm9vbSUyMHBhcnR5JTIwdmVudWV8ZW58MXx8fHwxNzU3OTg3MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    capacity: 80,
    type: 'Salão de Eventos'
  },
  {
    id: '3',
    title: 'Jardim para Festas com Iluminação',
    location: 'Belo Horizonte, MG',
    price: 1800,
    rating: 4.7,
    reviewCount: 156,
    imageUrl: 'https://images.unsplash.com/photo-1729701165540-5ae13eabc5c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcGFydHklMjB2ZW51ZSUyMGdhcmRlbiUyMGxpZ2h0c3xlbnwxfHx8fDE3NTc5ODcxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    capacity: 40,
    type: 'Jardim para Festas'
  },
  {
    id: '4',
    title: 'Terraço para Celebrações',
    location: 'Campinas, SP',
    price: 2200,
    rating: 4.6,
    reviewCount: 203,
    imageUrl: 'https://images.unsplash.com/photo-1695128861516-d9b48461c04c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMHZlbnVlJTIwdGVycmFjZSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc1Nzk4NzEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    capacity: 100,
    type: 'Terraço'
  },
  {
    id: '5',
    title: 'Mansão Completa para Casamentos',
    location: 'Brasília, DF',
    price: 4500,
    rating: 4.9,
    reviewCount: 67,
    imageUrl: 'https://images.unsplash.com/photo-1687213280116-234f93b15b44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmVudWUlMjBwYXJ0eSUyMGhhbGwlMjBlbGVnYW50fGVufDF8fHx8MTc1Nzk4NzE0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    capacity: 150,
    type: 'Mansão'
  },
  {
    id: '6',
    title: 'Casa com Piscina Premium',
    location: 'Salvador, BA',
    price: 2800,
    rating: 4.8,
    reviewCount: 134,
    imageUrl: 'https://images.unsplash.com/photo-1600854109241-46990389fb97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sc2lkZSUyMHBhcnR5JTIwdmVudWUlMjBjYXNhJTIwZmVzdGF8ZW58MXx8fHwxNzU3OTg3MTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    capacity: 60,
    type: 'Casa'
  },
  {
    id: '7',
    title: 'Cobertura com Vista Panorâmica',
    location: 'Fortaleza, CE',
    price: 3500,
    rating: 4.9,
    reviewCount: 92,
    imageUrl: 'https://images.unsplash.com/photo-1565469808585-e69a40c3bfa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mdG9wJTIwcGFydHklMjB2ZW51ZSUyMHVyYmFuJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzU3OTg3MTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    capacity: 70,
    type: 'Cobertura'
  },
  {
    id: '8',
    title: 'Casa de Festa com Quintal Decorado',
    location: 'Recife, PE',
    price: 2100,
    rating: 4.6,
    reviewCount: 178,
    imageUrl: 'https://images.unsplash.com/photo-1681505541409-35a11c40d712?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGhvdXNlJTIwYmFja3lhcmQlMjBjZWxlYnJhdGlvbiUyMGxpZ2h0c3xlbnwxfHx8fDE3NTc5ODcxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    capacity: 45,
    type: 'Casa de Festa'
  },
  {
    id: '9',
    title: 'Espaço Moderno para Eventos',
    location: 'Porto Alegre, RS',
    price: 2900,
    rating: 4.7,
    reviewCount: 114,
    imageUrl: 'https://images.unsplash.com/photo-1574847052651-02b57f7f5a4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHNwYWNlJTIwcGFydHklMjB2ZW51ZSUyMG1vZGVybnxlbnwxfHx8fDE3NTc5ODcxNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    capacity: 90,
    type: 'Espaço Moderno'
  },
];

export function PropertyGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold text-gradient-primary mb-3">
          Mais de 300 casas de festa
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          No olhaipô, encontre o espaço perfeito para sua celebração e crie memórias inesquecíveis
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockProperties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="border border-primary/30 rounded-lg px-8 py-3 text-primary hover:bg-secondary/50 hover:border-primary/50 hover:scale-105 transition-all duration-200 font-medium">
          Mostrar mais
        </button>
      </div>
    </div>
  );
}