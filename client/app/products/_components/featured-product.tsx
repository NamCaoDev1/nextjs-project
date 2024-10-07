import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import envConfig from "@/app/config";

interface Product {
  id: number;
  image?: string;
  name?: string;
  price?: number;
}

const FeaturedProduct = async () => {
  const productRes = await fetch(
    `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/products`
  );
  const productResJson = await productRes.json();
  const productList = productResJson.data;
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured products
            </h2>
            <p className="mt-2 text-gray-500">
              Explore products from around the world
            </p>
          </div>
          <Button variant="ghost" className="hidden sm:flex">
            View all products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {productList.map((product: Product, index: number) => (
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
                  <Button variant="outline" size="icon">
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">View product</span>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Button variant="ghost" className="mt-8 sm:hidden">
          View all products
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default FeaturedProduct;
