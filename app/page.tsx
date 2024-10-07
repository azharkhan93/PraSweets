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
      <OurValues />

<OurProducts />
      <FormSection />
      <ClientReviews />
      <OurAgenda />
      <FooterSection />
    </>
  );
}
