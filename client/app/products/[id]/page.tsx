import envConfig from '@/app/config'
import ProductDetailInfo from '@/app/products/[id]/_components/product-detail-info'
import { Product } from '@/app/products/_components/featured-product'
import { notFound } from 'next/navigation'
import React from 'react'

async function getProduct(id: string) {
    const res = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/products/${id}`)
    const {data: products}: {data:Product} = await res.json()
    if (!products) notFound()
    return products
  }

export async function generateStaticParams() {
    const {data: products} = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/products`).then((res) =>
      res.json()
    )
   
    return products.map((product: Product) => ({
      id: product.id.toString(),
    }))
}
   
export async function generateMetadata({ params }: { params: { id: string } }) {
    const product = await getProduct(params.id)
   
    return {
      title: product.name,
    }
}

const ProductDetailPage = async ({params}: {params: { id: string }}) => {
  const product = await getProduct(params.id)
  return (
    <ProductDetailInfo product={product} />
  )
}

export default ProductDetailPage