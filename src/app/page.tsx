import Hero from "@/components/Home/Hero";
import CollectionsPreview from "@/components/Home/CollectionsPreview";
import ManufacturingPreview from "@/components/Home/ManufacturingPreview";
import LegacySection from "@/components/Home/LegacySection";
import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laxminarayan | Timeless Jewelry Elegance",
  description: "Handcrafted luxury jewelry and precision manufacturing.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <CollectionsPreview />
      <ManufacturingPreview />
      <LegacySection />
    </>
  );
}


