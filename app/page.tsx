import {
  // ClientReviews,
  FooterSection,
  FormSection,
  HeroSection,
  OurAgenda,
  // OurPicks,
  OurProducts,
  OurValues,
} from "@/components";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurValues />
      {/* <OurPicks /> */}
      <OurProducts />
      <OurAgenda />
      
      {/* <ClientReviews /> */}
      <FormSection />
      <FooterSection />
    </>
  );
}
