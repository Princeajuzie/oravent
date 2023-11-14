import Image from 'next/image'
import { NavbarWithMegaMenu } from '@/components/Navbar/Navbar'
import AllCarousel from '@/components/carousel/Allcarousel'
export default function Home() {
  return (
    <>
    <NavbarWithMegaMenu />
    
      <div>
        <AllCarousel />
      </div>
    </>
  )
}
