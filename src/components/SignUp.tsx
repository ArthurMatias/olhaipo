import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent } from "./ui/card";
import {
  EyeIcon,
  EyeOffIcon,
  UserIcon,
  MailIcon,
  PhoneIcon,
  LockIcon,
} from "lucide-react";

import "./SignUp.css"; // ✅ caminho corrigido

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    console.log("Formulário enviado:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-blue-50/50 flex items-center justify-center px-4">
      <div className="card_geral">
        <div className="titulo_card text-center mb-6">
          <h1 className="text-gradient-primary mb-2 text-3xl font-bold">
            Cadastre-se e comece a explorar
          </h1>
          <p className="text-muted-foreground">
            Preencha os dados abaixo para criar sua conta
          </p>
        </div>
        {/* Card do formulário */}
        <Card className="shadow-lg border border-slate-200">
          <CardContent className="pt-6 pb-6 px-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nome completo */}
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo</Label>
                <div className="relative flex items-center">
                  <UserIcon className="absolute left-3 text-muted-foreground h-4 w-4 pointer-events-none" />
                  <Input
                    id="name"
                    placeholder="Digite seu nome completo"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="pl-10 bg-white border-gray-200 focus:border-primary"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative flex items-center">
                  <MailIcon className="absolute left-3 text-muted-foreground h-4 w-4 pointer-events-none" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="pl-10 bg-white border-gray-200 focus:border-primary"
                    required
                  />
                </div>
              </div>

              {/* Telefone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Número de telefone</Label>
                <div className="relative flex items-center">
                  <PhoneIcon className="absolute left-3 text-muted-foreground h-4 w-4 pointer-events-none" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="pl-10 bg-white border-gray-200 focus:border-primary"
                    required
                  />
                </div>
              </div>

              {/* Senha */}
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <div className="relative flex items-center">
                  <LockIcon className="absolute left-3 text-muted-foreground h-4 w-4 pointer-events-none" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Mínimo 8 caracteres"
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                    className="pl-10 pr-10 bg-white border-gray-200 focus:border-primary"
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-4 w-4" />
                    ) : (
                      <EyeIcon className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirmar senha */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmação de senha</Label>
                <div className="relative flex items-center">
                  <LockIcon className="absolute left-3 text-muted-foreground h-4 w-4 pointer-events-none" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirme sua senha"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      handleInputChange("confirmPassword", e.target.value)
                    }
                    className="pl-10 pr-10 bg-white border-gray-200 focus:border-primary"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOffIcon className="h-4 w-4" />
                    ) : (
                      <EyeIcon className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Botão */}
              <div className="botao_card pt-2">
                <Button
                  type="submit"
                  className="w-full gradient-primary text-white shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-200"
                >
                  Criar conta
                </Button>
              </div>

              {/* Link */}
              <div className="text-center pt-4">
                <p className="text-muted-foreground">
                  Já tem uma conta?{" "}
                  <a href="#" className="text-primary hover:underline">
                    Faça login
                  </a>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
