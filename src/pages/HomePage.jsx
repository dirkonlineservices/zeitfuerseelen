import React from 'react';
import Hero from '../components/Hero';
import Philosophy from '../components/Philosophy';
import RegressionshypnoseSection from '../components/RegressionshypnoseSection';
import AuthorTeaser from '../components/AuthorTeaser';
import PricingOffers from '../components/PricingOffers';
import CTASection from '../components/CTASection';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <RegressionshypnoseSection />
      <AuthorTeaser />
      <PricingOffers />
      <CTASection />
      <Contact />
    </>
  );
}
