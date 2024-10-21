import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProductInfo from "./product-info";
import { Suspense } from "react";

const FeaturedProductSuspense = async () => {
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured products 2
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
          <Suspense fallback="Loading product....">
            <ProductInfo />
          </Suspense>
        </div>
        <Button variant="ghost" className="mt-8 sm:hidden">
          View all products
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default FeaturedProductSuspense;
