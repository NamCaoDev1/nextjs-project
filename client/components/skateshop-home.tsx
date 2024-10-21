'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Menu, X, ChevronRight } from "lucide-react"

export function SkateshopHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="#">
              <span className="font-bold">SKATESHOP</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#">
                Decks
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#">
                Wheels
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#">
                Trucks
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#">
                Bearings
              </a>
            </nav>
          </div>
          <button
            className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            type="button"
            aria-haspopup="dialog"
            aria-expanded={mobileMenuOpen}
            aria-controls="radix-:R1mcq:"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </button>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Input className="bg-background" placeholder="Search products..." type="search" />
            </div>
            <Button variant="ghost" size="icon" className="mr-2">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
            <Button variant="default">Sign In</Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden">
          <div className="fixed inset-y-0 left-0 z-50 h-[100dvh] w-full max-w-xs bg-background p-6 shadow-lg animate-in slide-in-from-left">
            <div className="flex items-center justify-between">
              <a className="flex items-center space-x-2" href="#">
                <span className="font-bold">SKATESHOP</span>
              </a>
              <Button
                className="h-9 w-9"
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            <nav className="mt-8 grid gap-2">
              <a
                className="flex w-full items-center rounded-md text-sm font-medium hover:underline"
                href="#"
              >
                Decks
              </a>
              <a
                className="flex w-full items-center rounded-md text-sm font-medium hover:underline"
                href="#"
              >
                Wheels
              </a>
              <a
                className="flex w-full items-center rounded-md text-sm font-medium hover:underline"
                href="#"
              >
                Trucks
              </a>
              <a
                className="flex w-full items-center rounded-md text-sm font-medium hover:underline"
                href="#"
              >
                Bearings
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to Skateshop
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Discover the best skateboards and accessories for your riding style.
              </p>
            </div>
            <div className="space-x-4">
              <Button className="h-11 px-8">Shop Now</Button>
              <Button variant="outline" className="h-11 px-8">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={`/placeholder.svg?height=300&width=300`}
                  alt={`Featured Product ${i}`}
                  className="w-full h-[300px] object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <Button variant="secondary" className="h-11 px-8">
                    View Product
                  </Button>
                </div>
                <div className="p-4 bg-white dark:bg-gray-900">
                  <h3 className="font-semibold text-lg mb-2">Product Name</h3>
                  <p className="text-gray-600 dark:text-gray-300">$99.99</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" className="h-11 px-8">
              View All Products
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}