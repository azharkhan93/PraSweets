import {
  ClientReviews,
  FooterSection,
  FormSection,
  HeroSection,
  OurAgenda,
  OurPicks,
} from "@/components";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurPicks />
      <FormSection />
      <ClientReviews />
      <OurAgenda />
      <FooterSection />
    </>
  );
}
