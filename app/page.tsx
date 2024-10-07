import {
  ClientReviews,
  FooterSection,
  FormSection,
  HeroSection,
  OurAgenda,
  OurPicks,
  OurProducts,
  OurValues,
} from "@/components";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurPicks />
      <OurProducts />
      <OurAgenda />
      <OurValues />
      <ClientReviews />
      <FormSection />
      <FooterSection />
    </>
  );
}
