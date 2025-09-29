export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  capacity: number;
  type: string;
  description: string;
  amenities: string[];
  images: string[];
  host: {
    name: string;
    avatar: string;
    responseTime: string;
    responseRate: string;
  };
  rules: string[];
  checkIn: string;
  checkOut: string;
  cancelPolicy: string;
  reviews: {
    id: string;
    user: string;
    avatar: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}

export const mockProperties: Property[] = [
  {
    id: "1",
    title: "Casa de Festa Luxuosa com Piscina",
    location: "São Paulo, SP",
    price: 2500,
    rating: 4.9,
    reviewCount: 127,
    imageUrl:
      "https://images.unsplash.com/photo-1559341709-f13b9686dbf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGhvdXNlJTIwcG9vbCUyMGJhY2t5YXJkfGVufDF8fHx8MTc1Nzk4NzEzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    capacity: 50,
    type: "Casa de Festa",
    description:
      "Increível casa de festa com piscina aquecida, área gourmet completa e jardim para até 50 pessoas. Perfeita para aniversários, confraternizações e celebrações em família. Ambiente climatizado e sistema de som profissional inclusos.",
    amenities: [
      "Piscina aquecida",
      "Área gourmet completa",
      "Churrasqueira",
      "Sistema de som",
      "Iluminação LED",
      "Estacionamento para 10 carros",
      "Vestiários",
      "Geladeira industrial",
      "Freezer",
      "Micro-ondas",
      "Fogão industrial",
      "Utensílios de cozinha",
      "Mesas e cadeiras",
      "Toldo retrátil",
    ],
    images: [
      "https://images.unsplash.com/photo-1559341709-f13b9686dbf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGhvdXNlJTIwcG9vbCUyMGJhY2t5YXJkfGVufDF8fHx8MTc1Nzk4NzEzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1600854109241-46990389fb97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sc2lkZSUyMHBhcnR5JTIwdmVudWUlMjBjYXNhJTIwZmVzdGF8ZW58MXx8fHwxNzU3OTg3MTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1681505541409-35a11c40d712?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGhvdXNlJTIwYmFja3lhcmQlMjBjZWxlYnJhdGlvbiUyMGxpZ2h0c3xlbnwxfHx8fDE3NTc5ODcxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1729701165540-5ae13eabc5c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcGFydHklMjB2ZW51ZSUyMGdhcmRlbiUyMGxpZ2h0c3xlbnwxfHx8fDE3NTc5ODcxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1559341709-f13b9686dbf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGhvdXNlJTIwYmFja3lhcmQlMjBwb29sfGVufDF8fHx8MTc1OTEwNDQzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1758403037080-39e759895454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwZ2FyZGVuJTIwcGFydHklMjB2ZW51ZXxlbnwxfHx8fDE3NTkxMDQ0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    host: {
      name: "Marina Silva",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b029?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwc21pbGluZ3xlbnwxfHx8fDE3NTc5ODcxNTJ8MA&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
      responseTime: "1 hora",
      responseRate: "98%",
    },
    rules: [
      "Não é permitido fumar dentro da casa",
      "Eventos apenas até às 23h",
      "Máximo de 50 pessoas",
      "Não é permitido animais de estimação",
      "Limpeza obrigatória após o evento",
    ],
    checkIn: "14:00",
    checkOut: "23:00",
    cancelPolicy: "Cancelamento gratuito até 24h antes do evento",
    reviews: [
      {
        id: "1",
        user: "Carlos Mendes",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHNtaWxpbmd8ZW58MXx8fHwxNzU3OTg3MTUzfDA&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
        rating: 5,
        comment:
          "Lugar incrível! A piscina estava perfeita e a área gourmet tem tudo que precisamos. Marina foi super atenciosa.",
        date: "2024-01-15",
      },
      {
        id: "2",
        user: "Ana Santos",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwc21pbGluZyUyMGJ1c2luZXNzfGVufDF8fHx8MTc1Nzk4NzE1NXww&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
        rating: 5,
        comment:
          "Perfeito para o aniversário da minha filha! As crianças adoraram a piscina e o espaço é muito seguro.",
        date: "2024-01-20",
      },
    ],
  },
  {
    id: "2",
    title: "Salão de Eventos Elegante",
    location: "Rio de Janeiro, RJ",
    price: 3200,
    rating: 4.8,
    reviewCount: 89,
    imageUrl:
      "https://images.unsplash.com/photo-1746549855902-0028190ed877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGhhbGwlMjBiYWxscm9vbSUyMHBhcnR5JTIwdmVudWV8ZW58MXx8fHwxNzU3OTg3MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    capacity: 80,
    type: "Salão de Eventos",
    description:
      "Elegante salão de eventos com decoração sofisticada, pista de dança e sistema de iluminação profissional. Ideal para casamentos, formaturas e eventos corporativos.",
    amenities: [
      "Pista de dança",
      "Sistema de iluminação LED",
      "Som profissional",
      "Ar condicionado",
      "Cozinha industrial",
      "Banheiros VIP",
      "Camarim",
      "Estacionamento coberto",
      "Segurança 24h",
      "Decoração inclusa",
      "Mobiliário completo",
      "Projetor e tela",
    ],
    images: [
      "https://images.unsplash.com/photo-1746549855902-0028190ed877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGhhbGwlMjBiYWxscm9vbSUyMHBhcnR5JTIwdmVudWV8ZW58MXx8fHwxNzU3OTg3MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1687213280116-234f93b15b44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3ZWRkaW5nJTIwdmVudWUlMjBwYXJ0eSUyMGhhbGwlMjBlbGVnYW50fGVufDF8fHx8MTc1Nzk4NzE0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1574847052651-02b57f7f5a4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHNwYWNlJTIwcGFydHklMjB2ZW51ZSUyMG1vZGVybnxlbnwxfHx8fDE3NTc5ODcxNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1565469808585-e69a40c3bfa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mdG9wJTIwcGFydHklMjB2ZW51ZSUyMHVyYmFuJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzU3OTg3MTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1754466511796-b2070527672d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZXZlbnQlMjBoYWxsJTIwYmFsbHJvb218ZW58MXx8fHwxNzU5MTA0NDM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1574847052651-02b57f7f5a4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBldmVudCUyMHNwYWNlJTIwcGFydHl8ZW58MXx8fHwxNzU5MTA0NDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    host: {
      name: "Roberto Costa",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzJTIwc21pbGluZ3xlbnwxfHx8fDE3NTc5ODcxNTR8MA&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
      responseTime: "30 minutos",
      responseRate: "100%",
    },
    rules: [
      "Eventos até às 2h da manhã",
      "Máximo de 80 pessoas",
      "Não é permitido confetes ou serpentinas",
      "Decoração deve ser aprovada previamente",
    ],
    checkIn: "16:00",
    checkOut: "02:00",
    cancelPolicy: "Cancelamento gratuito até 48h antes do evento",
    reviews: [
      {
        id: "3",
        user: "Patricia Lima",
        avatar:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1Nzk4NzE1Nnww&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
        rating: 5,
        comment:
          "Meu casamento foi perfeito! O salão é lindo e Roberto nos ajudou com tudo. Recomendo muito!",
        date: "2024-01-10",
      },
    ],
  },
  // Vou adicionar dados para as outras propriedades de forma mais concisa
  {
    id: "3",
    title: "Jardim para Festas com Iluminação",
    location: "Belo Horizonte, MG",
    price: 1800,
    rating: 4.7,
    reviewCount: 156,
    imageUrl:
      "https://images.unsplash.com/photo-1729701165540-5ae13eabc5c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcGFydHklMjB2ZW51ZSUyMGdhcmRlbiUyMGxpZ2h0c3xlbnwxfHx8fDE3NTc5ODcxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    capacity: 40,
    type: "Jardim para Festas",
    description:
      "Lindo jardim com iluminação especial, área coberta e muito verde. Perfeito para eventos ao ar livre em contato com a natureza.",
    amenities: [
      "Jardim amplo",
      "Iluminação LED",
      "Área coberta",
      "Churrasqueira",
      "Banheiros",
      "Estacionamento",
    ],
    images: [
      "https://images.unsplash.com/photo-1729701165540-5ae13eabc5c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcGFydHklMjB2ZW51ZSUyMGdhcmRlbiUyMGxpZ2h0c3xlbnwxfHx8fDE3NTc5ODcxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1681505541409-35a11c40d712?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGhvdXNlJTIwYmFja3lhcmQlMjBjZWxlYnJhdGlvbiUyMGxpZ2h0c3xlbnwxfHx8fDE3NTc5ODcxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    host: {
      name: "Julia Ferreira",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b029?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwc21pbGluZ3xlbnwxfHx8fDE3NTc5ODcxNTJ8MA&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
      responseTime: "2 horas",
      responseRate: "95%",
    },
    rules: [
      "Eventos até às 22h",
      "Máximo de 40 pessoas",
      "Respeitar a vizinhança",
    ],
    checkIn: "15:00",
    checkOut: "22:00",
    cancelPolicy: "Cancelamento gratuito até 24h antes do evento",
    reviews: [],
  },
];

// Função para buscar propriedade por ID
export const getPropertyById = (id: string): Property | undefined => {
  return mockProperties.find((property) => property.id === id);
};
