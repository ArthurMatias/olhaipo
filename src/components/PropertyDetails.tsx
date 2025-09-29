import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  ArrowLeft,
  Heart,
  Share,
  Star,
  MapPin,
  Users,
  Wifi,
  Car,
  Calendar as CalendarIcon,
  Clock,
  Shield,
  CheckCircle,
  X,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { getPropertyById } from "../data/properties";

interface PropertyDetailsProps {
  propertyId: string;
  onBack: () => void;
}

export function PropertyDetails({ propertyId, onBack }: PropertyDetailsProps) {
  const property = getPropertyById(propertyId);
  const [selectedImage, setSelectedImage] = useState(0);
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();

  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Propriedade não encontrada
          </h2>
          <Button onClick={onBack} variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        </div>
      </div>
    );
  }

  const amenitiesDisplay = showAllAmenities
    ? property.amenities
    : property.amenities.slice(0, 6);
  const reviewsDisplay = showAllReviews
    ? property.reviews
    : property.reviews.slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      {/* Header com navegação */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button onClick={onBack} variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Share className="h-4 w-4 mr-2" />
                Compartilhar
              </Button>
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Salvar
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Título e localização */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-foreground mb-2">
            {property.title}
          </h1>
          <div className="flex items-center space-x-4 text-muted-foreground">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-current text-accent mr-1" />
              <span className="font-medium">{property.rating}</span>
              <span className="ml-1">({property.reviewCount} avaliações)</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{property.location}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>Até {property.capacity} pessoas</span>
            </div>
          </div>
        </div>

        {/* Galeria de fotos */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 rounded-xl overflow-hidden">
            <div className="md:col-span-2 md:row-span-2">
              <ImageWithFallback
                src={property.images[selectedImage]}
                alt={property.title}
                className="w-full h-64 md:h-96 object-cover cursor-pointer hover:brightness-90 transition-all"
                onClick={() => setSelectedImage(0)}
              />
            </div>
            {property.images.slice(1, 5).map((image, index) => (
              <div key={index} className="relative">
                <ImageWithFallback
                  src={image}
                  alt={`${property.title} - Foto ${index + 2}`}
                  className="w-full h-32 md:h-48 object-cover cursor-pointer hover:brightness-90 transition-all"
                  onClick={() => setSelectedImage(index + 1)}
                />
                {index === 3 && property.images.length > 5 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-medium">
                      +{property.images.length - 5} fotos
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Conteúdo principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tipo e anfitrião */}
            <div className="flex items-center justify-between">
              <div>
                <Badge variant="secondary" className="mb-2">
                  {property.type}
                </Badge>
                <p className="text-muted-foreground">
                  Anfitrião: {property.host.name}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <ImageWithFallback
                  src={property.host.avatar}
                  alt={property.host.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <Separator />

            {/* Descrição */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">
                Sobre este espaço
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {property.description}
              </p>
            </div>

            <Separator />

            {/* Comodidades */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                O que este lugar oferece
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {amenitiesDisplay.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{amenity}</span>
                  </div>
                ))}
              </div>
              {property.amenities.length > 6 && (
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setShowAllAmenities(!showAllAmenities)}
                >
                  {showAllAmenities
                    ? "Mostrar menos"
                    : `Mostrar todas as ${property.amenities.length} comodidades`}
                </Button>
              )}
            </div>

            <Separator />

            {/* Calendário e informações */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                Disponibilidade
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Check-in</p>
                    <p className="font-medium">{property.checkIn}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Check-out</p>
                    <p className="font-medium">{property.checkOut}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Cancelamento
                    </p>
                    <p className="font-medium text-sm">
                      {property.cancelPolicy}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Regras */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                Regras da casa
              </h3>
              <div className="space-y-2">
                {property.rules.map((rule, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{rule}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Avaliações */}
            {property.reviews.length > 0 && (
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="h-5 w-5 fill-current text-accent" />
                  <h3 className="font-semibold text-foreground">
                    {property.rating} · {property.reviewCount} avaliações
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {reviewsDisplay.map((review) => (
                    <div key={review.id} className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                          <ImageWithFallback
                            src={review.avatar}
                            alt={review.user}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">
                            {review.user}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {review.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "fill-current text-accent"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </div>
                {property.reviews.length > 2 && (
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => setShowAllReviews(!showAllReviews)}
                  >
                    {showAllReviews
                      ? "Mostrar menos"
                      : `Mostrar todas as ${property.reviews.length} avaliações`}
                  </Button>
                )}
              </div>
            )}

            <Separator />

            {/* Informações do anfitrião */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                Conheça seu anfitrião
              </h3>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <ImageWithFallback
                        src={property.host.avatar}
                        alt={property.host.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">
                        {property.host.name}
                      </h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">
                            Tempo de resposta
                          </p>
                          <p className="font-medium">
                            {property.host.responseTime}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">
                            Taxa de resposta
                          </p>
                          <p className="font-medium">
                            {property.host.responseRate}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" className="mt-4">
                        Contactar anfitrião
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Card de reserva */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="border-gradient">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-semibold text-gradient-primary">
                        R$ {property.price.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground"> /diária</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current text-accent" />
                      <span className="font-medium">{property.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Seleção de datas */}
                  <div className="grid grid-cols-2 gap-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="justify-start text-left"
                        >
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          {checkInDate
                            ? checkInDate.toLocaleDateString()
                            : "Check-in"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={checkInDate}
                          onSelect={setCheckInDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="justify-start text-left"
                        >
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          {checkOutDate
                            ? checkOutDate.toLocaleDateString()
                            : "Check-out"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={checkOutDate}
                          onSelect={setCheckOutDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Resumo do preço */}
                  {checkInDate && checkOutDate && (
                    <div className="space-y-2 p-4 bg-muted/30 rounded-lg">
                      <div className="flex justify-between">
                        <span>
                          R$ {property.price.toLocaleString()} x 1 diária
                        </span>
                        <span>R$ {property.price.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Taxa de limpeza</span>
                        <span>R$ 150</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Taxa de serviço</span>
                        <span>R$ 200</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>
                          R$ {(property.price + 150 + 200).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  )}

                  <Button className="w-full gradient-primary text-white hover:opacity-90">
                    {checkInDate && checkOutDate
                      ? "Reservar"
                      : "Verificar disponibilidade"}
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    Você ainda não será cobrado
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
