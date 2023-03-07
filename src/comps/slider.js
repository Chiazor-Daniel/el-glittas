import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";

export default function MySwiper() {
  return (
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-full"
      >
        <SwiperSlide>
          <div className="flex justify-center items-center h-full m-auto gap-4">
            <img classname="shadow-md" src="https://el-hazyglittas.com/static/media/PRODUCT5.c6c06104e36d0ff1b977.jpg" alt="product" />
            <div className="flex flex-col items-center gap-4">
              <p className="uppercase">2 color shampoo</p>
              <p className="uppercase text-sm">conditions, moisturizers and control frizz</p>
              <p className="text-xs">$100</p>
              <button className='p-2 w-[40%] text-sm bg-[#1abc9c] text-white rounded-md'>Add to cart</button>
              <button className='p-2 w-[40%] text-sm bg-[#1abc9c] text-white rounded-md'>View Product</button>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide><div className="flex justify-center items-center h-full m-auto gap-4">
            <img classname="shadow-md" src="https://el-hazyglittas.com/static/media/PRODUCT4.411f5f4a6e6d7c7f1c51.jpg" alt="product" />
            <div className="flex flex-col items-center gap-4">
              <p className="uppercase">conditioner (20 oZ)</p>
              <p className="uppercase text-sm">max moisture super softening deep treatment</p>
              <p className="text-xs">$100</p>
              <button className='p-2 w-[40%] text-sm bg-[#1abc9c] text-white rounded-md'>Add to cart</button>
              <button className='p-2 w-[40%] text-sm bg-[#1abc9c] text-white rounded-md'>View Product</button>
            </div>

          </div></SwiperSlide>
        <SwiperSlide><div className="flex justify-center items-center h-full m-auto gap-4">
            <img classname="shadow-md" src="https://el-hazyglittas.com/static/media/PRODUCT2.64a7c4d719312957d674.jpg" alt="product" />
            <div className="flex flex-col items-center gap-4">
              <p className="uppercase">2 color shampoo</p>
              <p className="uppercase">conditioner (20 oZ)</p>
              <p className="uppercase text-sm">max moisture super softening deep treatment</p>
              <button className='p-2 w-[40%] text-sm bg-[#1abc9c] text-white rounded-md'>Add to cart</button>
              <button className='p-2 w-[40%] text-sm bg-[#1abc9c] text-white rounded-md'>View Product</button>
            </div>

          </div></SwiperSlide>
      </Swiper>
  );
}
