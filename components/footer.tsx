import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-background/90 backdrop-blur-sm">
      <div className="container flex flex-col gap-8 px-4 py-10 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
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
                className="h-6 w-6 text-red-500"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                <path d="M5 3v4" />
                <path d="M19 17v4" />
                <path d="M3 5h4" />
                <path d="M17 19h4" />
              </svg>
              <span className="font-bold text-xl">Metin2Dev</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium Metin2 development systems and solutions for your server.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-red-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-red-400 transition-colors">
                About
              </Link>
              <Link href="/marketplace" className="text-sm text-muted-foreground hover:text-red-400 transition-colors">
                Marketplace
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-red-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Categories</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/marketplace?category=combat"
                className="text-sm text-muted-foreground hover:text-red-400 transition-colors"
              >
                Combat Systems
              </Link>
              <Link
                href="/marketplace?category=economy"
                className="text-sm text-muted-foreground hover:text-red-400 transition-colors"
              >
                Economy Systems
              </Link>
              <Link
                href="/marketplace?category=interface"
                className="text-sm text-muted-foreground hover:text-red-400 transition-colors"
              >
                Interface Systems
              </Link>
              <Link
                href="/marketplace?category=events"
                className="text-sm text-muted-foreground hover:text-red-400 transition-colors"
              >
                Event Systems
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Contact</h3>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground">Email: contact@metin2dev.com</p>
              <p className="text-sm text-muted-foreground">Discord: Metin2Dev#1234</p>
              <div className="flex gap-4 mt-2">
                <Link href="#" className="text-muted-foreground hover:text-red-400 transition-colors">
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
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-red-400 transition-colors">
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
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-red-400 transition-colors">
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
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-red-400 transition-colors">
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
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/10 pt-8">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Metin2Dev. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-red-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-red-400 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
