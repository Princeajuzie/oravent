import Image from "next/image";
import { NavbarWithMegaMenu } from "@/components/Navbar/Navbar";
import AllCarousel from "@/components/carousel/Allcarousel";
import { FooterWithSitemap } from "@/components/Footer/Footer";
import PricingComponent from "@/components/pricing/pricingComponent";
import GalleryComponent from "@/components/gallery/galleryComponent";
import AboutComponent from "@/components/about/AboutComponent";
import ReviewComponent from "@/components/reviews/ReviewComponent";
export default function Home() {
  return (
    <>
      {/* navbar  component */}
      <NavbarWithMegaMenu />

      <div>
        {/* home carousel */}
        <AllCarousel />

        {/* gallery component */}
        <GalleryComponent />

        {/* about  component */}
        <AboutComponent />

        {/* review  component */}

        <ReviewComponent />

        {/* pricing component */}
        <PricingComponent />
      </div>

      {/* footer component */}
      <FooterWithSitemap />
    </>
  );
}
