import Image from "next/image";
import React from "react";
import Container from "../Container";

type Props = {
  image: any;
  title: string;
  description: string;
  buttonText?: any; // kept optional, not used here
  link?: any;
  margin?: string;
};

const AboutBanner = ({ image, title, description }: Props) => {
  return (
    <section>
      <div className="relative flex items-center justify-center overflow-hidden md:min-h-[500px] min-h-[370px] md:w-full bg-[#e4e2dc]">
        {/* If you want to use the image uncomment and apply palette-aware styles */}
        {/* <Image
          src={image}
          alt={title}
          className="absolute inset-0 md:object-fill md:w-full w-full h-full opacity-80"
          width={1200}
          height={700}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
          loading="eager"
        /> */}
        <Container className="flex flex-col items-center justify-center text-center px-4 relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#485e4c] leading-tight mb-6 max-w-4xl drop-shadow-sm">
            {title}
          </h1>
          <p className="text-base md:text-lg text-[#5b6c55] max-w-2xl leading-relaxed tracking-wide">
            {description}
          </p>
        </Container>

        {/* Optional decorative background element */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#e4e2dc] opacity-30 pointer-events-none z-0" />
      </div>
    </section>
  );
};

export default AboutBanner;
