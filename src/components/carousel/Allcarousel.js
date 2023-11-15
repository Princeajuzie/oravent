"use client";
import { Carousel } from "@material-tailwind/react";
import CustomButton from "../button/CustomButton";
import Event0 from "@/assets/images/event0.jpg";
import Event001 from "@/assets/images/event001.jpg";
import Event003 from "@/assets/images/event003.jpg";
import Image from "next/image";
import Link from "next/link";
export default function AllCarousel() {
  const Data = [
    {image : Event0, id: 1},
    {image : Event001, id: 2},
    {image : Event003, id: 3}
  ]
  const Event = "Contact Us"
  return (
    <div className=" relative  " style={{ height: "calc(100vh - 9.625vh)" }}>
      <div className="absolute z-30 top-0 bg-black/40 h-[inherit] w-full text-[white]  flex items-center px-10 lg:pl-12">
      <div class="text-left ltr:sm:text-left rtl:sm:text-right gap-8 w-fit ">
      <h2 class="text-2xl font-bold text-white sm:text-4xl md:text-5xl">
        Best Events Experience
      </h2>

      <p
        class=" max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
        officia corporis quasi doloribus iure architecto quae voluptatum beatae
        excepturi dolores.
      </p>

      <div class="mt-4 sm:mt-8">
      <Link href={"#Contact"}>
      
      <CustomButton Value={Event} color="white" variant="gradient" className="text-black bg-white"/>
      </Link>
      </div>
    </div>


      </div>
      <Carousel
        transition={{ duration: 1.5 }}
        autoplay={true}
        loop={true}
        prevArrow={false}
        nextArrow={false}
        navigation={false}
      >
        {Data.map((item)=>{
          return (
            <Image
            src={item.image}
            alt="image 1"
            className="h-full w-full object-cover"
          key={item.id} />
          )
        })}
  
   
      </Carousel>
    </div>
  );
}
