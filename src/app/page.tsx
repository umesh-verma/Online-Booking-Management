import React from "react";
import SectionHero from "@/app/(server-components)/SectionHero";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import { TaxonomyType } from "@/data/types";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionOurFeatures from "@/components/SectionOurFeatures";
import BackgroundSection from "@/components/BackgroundSection";
import SectionHowItWork from "@/components/SectionHowItWork";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import SectionBecomeAnAuthor from "@/components/SectionBecomeAnAuthor";
import SectionClientSay from "@/components/SectionClientSay";

const CAR_LOCATIONS: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-car",
    name: "New York",
    taxonomy: "category",
    count: 1232,
    thumbnail:
      "https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "2",
    href: "/listing-car",
    name: "Los Angeles",
    taxonomy: "category",
    count: 982,
    thumbnail:
      "https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listing-car",
    name: "Miami",
    taxonomy: "category",
    count: 756,
    thumbnail:
      "https://images.pexels.com/photos/421655/pexels-photo-421655.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/listing-car",
    name: "San Francisco",
    taxonomy: "category",
    count: 654,
    thumbnail:
      "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "/listing-car",
    name: "Las Vegas",
    taxonomy: "category",
    count: 543,
    thumbnail:
      "https://images.pexels.com/photos/415999/pexels-photo-415999.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

const CAR_TYPES: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-car",
    name: "Economy",
    taxonomy: "category",
    count: 432,
    thumbnail:
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "2",
    href: "/listing-car",
    name: "SUV",
    taxonomy: "category",
    count: 321,
    thumbnail:
      "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listing-car",
    name: "Luxury",
    taxonomy: "category",
    count: 189,
    thumbnail:
      "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/listing-car",
    name: "Sports",
    taxonomy: "category",
    count: 145,
    thumbnail:
      "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "/listing-car",
    name: "Electric",
    taxonomy: "category",
    count: 98,
    thumbnail:
      "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

function PageHome() {
  return (
    <main className="nc-PageHome relative overflow-hidden">
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* HERO SECTION */}
        <SectionHero className="pt-10 lg:pt-16 lg:pb-16" />

        {/* POPULAR LOCATIONS */}
        <SectionSliderNewCategories
          categories={CAR_LOCATIONS}
          heading="Popular Rental Locations"
          subHeading="Find cars available in your favorite cities"
        />

        {/* OUR FEATURES */}
        <SectionOurFeatures />

        {/* HOW IT WORKS */}
        <SectionHowItWork />

        {/* CAR TYPES */}
        <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black/20" />
          <SectionSliderNewCategories
            categories={CAR_TYPES}
            categoryCardType="card4"
            itemPerRow={4}
            heading="Browse by Vehicle Type"
            subHeading="From economy to luxury, find the perfect ride for your journey"
            sliderStyle="style2"
          />
        </div>

        {/* NEWSLETTER */}
        <SectionSubscribe2 />

        {/* BECOME A HOST */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionBecomeAnAuthor />
        </div>

        {/* TESTIMONIALS */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div>
      </div>
    </main>
  );
}

export default PageHome;
