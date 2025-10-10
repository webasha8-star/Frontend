import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/DashboardPage/HeroSection";
import AboutSection from "../components/DashboardPage/AboutSection";
import MarqueeSection from "../components/DashboardPage/MarqueeSection";
import GameBgSection from "../components/DashboardPage/GameBgSection";
import GameSection from "../components/DashboardPage/GameSection";
import ShopSection from "../components/DashboardPage/Learn_Labs";
import TestimonialSection from "../components/DashboardPage/TestimonialSection";
import TeamSection from "../components/DashboardPage/TeamSection";
import NewsSection from "../components/DashboardPage/NewsSection";
import CtaSection from "../components/DashboardPage/CtaSection";
import BrandSection from "../components/DashboardPage/BrandSection";
import NewsletterSection from "../components/DashboardPage/NewsletterSection";

const DashboardPage = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <MarqueeSection />
      <GameBgSection />
      <GameSection />
      <ShopSection />
      {/* <TestimonialSection /> */}
      <TeamSection />
      <NewsSection />
      <CtaSection />
      <BrandSection />
      <NewsletterSection />
    </Layout>
  );
};

export default DashboardPage;
