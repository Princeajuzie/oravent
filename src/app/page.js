import Image from 'next/image'
import { NavbarWithMegaMenu } from '@/components/Navbar/Navbar'
import AllCarousel from '@/components/carousel/Allcarousel'
import { FooterWithSitemap } from '@/components/Footer/Footer'
import PricingComponent from '@/components/pricing/pricingComponent';
import GalleryComponent from '@/components/gallery/galleryComponent';
export default function Home() {
  return (
    <>

    <NavbarWithMegaMenu />

   
    
      <div>
        <AllCarousel />

       <GalleryComponent />
        <PricingComponent />
        
      </div>
      
      <FooterWithSitemap />
    </>
  )
}
