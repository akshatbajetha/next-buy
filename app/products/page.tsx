import ProductsContainer from "@/components/products/ProductsContainer";

type searchParams = {
  layout?: string;
  search?: string;
};

async function ProductsPage({ searchParams }: { searchParams: searchParams }) {
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";
  return (
    <>
      <ProductsContainer layout={layout} search={search} />
    </>
  );
}
export default ProductsPage;
