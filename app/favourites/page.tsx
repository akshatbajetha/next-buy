import { fetchUserFavourites } from "@/utils/actions";
import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";

async function FavouritesPage() {
  const favourites = await fetchUserFavourites();
  if (favourites.length === 0)
    return <SectionTitle text="You have no Favourites yet." />;
  return (
    <div>
      <SectionTitle text="Favourites" />
      <ProductsGrid
        products={favourites.map((favourite) => favourite.product)}
      />
    </div>
  );
}

export default FavouritesPage;
