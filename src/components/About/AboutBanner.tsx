import Image from "next/image";
import React from "react";
import Container from "../Container";

type Props = {
  image: any;
  title: string;
  description: string;
  buttonText: any;
  link: any;
  margin: string;
};

const AboutBanner = ({ image, title, description }: Props) => {
  return (
    <section>
      <div className="relative flex items-center justify-center overflow-hidden md:min-h-[500px] min-h-[370px] md:w-full">
        {/* <Image
          src={image}
          alt={title}
          className="absolute inset-0 md:object-fill md:w-full w-full h-full"
          width={1200}
          height={700}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
          loading="eager"
        /> */}
        <Container className="flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-lime-700 leading-tight mb-6 max-w-4xl">
            {title}
          </h1>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl leading-relaxed">
            {description}
          </p>
        </Container>

        {/* Optional decorative background element */}
        <div className="absolute top-0 left-0 w-full h-full bg-lime-100 opacity-20 pointer-events-none z-0" />
      </div>
    </section>
  );
};

export default AboutBanner;
