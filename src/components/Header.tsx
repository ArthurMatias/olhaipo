import { useState } from "react";
import {
  Search,
  Menu,
  User,
  Globe,
  Calendar as CalendarIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Calendar } from "./ui/calendar";
import logoImage from "../data/img/logo.png";

interface HeaderProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [location, setLocation] = useState("");
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);

  const formatDateRange = () => {
    if (checkInDate && checkOutDate) {
      const formatDate = (date: Date) => {
        return date.toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
        });
      };
      return `${formatDate(checkInDate)} - ${formatDate(checkOutDate)}`;
    }
    if (checkInDate) {
      return checkInDate.toLocaleDateString("pt-BR");
    }
    return "Qualquer data";
  };
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-primary/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => onNavigate?.("home")}
              className="flex items-center"
            >
              <img
                src={logoImage}
                alt="olhaipô"
                className="h-10 w-auto object-contain"
              />
            </button>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="flex items-center border border-primary/30 rounded-full shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-200">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Para onde você quer ir?"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-6 py-3 rounded-l-full border-0 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <Dialog
                  open={isDateModalOpen}
                  onOpenChange={setIsDateModalOpen}
                >
                  <DialogTrigger asChild>
                    <div className="border-l border-primary/30 px-6 py-3 cursor-pointer hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-2">
                        <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {formatDateRange()}
                        </span>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto z-[100]">
                    <DialogHeader className="pb-4">
                      <DialogTitle className="text-center text-xl font-semibold text-gradient-primary">
                        Selecione as datas do evento
                      </DialogTitle>
                    </DialogHeader>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col items-center space-y-4">
                        <div className="w-full">
                          <h4 className="font-medium mb-3 text-center text-foreground">
                            Data de início
                          </h4>
                          <div className="flex justify-center">
                            <Calendar
                              mode="single"
                              selected={checkInDate}
                              onSelect={setCheckInDate}
                              disabled={(date) => date < new Date()}
                              initialFocus
                              className="rounded-lg border border-primary/20 shadow-sm bg-white"
                              classNames={{
                                months:
                                  "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
                                month: "space-y-4 w-full flex flex-col",
                                table:
                                  "w-full h-full border-collapse space-y-1",
                                head_row: "",
                                row: "w-full mt-2",
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-center space-y-4">
                        <div className="w-full">
                          <h4 className="font-medium mb-3 text-center text-foreground">
                            Data de término
                          </h4>
                          <div className="flex justify-center">
                            <Calendar
                              mode="single"
                              selected={checkOutDate}
                              onSelect={setCheckOutDate}
                              disabled={(date) =>
                                date < (checkInDate || new Date())
                              }
                              className="rounded-lg border border-primary/20 shadow-sm bg-white"
                              classNames={{
                                months:
                                  "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
                                month: "space-y-4 w-full flex flex-col",
                                table:
                                  "w-full h-full border-collapse space-y-1",
                                head_row: "",
                                row: "w-full mt-2",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 border-t border-primary/10">
                      <div className="text-sm text-muted-foreground">
                        {checkInDate && checkOutDate ? (
                          <span>Período: {formatDateRange()}</span>
                        ) : (
                          <span>Selecione as datas para continuar</span>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          onClick={() => {
                            setCheckInDate(undefined);
                            setCheckOutDate(undefined);
                          }}
                          className="border-primary/30 hover:border-primary/50"
                        >
                          Limpar datas
                        </Button>
                        <Button
                          onClick={() => setIsDateModalOpen(false)}
                          className="gradient-primary text-white hover:opacity-90 transition-opacity"
                        >
                          Confirmar
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button className="rounded-full p-2 m-1 gradient-primary hover:opacity-90 transition-opacity">
                  <Search className="h-4 w-4 text-white" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="hidden sm:flex text-sm text-primary hover:text-accent"
            >
              Anuncie seu espaço
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-3 space-y-3">
          <div className="flex items-center border border-primary/30 rounded-full shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-200">
            <Search className="h-4 w-4 text-primary ml-4" />
            <input
              type="text"
              placeholder="Para onde você quer ir?"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-1 px-4 py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <Dialog open={isDateModalOpen} onOpenChange={setIsDateModalOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start border-primary/30 hover:border-primary/50"
              >
                <CalendarIcon className="h-4 w-4 mr-2" />
                {formatDateRange()}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] w-full mx-auto max-h-[90vh] overflow-y-auto z-[100]">
              <DialogHeader className="pb-4">
                <DialogTitle className="text-center text-lg font-semibold text-gradient-primary">
                  Datas do evento
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <div className="text-center">
                  <h4 className="font-medium mb-3 text-foreground">
                    Data de início
                  </h4>
                  <div className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={checkInDate}
                      onSelect={setCheckInDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="rounded-lg border border-primary/20 shadow-sm bg-white"
                      classNames={{
                        months: "flex w-full flex-col space-y-4",
                        month: "space-y-4 w-full",
                        table: "w-full border-collapse space-y-1",
                      }}
                    />
                  </div>
                </div>

                {checkInDate && (
                  <div className="text-center">
                    <h4 className="font-medium mb-3 text-foreground">
                      Data de término
                    </h4>
                    <div className="flex justify-center">
                      <Calendar
                        mode="single"
                        selected={checkOutDate}
                        onSelect={setCheckOutDate}
                        disabled={(date) => date < checkInDate}
                        className="rounded-lg border border-primary/20 shadow-sm bg-white"
                        classNames={{
                          months: "flex w-full flex-col space-y-4",
                          month: "space-y-4 w-full",
                          table: "w-full border-collapse space-y-1",
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-3 pt-6 border-t border-primary/10">
                {checkInDate && checkOutDate && (
                  <div className="text-center text-sm text-muted-foreground">
                    Período selecionado: {formatDateRange()}
                  </div>
                )}
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    className="flex-1 border-primary/30 hover:border-primary/50"
                    onClick={() => {
                      setCheckInDate(undefined);
                      setCheckOutDate(undefined);
                    }}
                  >
                    Limpar
                  </Button>
                  <Button
                    onClick={() => setIsDateModalOpen(false)}
                    className="flex-1 gradient-primary text-white hover:opacity-90 transition-opacity"
                  >
                    Confirmar
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
