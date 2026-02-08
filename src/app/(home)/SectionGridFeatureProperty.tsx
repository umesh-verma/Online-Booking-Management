import React, { FC, ReactNode } from "react";
import { DEMO_CAR_LISTINGS } from "@/data/listings";
import { CarDataType } from "@/data/types";
import ButtonPrimary from "@/shared/ButtonPrimary";
import CarCardH from "@/components/CarCardH";
import HeaderFilter from "@/components/HeaderFilter";

// Car demo data
const DEMO_DATA: CarDataType[] = DEMO_CAR_LISTINGS.filter((_, i) => i < 8);

export interface SectionGridFeaturePropertyProps {
  carListings?: CarDataType[];
  gridClass?: string;
  heading?: ReactNode;
  subHeading?: ReactNode;
  headingIsCenter?: boolean;
  tabs?: string[];
}

const SectionGridFeatureProperty: FC<SectionGridFeaturePropertyProps> = ({
  carListings = DEMO_DATA,
  gridClass = "",
  heading = "Featured cars for rent",
  subHeading = "Popular rental cars that CG Rental recommends for you",
  headingIsCenter,
  tabs = ["All", "SUV", "Sedan", "Sports"],
}) => {
  const renderCard = (car: CarDataType, index: number) => {
    return <CarCardH key={index} className="h-full" data={car} />;
  };

  return (
    <div className="nc-SectionGridFeatureProperty relative">
      <HeaderFilter
        tabActive={"All"}
        subHeading={subHeading}
        tabs={tabs}
        heading={heading}
      />
      <div
        className={`grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 ${gridClass}`}
      >
        {carListings.map(renderCard)}
      </div>
      <div className="flex mt-16 justify-center items-center">
        <ButtonPrimary loading>Show me more</ButtonPrimary>
      </div>
    </div>
  );
};

export default SectionGridFeatureProperty;
