import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">About Our Development Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Learn more about our Metin2 development services and the source we offer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-4">
              <p className="text-lg">
                We are a team of experienced Metin2 developers with a passion for creating high-quality systems and
                solutions for Metin2 servers. With years of experience in the field, we understand the unique challenges
                and requirements of Metin2 development.
              </p>
              <p className="text-lg">
                Our goal is to provide server owners with reliable, optimized, and secure systems that enhance the
                gameplay experience for their players. Whether you need a custom feature or one of our pre-built
                systems, we're here to help you take your server to the next level.
              </p>
              <div className="flex gap-4 mt-4">
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <Link href="/marketplace">Browse Our Systems</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="Metin2 Development Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Source Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold">Our Premium Source</h2>
              <p className="text-xl text-muted-foreground max-w-3xl">
                A comprehensive Metin2 source with advanced features and optimizations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden order-2 md:order-1">
                <Image src="/placeholder.svg?height=800&width=800" alt="Metin2 Source" fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-4 order-1 md:order-2">
                <h3 className="text-2xl font-bold">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
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
                      className="text-red-600 h-6 w-6 shrink-0"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>Optimized for high performance and stability</span>
                  </li>
                  <li className="flex items-start gap-2">
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
                      className="text-red-600 h-6 w-6 shrink-0"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>Enhanced security features to prevent exploits</span>
                  </li>
                  <li className="flex items-start gap-2">
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
                      className="text-red-600 h-6 w-6 shrink-0"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>Custom systems integrated seamlessly</span>
                  </li>
                  <li className="flex items-start gap-2">
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
                      className="text-red-600 h-6 w-6 shrink-0"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>Regular updates and support</span>
                  </li>
                  <li className="flex items-start gap-2">
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
                      className="text-red-600 h-6 w-6 shrink-0"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>Comprehensive documentation</span>
                  </li>
                </ul>
                <p className="mt-4">
                  Our premium source is the result of years of development and optimization. It provides a solid
                  foundation for your Metin2 server with numerous enhancements over the standard source.
                </p>
                <Button asChild className="bg-red-600 hover:bg-red-700 mt-4 w-fit">
                  <Link href="/contact">Inquire About Our Source</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-3xl font-bold">Our Development Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the experts behind our Metin2 systems
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4">
                <div className="relative h-48 w-48 rounded-full overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=200&width=200&text=Developer${i}`}
                    alt={`Team Member ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold">Developer {i}</h3>
                  <p className="text-muted-foreground">Senior Metin2 Developer</p>
                </div>
                <p className="text-sm text-muted-foreground max-w-xs">
                  With over 5 years of experience in Metin2 development, specializing in system optimization and custom
                  features.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 text-center">
              <h2 className="text-3xl font-bold">What Our Clients Say</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Feedback from server owners who have used our systems
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-background p-6 rounded-lg shadow-sm flex flex-col gap-4">
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-yellow-500"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic">
                    "The systems we purchased have significantly improved our server's gameplay. The implementation was
                    smooth and the support has been excellent."
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=40&width=40&text=C${i}`}
                        alt={`Client ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Server Owner {i}</p>
                      <p className="text-sm text-muted-foreground">Metin2 Server</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
