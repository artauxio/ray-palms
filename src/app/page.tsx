import PhotoCarousel from "@/components/Carousel/Carousel";
import ResidentialOne from "../../public/images/residential-one.webp";
import ResidentialTwo from "../../public/images/residential-two.webp";
import ResidentialThree from "../../public/images/residential-three.webp";
import ProjectInfoSection from "@/components/ProjectInfoSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GalleryCarousel from "@/components/Carousel/GalleryCarousel";
import FloorPlans from "@/components/FloorPlans";
import ConnectivitySection from "@/components/ConnectivitySection";
import EMICalculator from "@/components/EMICalculator";
import GoogleMapLocation from "@/components/GoogleMapLocation";
import GetInTouchForm from "@/components/GetInTouchForm";

const images = [
  {
    id: 1,
    image: ResidentialOne,
    alt: "Residential Image One",
  },
  {
    id: 2,
    image: ResidentialTwo,
    alt: "Residential Image Two",
  },
  {
    id: 3,
    image: ResidentialThree,
    alt: "Residential Image Three",
  },
];

export default function Home() {
  return (
    <>
      <PhotoCarousel images={images} height="md:h-[700px] h-[500px]" />
      <ProjectInfoSection />
      <section id="amenities" className="scroll-mt-24">
        <AmenitiesSection />
      </section>
      <section id="gallery" className="scroll-mt-24">
        <GalleryCarousel />
      </section>
      <FloorPlans />
      <EMICalculator />
      <ConnectivitySection />
      <GoogleMapLocation />
      <section id="contact">
        <GetInTouchForm />
      </section>
    </>
  );
}


      {/* <section className="bg-[#f1fcf6] py-10">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-6">
            Gallery
          </h2>

          <div className="rounded-lg overflow-hidden">
            <PhotoCarousel
              images={images}
              height="h-[300px] md:h-[500px]"
              width="w-full"
            />
          </div>
        </div>
      </section> */}