"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent } from "@/components/ui/card"

export default function AdminAddProduct() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    featured: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real app, you would call an API to save the product
      console.log("Submitting product:", formData)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Reset form
      setFormData({
        name: "",
        description: "",
        price: "",
        category: "",
        featured: false,
      })

      alert("Product added successfully!")
    } catch (error) {
      console.error("Error adding product:", error)
      alert("Failed to add product. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Product Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-secondary/80 border-white/10"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="price">Price ($)</Label>
          <Input
            id="price"
            name="price"
            type="number"
            min="0"
            step="0.01"
            value={formData.price}
            onChange={handleChange}
            required
            className="bg-secondary/80 border-white/10"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
            <SelectTrigger id="category" className="bg-secondary/80 border-white/10">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className="bg-secondary border-white/10">
              <SelectItem value="combat">Combat Systems</SelectItem>
              <SelectItem value="economy">Economy Systems</SelectItem>
              <SelectItem value="interface">Interface Systems</SelectItem>
              <SelectItem value="events">Event Systems</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="featured"
            checked={formData.featured}
            onCheckedChange={(checked) => handleSwitchChange("featured", checked)}
          />
          <Label htmlFor="featured">Featured Product</Label>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          required
          className="bg-secondary/80 border-white/10"
        />
      </div>

      <div className="space-y-2">
        <Label>Product Images</Label>
        <Card className="bg-secondary/50 border-white/10">
          <CardContent className="p-4">
            <div className="flex flex-col items-center justify-center gap-4 p-4 border-2 border-dashed border-white/10 rounded-lg">
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
                className="h-10 w-10 text-muted-foreground"
              >
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
                <line x1="16" x2="22" y1="5" y2="5" />
                <line x1="19" x2="19" y1="2" y2="8" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
              <div className="flex flex-col items-center gap-1 text-center">
                <p className="text-sm font-medium">Drag and drop your images here</p>
                <p className="text-xs text-muted-foreground">PNG, JPG or GIF up to 10MB</p>
              </div>
              <Button type="button" variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
                Browse Files
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-2">
        <Label>Product Video (Optional)</Label>
        <Card className="bg-secondary/50 border-white/10">
          <CardContent className="p-4">
            <div className="flex flex-col items-center justify-center gap-4 p-4 border-2 border-dashed border-white/10 rounded-lg">
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
                className="h-10 w-10 text-muted-foreground"
              >
                <path d="m22 8-6 4 6 4V8Z" />
                <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
              </svg>
              <div className="flex flex-col items-center gap-1 text-center">
                <p className="text-sm font-medium">Drag and drop your video here</p>
                <p className="text-xs text-muted-foreground">MP4 or WebM up to 100MB</p>
              </div>
              <Button type="button" variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
                Browse Files
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Button type="submit" className="bg-red-600 hover:bg-red-700 glow-effect" disabled={isSubmitting}>
        {isSubmitting ? "Adding Product..." : "Add Product"}
      </Button>
    </form>
  )
}
