import {
  // ClientReviews,
  FooterSection,
  FormSection,
  HeroSection,
  // OurPicks,
  OurProducts,
} from "@/components";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <OurValues /> */}
      {/* <OurPicks /> */}
      <OurProducts />
      {/* <OurAgenda /> */}
      
      {/* <ClientReviews /> */}
      <FormSection />
      <FooterSection />
    </>
  );
}
