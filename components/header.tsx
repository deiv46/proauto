import { Button } from "@/components/ui/button"
import { Phone, Mail, Menu } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-foreground">ProAuto</div>
            <nav className="hidden md:flex space-x-6">
              <a href="#vehiculos" className="text-muted-foreground hover:text-foreground transition-colors">
                Vehículos
              </a>
              <a href="#empresa" className="text-muted-foreground hover:text-foreground transition-colors">
                Empresa
              </a>
              <a href="#contacto" className="text-muted-foreground hover:text-foreground transition-colors">
                Contacto
              </a>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Phone className="w-4 h-4 mr-2" />
              Llamar
            </Button>
            <Button size="sm">
              <Mail className="w-4 h-4 mr-2" />
              Contacto
            </Button>
          </div>

          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
