import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="gradient-subtle border-t border-primary/20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Suporte */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Suporte</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Central de ajuda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Segurança
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Acessibilidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Cancelamento
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Denunciar
                </a>
              </li>
            </ul>
          </div>

          {/* Hospedagem */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Hospedagem</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Anuncie seu espaço
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Como ser anfitrião
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Recursos para anfitriões
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Centro de recursos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Comunidade
                </a>
              </li>
            </ul>
          </div>

          {/* olhaipô */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">olhaipô</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Novidades
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Carreiras
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Investidores
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Cartões-presente
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  olhaipô.org
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-full bg-white/50 text-primary hover:bg-white hover:text-accent hover:scale-110 transition-all duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/50 text-primary hover:bg-white hover:text-accent hover:scale-110 transition-all duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/50 text-primary hover:bg-white hover:text-accent hover:scale-110 transition-all duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/50 text-primary hover:bg-white hover:text-accent hover:scale-110 transition-all duration-200"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>© 2025 olhaipô, Inc.</span>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-200"
            >
              Privacidade
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-200"
            >
              Termos
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-200"
            >
              Mapa do site
            </a>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>🇧🇷 Português (BR)</span>
              <span>R$ BRL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
