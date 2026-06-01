import Banner from "@/components/Banner";
import FeaturedCard from "@/components/FeaturedCard";
import StatsSection from "@/components/StatsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedCard></FeaturedCard>
      <StatsSection></StatsSection>
    </div>
  );
}
