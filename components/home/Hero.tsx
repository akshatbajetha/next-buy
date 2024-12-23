import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          Find What You Love, Love What You Buy
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Indulge in a shopping experience like no other, with a curated
          selection of products that inspire creativity, enhance comfort, and
          redefine everyday living.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
export default Hero;
