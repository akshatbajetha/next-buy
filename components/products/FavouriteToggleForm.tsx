"use client";

import { usePathname } from "next/navigation";
import FormContainer from "../form/FormContainer";
import { toggleFavouriteAction } from "@/utils/actions";
import { CardSubmitButton } from "../form/Buttons";

type FavoriteToggleFormProps = {
  productId: string;
  favouriteId: string | null;
};

function FavoriteToggleForm({
  productId,
  favouriteId,
}: FavoriteToggleFormProps) {
  const pathname = usePathname();
  const toggleAction = toggleFavouriteAction.bind(null, {
    productId,
    favouriteId,
    pathname,
  });
  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavourite={favouriteId ? true : false} />
    </FormContainer>
  );
}
export default FavoriteToggleForm;
