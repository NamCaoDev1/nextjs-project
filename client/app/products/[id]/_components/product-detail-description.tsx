'use client'
import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'

const ProductDetailDescription = () => {
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)
  return (
    <div>
        <button
          className="flex items-center justify-between w-full py-2 text-left"
          onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
        >
          <span className="font-semibold">Description</span>
          <ChevronDown className={`w-5 h-5 transition-transform ${isDescriptionOpen ? 'transform rotate-180' : ''}`} />
        </button>
        {isDescriptionOpen && (
          <p className="mt-2 text-sm text-gray-600">
            Bostons most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles
          </p>
        )}
      </div>
  )
}

export default ProductDetailDescription