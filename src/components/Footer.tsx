import { Shield, Mail, FileText, Lock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-10 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <FileText className="w-4 h-4" />
              Termos de Uso
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <Lock className="w-4 h-4" />
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <Mail className="w-4 h-4" />
              Contato
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 bg-card px-3 py-2 rounded-lg">
              <Shield className="w-4 h-4 text-success" />
              <span className="text-xs text-muted-foreground">Compra Segura</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-3 py-2 rounded-lg">
              <Lock className="w-4 h-4 text-success" />
              <span className="text-xs text-muted-foreground">SSL Ativo</span>
            </div>
          </div>

          {/* Legal text */}
          <div className="text-center text-xs sm:text-sm text-muted-foreground space-y-2 mb-6">
            <p>
              Este é um produto 100% digital. Nenhum material físico será enviado pelos correios.
            </p>
            <p>
              Após a confirmação do pagamento, você receberá o acesso imediatamente por e-mail.
            </p>
            <p>
              As imagens e personagens utilizados nos temas são meramente ilustrativos e de uso permitido para fins educacionais.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Mega Pack Volta às Aulas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
