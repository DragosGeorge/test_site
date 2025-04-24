import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProductById, getRelatedProducts } from "@/lib/products"
import ProductCard from "@/components/product-card"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(params.id)

  if (!product) {
    notFound()
  }

  const relatedProducts = await getRelatedProducts(product.category)

  return (
    <div className="flex flex-col gap-16 py-12">
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Product Images */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-secondary/50">
              <Image
                src={product.image || "/placeholder.svg?height=600&width=1000"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden rounded-md border border-white/10 bg-secondary/50 cursor-pointer hover:border-red-600/50 transition-all"
                >
                  <Image
                    src={`/placeholder.svg?height=200&width=200&text=Image${i}`}
                    alt={`Product image ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-sm px-2.5 py-0.5 bg-red-900/30 text-red-400 rounded-full font-medium">
                  {product.category}
                </span>
                {product.featured && (
                  <span className="text-sm px-2.5 py-0.5 bg-amber-900/30 text-amber-400 rounded-full font-medium">
                    Featured
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill={star <= 4 ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={star <= 4 ? "text-yellow-500" : "text-muted-foreground"}
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <span className="text-muted-foreground text-sm">4.0 (12 reviews)</span>
              </div>
            </div>

            <div className="text-3xl font-bold">${product.price}</div>

            <p className="text-muted-foreground">{product.description}</p>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Key Features:</h3>
              <ul className="space-y-1">
                {product.features?.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
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
                      className="text-red-500 h-5 w-5 shrink-0"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button className="bg-red-600 hover:bg-red-700 glow-effect">Purchase Now</Button>
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
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
                  className="mr-2 h-4 w-4"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                Download Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="container mx-auto px-4 md:px-6">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3 bg-secondary/50">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="installation">Installation</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="p-4 border border-white/10 rounded-md mt-2 bg-secondary/30">
            <div className="prose prose-invert max-w-none">
              <p>
                {product.longDescription ||
                  `The ${product.name} is a comprehensive system designed to enhance your Metin2 server with advanced functionality. This system has been meticulously developed with performance and user experience in mind.`}
              </p>
              <p>
                Our system integrates seamlessly with your existing server infrastructure, requiring minimal
                configuration while providing maximum impact. The code is well-documented and optimized for performance,
                ensuring that it won't cause lag or server instability.
              </p>
              <p>
                All purchases include free installation support and a 30-day warranty. We're committed to ensuring that
                our systems work perfectly on your server.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="installation" className="p-4 border border-white/10 rounded-md mt-2 bg-secondary/30">
            <div className="prose prose-invert max-w-none">
              <h3>Installation Requirements</h3>
              <ul>
                <li>Metin2 Server (compatible with most versions)</li>
                <li>Basic knowledge of server configuration</li>
                <li>Access to server files</li>
              </ul>

              <h3>Installation Steps</h3>
              <ol>
                <li>Download the system files after purchase</li>
                <li>Extract the files to your server directory</li>
                <li>Follow the included README.txt for specific configuration steps</li>
                <li>Restart your server to apply changes</li>
              </ol>

              <p>
                If you encounter any issues during installation, our support team is available to assist you. Simply
                contact us with your purchase details, and we'll help you get the system up and running.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="p-4 border border-white/10 rounded-md mt-2 bg-secondary/30">
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border-b border-white/10 pb-6 last:border-0">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=40&width=40&text=U${i}`}
                        alt={`User ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">User{i}</p>
                      <p className="text-sm text-muted-foreground">Posted on {new Date().toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill={star <= 4 ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={star <= 4 ? "text-yellow-500" : "text-muted-foreground"}
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p>
                    Great system! Easy to install and works perfectly. The support team was very helpful when I had
                    questions about configuration.
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Video Preview */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Video Preview</h2>
          <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-secondary/50">
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full h-16 w-16 flex items-center justify-center border-white/10 bg-black/50 hover:bg-black/70"
              >
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
                  className="h-6 w-6"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <span className="sr-only">Play Video</span>
              </Button>
            </div>
            <Image
              src="/placeholder.svg?height=600&width=1200&text=Video+Preview"
              alt="Video Preview"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Related Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
