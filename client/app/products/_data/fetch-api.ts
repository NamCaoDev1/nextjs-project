import envConfig from "@/app/config";

export const getProducts = async () => {
  const productRes = await fetch(
    `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/products`
  );
  const productResJson = await productRes.json();
  return productResJson;
};
