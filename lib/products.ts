// This is a mock implementation for demo purposes
// In a real application, this would connect to a database

interface Product {
  id: string
  name: string
  description: string
  longDescription?: string
  price: number
  image?: string
  category: string
  featured?: boolean
  features?: string[]
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Advanced Combat System",
    description: "Enhance your server's combat mechanics with this comprehensive system.",
    longDescription:
      "The Advanced Combat System is a complete overhaul of Metin2's combat mechanics, introducing new skills, combo systems, and damage calculations. It's designed to make combat more engaging and strategic for players.",
    price: 99.99,
    category: "combat",
    featured: true,
    features: [
      "New combo system with visual effects",
      "Balanced damage calculations",
      "Custom skill animations",
      "PvP enhancements and balancing",
      "Configurable settings",
    ],
  },
  {
    id: "2",
    name: "Economy Management Suite",
    description: "Control your server's economy with advanced tools and features.",
    price: 79.99,
    category: "economy",
    features: [
      "Anti-inflation measures",
      "Dynamic market system",
      "Custom shop interfaces",
      "Trading enhancements",
      "Economy analytics dashboard",
    ],
  },
  {
    id: "3",
    name: "Custom UI Framework",
    description: "Create a unique look for your server with this customizable UI system.",
    price: 59.99,
    category: "interface",
    featured: true,
    features: [
      "Fully customizable interface elements",
      "Modern design options",
      "Performance optimized",
      "Mobile-friendly layouts",
      "Easy configuration",
    ],
  },
  {
    id: "4",
    name: "Boss Event System",
    description: "Create exciting boss events with this comprehensive system.",
    price: 49.99,
    category: "events",
    features: [
      "Scheduled boss spawns",
      "Custom boss mechanics",
      "Reward distribution system",
      "Announcement integration",
      "Leaderboards and statistics",
    ],
  },
  {
    id: "5",
    name: "Guild Wars Enhancement",
    description: "Take guild wars to the next level with advanced features and mechanics.",
    price: 89.99,
    category: "combat",
    features: [
      "Territory control system",
      "Guild ranking and rewards",
      "Custom guild war maps",
      "Strategic objectives",
      "War scheduling system",
    ],
  },
  {
    id: "6",
    name: "Item Crafting System",
    description: "Implement a comprehensive crafting system for your server.",
    price: 69.99,
    category: "economy",
    featured: true,
    features: [
      "Multiple crafting professions",
      "Recipe discovery system",
      "Quality and rarity mechanics",
      "Crafting animations",
      "Material gathering enhancements",
    ],
  },
]

export async function getAllProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockProducts
}

export async function getFeaturedProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockProducts.filter((product) => product.featured)
}

export async function getProductById(id: string): Promise<Product | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockProducts.find((product) => product.id === id) || null
}

export async function getRelatedProducts(category: string): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockProducts.filter((product) => product.category === category).slice(0, 3)
}
