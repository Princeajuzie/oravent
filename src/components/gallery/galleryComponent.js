import CustomButton from "../button/CustomButton"
export default function GalleryComponent() {
    const Text = "More"
  return (
    <div className="">
      <div className="bg-white dark:bg-gray-800 h-full  py-6 sm:py-8 lg:py-12 px-5 lg:px-7 ">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">Gallery</h2>

                <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
                    This is a section of some simple filler text,
                    also known as placeholder text. It shares some characteristics of a real written text.
                </p>
            </div>

            <CustomButton  Value={Text} variant="outlined" className="px-4 py-2 md:px-8 md:py-3 md:text-base dark:bg-gray-700 dark:border-none transition duration-100"/>
     
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://img.freepik.com/premium-photo/luxury-decorated-with-flowers-festive-banquet-hall-restaurant-pink_199620-2911.jpg?w=900" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Party</span>
            </a>


    
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80 object-cover">
                <img src="https://img.freepik.com/free-photo/luxurious-dinner-hall-with-large-crystal-chandelier_8353-565.jpg?w=900&t=st=1700024134~exp=1700024734~hmac=440be96fdd63eb9dbd4395aa78a1abf43992e9e2fb09006b8d7a542358ceb35f" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Weeding</span>
            </a>
         
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="https://img.freepik.com/premium-photo/decor-wedding-banquet-hall-wedding-venue-decorations_67394-2442.jpg?w=900" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span>
            </a>
   

            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://img.freepik.com/premium-photo/beautiful-table-set-some-festive-event-party-wedding-reception_118454-2708.jpg?w=900" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span>
            </a>
        </div>
    </div>
</div>
    </div>
  )
}
