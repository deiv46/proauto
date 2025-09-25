import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

interface VehicleCardProps {
  id: string
  brand: string
  model: string
  year: number
  mileage: number
  fuel: string
  price?: number
  image: string
  featured?: boolean
}

export function VehicleCard({ brand, model, year, mileage, fuel, price, image, featured = false }: VehicleCardProps) {
  return (
    <Card
      className={`group overflow-hidden transition-all duration-300 hover:shadow-xl ${featured ? "ring-2 ring-accent" : ""}`}
    >
      <div className="relative overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={`${brand} ${model}`}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {featured && <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Destacado</Badge>}
        {price && (
          <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-lg font-bold text-foreground">€{price}</span>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-balance">
              {brand} {model}
            </h3>
            <p className="text-muted-foreground">Año {year}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{mileage.toLocaleString()} km</Badge>
            <Badge variant="secondary">{fuel}</Badge>
          </div>

          <div className="flex gap-2 pt-2">
            <Button size="sm" className="flex-1">
              <Phone className="w-4 h-4 mr-2" />
              Llamar
            </Button>
            <Button size="sm" variant="outline" className="flex-1 bg-transparent">
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
