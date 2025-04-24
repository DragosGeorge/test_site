import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface ProductCardProps {
  product: {
    id: string
    name: string
    description: string
    price: number
    image?: string
    category: string
    featured?: boolean
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden border border-white/10 bg-secondary/50 backdrop-blur-sm hover:border-red-900/30 transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg?height=300&width=600"}
          alt={product.name}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        {product.featured && (
          <div className="absolute top-2 right-2 bg-red-900/80 text-white text-xs font-medium px-2 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      <CardHeader className="p-4">
        <div className="flex flex-col gap-2">
          <div className="text-sm font-medium text-muted-foreground">{product.category}</div>
          <Link href={`/marketplace/${product.id}`} className="font-bold hover:text-red-400 transition-colors">
            {product.name}
          </Link>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
      </CardContent>
      <CardFooter className="p-4 flex items-center justify-between">
        <div className="font-bold">${product.price}</div>
        <Button asChild size="sm" className="bg-red-600 hover:bg-red-700">
          <Link href={`/marketplace/${product.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
