"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

import ResidentialOne from "../../../public/images/residential-one.webp";
import ResidentialTwo from "../../../public/images/residential-two.webp";
import ResidentialThree from "../../../public/images/residential-three.webp";

const GalleryCarousel = () => {
  const images = [
    { id: 1, src: ResidentialOne, alt: "Residential Image One" },
    { id: 2, src: ResidentialTwo, alt: "Residential Image Two" },
    { id: 3, src: ResidentialThree, alt: "Residential Image Three" },
    { id: 4, src: ResidentialOne, alt: "Residential Image One" },
    { id: 5, src: ResidentialTwo, alt: "Residential Image Two" },
    { id: 6, src: ResidentialThree, alt: "Residential Image Three" },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      {/* Decorative Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl text-green-800 font-bold relative inline-block">
          <span className="before:absolute before:w-[80px] before:h-[1.5px] before:bg-[#005066] before:-left-[90px] before:top-1/2 before:-translate-y-1/2"></span>
          <span className="mx-6">Gallery</span>
          <span className="after:absolute after:w-[80px] after:h-[1.5px] after:bg-[#005066] after:-right-[90px] after:top-1/2 after:-translate-y-1/2"></span>
        </h2>
      </div>

      {/* Carousel */}
      <div className="md:h-[300px] h-[300px]">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={3}
          slidesPerGroup={1}
          centeredSlides={true}
          spaceBetween={10}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full h-full"
        >
          {images.map((src) => (
            <SwiperSlide key={src.id}>
              <div className="relative w-full h-full">
                <Image
                  src={src.src}
                  alt={src.alt}
                  fill
                  className="object-cover rounded-tl-[100px] rounded-br-[100px]"
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GalleryCarousel;
