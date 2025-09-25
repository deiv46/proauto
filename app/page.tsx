import { Header } from "@/components/header"
import { VehicleCard } from "@/components/vehicle-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Star, Shield, Clock, Award } from "lucide-react"

const vehicles = [
  {
    id: "1",
    brand: "Mercedes",
    model: "A45 AMG",
    year: 2023,
    mileage: 90000,
    fuel: "Gasolina",
    price: 39000,
    image: "/images/mercedes-a45-amg.png",
    featured: true,
  },
  {
    id: "2",
    brand: "Land Rover",
    model: "Defender",
    year: 2023,
    mileage: 87000,
    price: 34000,
    fuel: "Diesel",
    image: "/images/land-rover-defender.png",
    featured: true,
  },
  {
    id: "3",
    brand: "BMW",
    model: "420d",
    year: 2024,
    mileage: 34000,
    fuel: "Diesel",
    price: 39000,
    image: "/images/bmw-420d.png",
    featured: true,
  },
  {
    id: "4",
    brand: "Jaguar",
    model: "E-Pace",
    year: 2022,
    mileage: 110000,
    fuel: "Diesel",
    price: 26000,
    image: "/images/jaguar-e-pace.png",
    featured: true,
  },
  {
    id: "5",
    brand: "BMW",
    model: "X3 2.0d Pack M",
    year: 2025,
    mileage: 8000,
    fuel: "Diesel",
    price: 55000,
    image: "/images/bmw-x3.png",
    featured: true,
  },
  {
    id: "6",
    brand: "Range Rover",
    model: "Velar 2.0d",
    year: 2023,
    mileage: 120000,
    fuel: "Diesel",
    price: 32000,
    image: "/images/range-rover-velar.png",
    featured: true,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Vehículos Premium
            <br />
            <span className="text-muted-foreground">en Salou</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Descubre nuestra selección exclusiva de vehículos de lujo. Mercedes, BMW, Land Rover, Jaguar y más marcas
            premium.
          </p>
        </div>
      </section>

      {/* Vehicles Section */}
      <section id="vehiculos" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Nuestra Selección</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Vehículos premium cuidadosamente seleccionados para ofrecerte la mejor experiencia de conducción.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} {...vehicle} />
            ))}
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section id="empresa" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Sobre ProAuto</h2>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                Con más de 15 años de experiencia en el sector automovilístico, ProAuto se ha consolidado como referente
                en la venta de vehículos premium en Salou y toda la Costa Dorada.
              </p>
              <p className="text-muted-foreground mb-8 text-pretty">
                Nos especializamos en marcas de lujo como Mercedes-Benz, BMW, Land Rover, Jaguar y Range Rover,
                ofreciendo a nuestros clientes una selección cuidadosa de vehículos que combinan elegancia, rendimiento
                y tecnología de vanguardia.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent" />
                  <span>Garantía en todos nuestros vehículos</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-accent" />
                  <span>Inspección técnica completa</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-accent" />
                  <span>Servicio post-venta personalizado</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="p-8 bg-card">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4">¿Por qué elegir ProAuto?</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Vehículos premium de las mejores marcas</li>
                    <li>• Financiación personalizada</li>
                    <li>• Servicio de entrega a domicilio</li>
                    <li>• Asesoramiento profesional</li>
                    <li>• Ubicación privilegiada en Salou</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Garantía</h3>
              <p className="text-sm text-muted-foreground">Todos nuestros vehículos con garantía</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Calidad</h3>
              <p className="text-sm text-muted-foreground">Vehículos premium seleccionados</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Experiencia</h3>
              <p className="text-sm text-muted-foreground">Más de 15 años en el sector</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Servicio</h3>
              <p className="text-sm text-muted-foreground">Atención personalizada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Contacta con Nosotros</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Estamos aquí para ayudarte a encontrar el vehículo perfecto. Contáctanos para más información.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Teléfono</h3>
                <p className="text-muted-foreground mb-4">Llámanos para consultas</p>
                <Button variant="outline" className="w-full bg-transparent">
                  +34 977 XXX XXX
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground mb-4">Escríbenos un mensaje</p>
                <Button variant="outline" className="w-full bg-transparent">
                  info@proauto.es
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Ubicación</h3>
                <p className="text-muted-foreground mb-4">Visítanos en Salou</p>
                <Button variant="outline" className="w-full bg-transparent">
                  Ver en Maps
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-accent text-accent-foreground">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ProAuto</h3>
              <p className="text-accent-foreground/80 text-sm">
                Tu concesionario de confianza en Salou para vehículos premium.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Servicios</h4>
              <ul className="space-y-2 text-sm text-accent-foreground/80">
                <li>Venta de vehículos</li>
                <li>Financiación</li>
                <li>Garantía extendida</li>
                <li>Servicio post-venta</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Marcas</h4>
              <ul className="space-y-2 text-sm text-accent-foreground/80">
                <li>Mercedes-Benz</li>
                <li>BMW</li>
                <li>Land Rover</li>
                <li>Jaguar</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contacto</h4>
              <ul className="space-y-2 text-sm text-accent-foreground/80">
                <li>Salou, Tarragona</li>
                <li>+34 977 XXX XXX</li>
                <li>info@proauto.es</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm text-accent-foreground/60">© 2025 ProAuto. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
