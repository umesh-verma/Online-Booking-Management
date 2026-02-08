import React, { FC, ReactNode } from "react";
import { DEMO_CAR_LISTINGS } from "@/data/listings";
import { CarDataType } from "@/data/types";
import ButtonPrimary from "@/shared/ButtonPrimary";
import HeaderFilter from "./HeaderFilter";
import CarCard from "./CarCard";

// Car demo data
const DEMO_DATA: CarDataType[] = DEMO_CAR_LISTINGS.filter((_, i) => i < 8);

export interface SectionGridFeaturePlacesProps {
  carListings?: CarDataType[];
  gridClass?: string;
  heading?: ReactNode;
  subHeading?: ReactNode;
  headingIsCenter?: boolean;
  tabs?: string[];
  cardType?: "card1" | "card2";
}

const SectionGridFeaturePlaces: FC<SectionGridFeaturePlacesProps> = ({
  carListings = DEMO_DATA,
  gridClass = "",
  heading = "Featured cars for rent",
  subHeading = "Popular rental cars that CG Rental recommends for you",
  headingIsCenter,
  tabs = ["All", "SUV", "Sedan", "Sports"],
  cardType = "card2",
}) => {
  const renderCard = (car: CarDataType) => {
    return <CarCard key={car.id} data={car} />;
  };

  return (
    <div className="nc-SectionGridFeaturePlaces relative">
      <HeaderFilter
        tabActive={"All"}
        subHeading={subHeading}
        tabs={tabs}
        heading={heading}
      />
      <div
        className={`grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${gridClass}`}
      >
        {carListings.map((car) => renderCard(car))}
      </div>
      <div className="flex mt-16 justify-center items-center">
        <ButtonPrimary loading>Show me more</ButtonPrimary>
      </div>
    </div>
  );
};

export default SectionGridFeaturePlaces;
