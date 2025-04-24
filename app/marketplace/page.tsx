import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getAllProducts } from "@/lib/products"
import ProductCard from "@/components/product-card"

export default async function MarketplacePage() {
  const products = await getAllProducts()

  return (
    <div className="flex flex-col gap-8 py-12">
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">Marketplace</h1>
            <p className="text-xl text-muted-foreground">Browse our collection of premium Metin2 systems</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="flex-1">
              <Input placeholder="Search systems..." className="w-full bg-secondary/50 border-white/10" />
            </div>
            <div className="w-full sm:w-48">
              <Select defaultValue="all">
                <SelectTrigger className="bg-secondary/50 border-white/10">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-secondary border-white/10">
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="combat">Combat Systems</SelectItem>
                  <SelectItem value="economy">Economy Systems</SelectItem>
                  <SelectItem value="interface">Interface Systems</SelectItem>
                  <SelectItem value="events">Event Systems</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full sm:w-48">
              <Select defaultValue="newest">
                <SelectTrigger className="bg-secondary/50 border-white/10">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-secondary border-white/10">
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="bg-red-600 hover:bg-red-700">Search</Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
