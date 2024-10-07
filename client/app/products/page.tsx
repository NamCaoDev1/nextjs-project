import { Metadata } from "next";
import FeaturedProduct from "./_components/featured-product";
import StreamingComponent from "./_components/streaming-component";
import StreamingComponent1 from "./_components/streaming-component-1";
import StreamingComponent2 from "./_components/streaming-component-2";
import { Suspense } from "react";
import StreamingClient from "./_components/streaming-client";

export const metadata: Metadata = {
  title: "Danh sách sản phẩm",
  description: "Danh sách sản phẩm",
};

export default async function ProductListPage() {
  return (
    <section className="w-full py-12">
      <FeaturedProduct />
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
        <StreamingClient />
      </Suspense>
    </section>
  );
}
