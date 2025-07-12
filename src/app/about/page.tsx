import AboutBanner from "@/components/About/AboutBanner";
import React from "react";
import AboutBannerImage from "../../../public/images/banner-one.webp";
import TwoPointerSection from "@/components/About/TwoPointerSection";
import CoreValues from "@/components/About/CoreValues";
import GetInTouchForm from "@/components/GetInTouchForm";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <AboutBanner
        image={AboutBannerImage}
        title="Elevating Spaces. Building Legacies."
        description="At SVS ELEVATE LLP, we don't just construct buildings — we craft environments where life, work, and community flourish. Rooted in trust and driven by design excellence, we create structures that stand the test of time and transform skylines with purpose."
        buttonText={undefined}
        link={undefined}
        margin={""}
      />
      <TwoPointerSection />
      <CoreValues />
      <GetInTouchForm />
    </>
  );
};

export default page;
