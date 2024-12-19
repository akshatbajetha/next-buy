import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import { fetchSingleProduct } from "@/utils/actions";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "@/components/products/FavouriteToggleButton";
import AddToCart from "@/components/single-product/AddToCart";
import ProductRating from "@/components/single-product/ProductRating";
import ShareButton from "@/components/single-product/ShareButton";

async function SingleProductPage({ params }: { params: { id: string } }) {
  const product = await fetchSingleProduct(params.id);
  const { name, image, company, description, price } = product;
  const cost = formatCurrency(price);
  return (
    <section>
      <BreadCrumbs name={product.name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE FIRST COL */}
        <div className="relative h-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
            priority
            className="w-full rounded-md object-cover"
          />
        </div>
        {/* PRODUCT INFO SECOND COL */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <FavoriteToggleButton productId={params.id} />
            <ShareButton name={product.name} productId={params.id} />
          </div>
          {/* TODO <ProductRating productId={params.id} /> */}
          <ProductRating />
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded-md">
            {cost}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          {/* TODO <AddToCart productId={params.id} /> */}
          <AddToCart />
        </div>
      </div>
    </section>
  );
}
export default SingleProductPage;
