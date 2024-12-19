import { auth } from "@clerk/nextjs/server";
import { CardSignInButton } from "../form/Buttons";
import { fetchFavouriteId } from "@/utils/actions";
import FavoriteToggleForm from "./FavouriteToggleForm";
async function FavoriteToggleButton({ productId }: { productId: string }) {
  const { userId } = await auth();
  if (!userId) return <CardSignInButton />;
  const favoriteId = await fetchFavouriteId({ productId });

  return <FavoriteToggleForm favouriteId={favoriteId} productId={productId} />;
}
export default FavoriteToggleButton;
