import LoadingContainer from "@/components/global/LoadingContainer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import { Suspense } from "react";

function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />} />
      <FeaturedProducts />
    </>
  );
}
export default HomePage;

// TODO Sort Analytics, Check CORS error, Fix the terminal error, Check the login bug after deployment
