import { Category, ProductType } from "@/sanity.types";
import ProductGrid from "./ProductGrid";
import { CategorySelectorComponent } from "./ui/category-selector";

interface ProductsViewProps {
  products: ProductType[];
  categories: Category[];
}

export default function ProductsView({
  products,
  categories,
}: ProductsViewProps) {
  return (
    <section className="flex flex-col">
      <div className="w-full sm:w-[200px]">
        <CategorySelectorComponent categories={categories} />
      </div>
      <div className="flex-1">
        <div>
          <ProductGrid products={products} />
          <hr className="w-1/2 sm:w-3/4" />
        </div>
      </div>
    </section>
  );
}
