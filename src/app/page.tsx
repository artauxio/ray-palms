import PhotoCarousel from "@/components/Carousel/Carousel";
import ResidentialOne from "../../public/images/residential-one.webp";
import ResidentialTwo from "../../public/images/residential-two.webp";
import ResidentialThree from "../../public/images/residential-three.webp";

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
      <PhotoCarousel images={images} height="h-[500px]" />

    </>
  );
}
