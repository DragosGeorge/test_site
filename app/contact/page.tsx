import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-16 py-12">
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold">Contact Us</h1>
              <p className="text-xl text-muted-foreground">
                Get in touch with our team for inquiries or custom development
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-red-100 p-2">
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
                    className="h-5 w-5 text-red-600"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">contact@metin2dev.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-red-100 p-2">
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
                    className="h-5 w-5 text-red-600"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-medium">Discord</h3>
                  <p className="text-muted-foreground">Metin2Dev#1234</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-red-100 p-2">
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
                    className="h-5 w-5 text-red-600"
                  >
                    <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-medium">Twitch</h3>
                  <p className="text-muted-foreground">twitch.tv/metin2dev</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <Button variant="outline" size="icon">
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
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="outline" size="icon">
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
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="outline" size="icon">
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
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="outline" size="icon">
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
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          <div className="bg-background p-6 rounded-xl border">
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What is this regarding?" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message" rows={5} />
              </div>

              <Button className="bg-red-600 hover:bg-red-700 mt-2">Send Message</Button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-8 text-center">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Find answers to common questions about our services
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-left max-w-5xl mx-auto">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">How do I install your systems?</h3>
                <p className="text-muted-foreground">
                  All our systems come with detailed installation instructions. We also offer installation support if
                  you need assistance.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Do you offer custom development?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer custom development services tailored to your specific needs. Contact us to discuss your
                  requirements.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept PayPal, credit/debit cards, and cryptocurrency payments. All transactions are secure.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Do you offer refunds?</h3>
                <p className="text-muted-foreground">
                  We offer a 30-day warranty for all our systems. If the system doesn't work as described, we'll fix it
                  or provide a refund.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">How long does development take?</h3>
                <p className="text-muted-foreground">
                  Development time varies depending on the complexity of the project. We'll provide an estimated
                  timeline during our initial consultation.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Can I request modifications to existing systems?</h3>
                <p className="text-muted-foreground">
                  Yes, we can modify our existing systems to better suit your needs. Contact us with your requirements
                  for a quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
