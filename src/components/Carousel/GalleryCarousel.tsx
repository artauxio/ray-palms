"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

import ResidentialOne from "../../../public/images/banner-one.webp";
import ResidentialTwo from "../../../public/images/banner-two.jpeg";
import ResidentialThree from "../../../public/images/banner-three.jpeg";
import ResidentialFour from "../../../public/images/banner-four.jpeg";

const GalleryCarousel = () => {
  const images = [
    { id: 1, src: ResidentialOne, alt: "Residential Image One" },
    { id: 2, src: ResidentialTwo, alt: "Residential Image Two" },
    { id: 3, src: ResidentialThree, alt: "Residential Image Three" },
    { id: 4, src: ResidentialFour, alt: "Residential Image One" },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      {/* Decorative Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl text-lime-600 font-bold relative inline-block">
          <span className="before:absolute before:w-[80px] before:h-[1.5px] before:bg-lime-600 before:-left-[90px] before:top-1/2 before:-translate-y-1/2"></span>
          <span className="mx-6">Gallery</span>
          <span className="after:absolute after:w-[80px] after:h-[1.5px] after:bg-lime-600 after:-right-[90px] after:top-1/2 after:-translate-y-1/2"></span>
        </h2>
      </div>

      {/* Carousel */}
      <div className="md:h-[350px] h-[300px]">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          // autoplay={{ delay: 2000, disableOnInteraction: false }}
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
                  className="object-fill rounded-tl-[100px] rounded-br-[100px]"
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
