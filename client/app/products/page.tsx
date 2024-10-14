import { Metadata } from "next";
import FeaturedProduct from "./_components/featured-product";
import StreamingComponent from "./_components/streaming-component";
import StreamingComponent1 from "./_components/streaming-component-1";
import StreamingComponent2 from "./_components/streaming-component-2";
import { Suspense } from "react";
import SuspenseClient from "./_components/suspense-client";
import FeaturedProduct2 from "@/app/products/_components/featured-product-2";

export const metadata: Metadata = {
  title: "Danh sách sản phẩm",
  description: "Danh sách sản phẩm",
};


export default async function ProductListPage() {
  const res = await fetch('http://localhost:3000/api/products', {method: 'GET'});
  const resJson = await res.json();
  console.log('Res Json', resJson)
  return (
    <section className="w-full py-12">
      <FeaturedProduct />
      <FeaturedProduct2 />
      {/* <ProductWithProps products={productList} /> */}
      <Suspense fallback="Loading....1">
        <StreamingComponent />
      </Suspense>
      <Suspense fallback="Loading....2">
        <StreamingComponent1 />
      </Suspense>
      <Suspense fallback="Loading....3">
        <StreamingComponent2 />
      </Suspense>
      <Suspense fallback="Loading client....">
        <SuspenseClient />
      </Suspense>
    </section>
  );
}
