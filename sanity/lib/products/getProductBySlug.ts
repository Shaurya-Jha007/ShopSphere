import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";
import { ProductType } from "@/sanity.types";

export const getProductBySlug = async function (
  slug: string
): Promise<ProductType | null> {
  const PRODUCT_BY_ID_QUERY = defineQuery(`
      *[
        _type == "productType" && slug.current == $slug
      ] | order(name asc)[0]
    `);

  try {
    const product = await sanityFetch({
      query: PRODUCT_BY_ID_QUERY,
      params: {
        slug,
      },
    });
    return product?.data || null;
  } catch (error) {
    console.error("Error fetching product by ID :", error);
    return null;
  }
};
