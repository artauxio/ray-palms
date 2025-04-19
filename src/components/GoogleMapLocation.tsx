import { MapPin } from "lucide-react";
import Container from "./Container";

export default function GoogleMapLocation() {
  return (
    <section className="relative bg-white py-12 px-4 md:px-20 overflow-hidden">
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
              stroke="#84cc16"
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
        <div className="relative z-10 text-center mb-10">
          <h2 className="text-4xl font-bold text-lime-600">
            <span className="border-lime-500 pb-2">
              Discover everything within your reach
            </span>
          </h2>
        </div>

        {/* Embedded Google Map */}
        <div className="relative z-10 w-full h-[450px] rounded-xl overflow-hidden shadow-xl border-2 border-lime-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3755.6543718383496!2d72.80051337594698!3d19.727333831200976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71ce95555550f%3A0x552a79e78c8e096!2sVBHC%20-%20Palghar!5e0!3m2!1sen!2sin!4v1745061222380!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen
            className="border-0"
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
              stroke="#84cc16"
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
