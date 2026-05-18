"use client";
import Image from "next/image";

const RoomGallery = () => {
  const rooms = [
    { id: 1, src: "/images/bedroom.webp", alt: "Bedroom", title: "Bedroom", subtitle: "Rest & Relaxation" },
    { id: 2, src: "/images/livingroom.webp", alt: "Living Room", title: "Living Room", subtitle: "Comfort & Entertainment" },
    { id: 3, src: "/images/kitchen.webp", alt: "Kitchen", title: "Kitchen", subtitle: "Culinary Excellence" },
    { id: 4, src: "/images/bathroom.webp", alt: "Bathroom", title: "Bathroom", subtitle: "Luxury & Wellness" },
  ];

  return (
    <section className="py-16 px-4 bg-[#f0f0ec]">
      {/* Decorative Heading */}
      <div className="text-center mb-12">
        <h2 className="relative inline-block text-4xl font-bold text-[#485e4c]">
          <span className="before:absolute before:w-[80px] before:h-[1.5px] before:bg-[#485e4c] before:-left-[90px] before:top-1/2 before:-translate-y-1/2"></span>
          <span className="mx-6">Crafted for Comfort & Style</span>
          <span className="after:absolute after:w-[80px] after:h-[1.5px] after:bg-[#485e4c] after:-right-[90px] after:top-1/2 after:-translate-y-1/2"></span>
        </h2>
      </div>

      {/* Room Gallery Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map(({ id, src, alt, title, subtitle }) => (
            <div key={id} className="group relative h-[300px] overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover rounded-tl-[60px] rounded-br-[60px] transition-transform duration-300 group-hover:scale-110"
                  priority
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-[60px] rounded-br-[60px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-black opacity-20 rounded-tl-[60px] rounded-br-[60px]"></div>
                  <div className="relative text-center text-white z-10">
                    <h3 className="text-3xl font-semibold tracking-wide mb-2">
                      {title}
                    </h3>
                    <p className="text-l font-semibold opacity-90">
                      {subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomGallery;