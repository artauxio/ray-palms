import { MapPin } from "lucide-react";
import Container from "./Container";

export default function GoogleMapLocation() {
  return (
    <section className="relative bg-[#f0f0ec] py-12 px-4 md:px-20 overflow-hidden">
      {/* SVG decorative background (floral wave) */}
      <Container>
        {/* Animated Background SVG */}
        <div className="absolute left-0 top-0 h-full w-60 opacity-30 z-0 animate-wave">
          <svg
            viewBox="0 0 200 600"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M100,0 C80,100 120,200 100,300 C80,400 120,500 100,600"
              fill="none"
              stroke="#485e4c" // using deep olive green instead of lime green
              strokeWidth="4"
            >
              <animate
                attributeName="d"
                dur="6s"
                repeatCount="indefinite"
                values="
                  M100,0 C80,100 120,200 100,300 C80,400 120,500 100,600;
                  M100,0 C85,110 115,190 105,310 C75,390 125,510 95,600;
                  M100,0 C80,100 120,200 100,300 C80,400 120,500 100,600"
              />
            </path>
          </svg>
        </div>

        {/* Section Heading */}
        <div className="relative z-10 text-center mb-10 max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold text-[#485e4c]">
            <span className="border-b-4 border-[#5b6c55] pb-2 inline-block">
              Discover everything within your reach
            </span>
          </h2>
        </div>

        {/* Embedded Google Map */}
        <div className="relative z-10 w-full h-[450px] rounded-xl overflow-hidden shadow-2xl border-2 border-[#d7d9d5]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3756.637451439712!2d72.77449899999999!3d19.685467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDQxJzA3LjciTiA3MsKwNDYnMjguMiJF!5e0!3m2!1sen!2sin!4v1754678456591!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="absolute right-0 top-0 h-full w-60 opacity-30 z-0 animate-wave">
          <svg
            viewBox="0 0 200 600"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M100,0 C80,100 120,200 100,300 C80,400 120,500 100,600"
              fill="none"
              stroke="#485e4c"
              strokeWidth="4"
            >
              <animate
                attributeName="d"
                dur="6s"
                repeatCount="indefinite"
                values="
                  M100,0 C80,100 120,200 100,300 C80,400 120,500 100,600;
                  M100,0 C85,110 115,190 105,310 C75,390 125,510 95,600;
                  M100,0 C80,100 120,200 100,300 C80,400 120,500 100,600"
              />
            </path>
          </svg>
        </div>
      </Container>
    </section>
  );
}
