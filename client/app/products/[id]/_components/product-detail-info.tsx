import React from 'react'
import { Heart } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ProductDetailActionButtons from '@/app/products/[id]/_components/product-detail-action-buttons'
import ProductDetailDescription from '@/app/products/[id]/_components/product-detail-description'
import { Product } from '@/app/products/_components/featured-product'

interface ProductDetailInfoProps {
    product: Product
}

const ProductDetailInfo: React.FC<ProductDetailInfoProps> = ({product}) => {
  return (
    <Card className="max-w-2xl mx-auto">
    <CardHeader>
      <CardTitle className="text-2xl font-bold">{product.name}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-6">
      <div className="aspect-square bg-gray-200 flex items-center justify-center">
        <svg
          className="w-12 h-12 text-gray-400"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect height="18" rx="2" ry="2" width="18" x="3" y="3" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M20.4 14.5 16 10 4 20" />
        </svg>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-2xl font-bold">${product.price}</p>
          <p className="text-sm text-gray-500">skateshop</p>
        </div>
        <Heart className="w-6 h-6 text-gray-400 cursor-pointer" />
      </div>
      <p className="text-sm text-gray-500">77 in stock</p>
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-gray-300"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
      <ProductDetailActionButtons />
      <ProductDetailDescription />
    </CardContent>
  </Card>
  )
}

export default ProductDetailInfo