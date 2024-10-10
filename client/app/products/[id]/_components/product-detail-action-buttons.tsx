'use client'
import React, {useState} from 'react'
import {  Minus, Plus,  } from 'lucide-react'
import { Button } from "@/components/ui/button"

const ProductDetailActionButtons = () => {
    const [quantity, setQuantity] = useState(1)
  
    const incrementQuantity = () => setQuantity(prev => prev + 1)
    const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1)
  return (
    <div className="flex items-center space-x-4">
    <div className="flex items-center border rounded-md">
      <Button variant="ghost" size="icon" onClick={decrementQuantity}>
        <Minus className="h-4 w-4" />
      </Button>
      <span className="w-12 text-center">{quantity}</span>
      <Button variant="ghost" size="icon" onClick={incrementQuantity}>
        <Plus className="h-4 w-4" />
      </Button>
    </div>
    <Button className="flex-1">Buy now</Button>
    <Button variant="outline" className="flex-1">Add to cart</Button>
  </div>
  )
}

export default ProductDetailActionButtons