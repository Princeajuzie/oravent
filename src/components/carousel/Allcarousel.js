"use client";
import { Carousel } from "@material-tailwind/react";
import CustomButton from "../button/CustomButton";
export default function AllCarousel() {
  const Event = "Contact Us"
  return (
    <div className=" relative  " style={{ height: "calc(100vh - 9.625vh)" }}>
      <div className="absolute z-30 top-0 bg-black/60 h-[inherit] w-full text-[white]  flex items-center px-10 lg:pl-10">
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
      <CustomButton Value={Event} color="white" variant="gradient" className="text-black bg-white"/>
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
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
}
