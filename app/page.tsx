import {

  ClientReviews,
  FooterSection,
  FormSection,
  HeroSection,
  
} from "@/components";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FormSection />
      <ClientReviews />
      {/* <ServicesHome />
      <WhyUsSection />
      <OurAgenda />
      <AboutUsSection />
      <ClientReviews />
      <CtaSection /> */}
      <FooterSection />
    </>
  );
}
