"use client"
import { FooterWithSitemap } from '@/components/Footer/Footer'
import { NavbarWithMegaMenu } from '@/components/Navbar/Navbar'
import GalleryComponent from '@/components/gallery/galleryComponent'

export default function page() {
  return (
    <div>
      <NavbarWithMegaMenu/>
        <GalleryComponent/>
        <hr className='text-gray-300 w-full'/>
      <FooterWithSitemap/>
    </div>
  )
}
