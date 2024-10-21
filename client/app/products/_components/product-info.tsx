"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";
import { getProducts } from "../_data/fetch-api";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

interface Product {
  id: number;
  image?: string;
  name?: string;
  price?: number;
}

const ProductInfo = () => {
  const { data: products } = useSuspenseQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  return (
    <>
      {products.data.map((product: Product, index: number) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className="p-0">
            <Image
              src={
                product.image ||
                "https://g-rn1mpzhpqyp.vusercontent.net/placeholder.svg"
              }
              alt={product.name || ""}
              width={300}
              height={300}
              className="object-cover w-full h-[200px]"
            />
          </CardContent>
          <CardFooter className="flex flex-col items-start p-4">
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-sm text-gray-500">${product.price}</p>
            <div className="flex items-center justify-between w-full mt-4">
              <Button className="w-full mr-2">Add to cart</Button>
              <Link href={`/products/${product.id}`}>
                <Button variant="outline" size="icon">
                  <Eye className="h-4 w-4" />
                  <span className="sr-only">View product</span>
                </Button>
              </Link>
            </div>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default ProductInfo;
