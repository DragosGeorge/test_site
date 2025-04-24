import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getFeaturedProducts } from "@/lib/products"
import ProductCard from "@/components/product-card"

export default async function Home() {
  const featuredProducts = await getFeaturedProducts()

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
        <Image src="/placeholder.svg?height=1080&width=1920" alt="Metin2 Game" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-start px-4 md:px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Premium Metin2 <span className="gradient-text">Development Systems</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Enhance your Metin2 server with our custom systems and solutions. Professional development with years of
              experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 glow-effect">
                <Link href="/marketplace">Browse Systems</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-white border-white/20 hover:bg-white/10 backdrop-blur-sm"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold">Featured Systems</h2>
            <p className="text-muted-foreground">Our most popular Metin2 development systems</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <Button asChild variant="outline" className="border-red-800/30 hover:border-red-600/50">
              <Link href="/marketplace">View All Systems</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-red-900/10 to-transparent opacity-30"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 text-center">
              <h2 className="text-3xl font-bold">Why Choose Our Systems?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We provide high-quality, optimized systems for your Metin2 server
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-secondary/50 p-6 rounded-lg border border-red-900/20 backdrop-blur-sm flex flex-col gap-4 items-center text-center hover:border-red-600/30 transition-all duration-300">
                <div className="h-12 w-12 rounded-full bg-red-900/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-500"
                  >
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Performance Optimized</h3>
                <p className="text-muted-foreground">
                  All our systems are optimized for maximum performance with minimal server load
                </p>
              </div>

              <div className="bg-secondary/50 p-6 rounded-lg border border-red-900/20 backdrop-blur-sm flex flex-col gap-4 items-center text-center hover:border-red-600/30 transition-all duration-300">
                <div className="h-12 w-12 rounded-full bg-red-900/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-500"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Secure Code</h3>
                <p className="text-muted-foreground">
                  Security is our priority - all systems are built with protection against exploits
                </p>
              </div>

              <div className="bg-secondary/50 p-6 rounded-lg border border-red-900/20 backdrop-blur-sm flex flex-col gap-4 items-center text-center hover:border-red-600/30 transition-all duration-300">
                <div className="h-12 w-12 rounded-full bg-red-900/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-500"
                  >
                    <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
                    <path d="M12 13v8" />
                    <path d="M12 3v3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Custom Development</h3>
                <p className="text-muted-foreground">
                  Need something specific? We offer custom development services tailored to your needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-r from-red-900/40 to-red-800/20 text-white rounded-xl p-8 md:p-12 border border-red-900/30">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex flex-col gap-4 max-w-2xl">
              <h2 className="text-3xl font-bold">Need a Custom System?</h2>
              <p className="text-white/90">
                We can develop custom systems tailored specifically for your Metin2 server. Contact us to discuss your
                requirements.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 min-w-[150px] backdrop-blur-sm"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
