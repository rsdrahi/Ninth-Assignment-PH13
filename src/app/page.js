import Banner from "@/components/Banner";
import EmergencyContact from "@/components/EmergencyContact";
import FeaturedCard from "@/components/FeaturedCard";
import StatsSection from "@/components/StatsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <StatsSection></StatsSection>
      <FeaturedCard></FeaturedCard>
      <EmergencyContact></EmergencyContact>
    </div>
  );
}
