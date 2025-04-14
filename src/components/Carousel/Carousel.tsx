'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx'; // for conditional class names

type ImageItem = {
  id: number;
  image: StaticImageData;
  alt: string;
};

type PhotoCarouselProps = {
  images: ImageItem[];
  height?: string; // Tailwind height class, e.g. 'h-screen', 'h-[400px]'
  width?: string; // Tailwind width class, optional
};

const PhotoCarousel = ({
  images,
  height = 'h-screen',
  width = 'w-full',
}: PhotoCarouselProps) => {
  return (
    <div className={clsx('overflow-hidden', height, width)}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        className="w-full h-full"
      >
        {images.map((src) => (
          <SwiperSlide key={src.id}>
            <div className="relative w-full h-full">
              <Image
                src={src.image}
                alt={src.alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoCarousel;
