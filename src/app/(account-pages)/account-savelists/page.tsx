"use client";

import CarCard from "@/components/CarCard";
import { DEMO_CAR_LISTINGS } from "@/data/listings";
import React from "react";
import ButtonSecondary from "@/shared/ButtonSecondary";

const AccountSavelists = () => {
  const renderSection1 = () => {
    return (
      <div className="space-y-6 sm:space-y-8">
        <div>
          <h2 className="text-3xl font-semibold">Saved Cars</h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            Your favorite rental cars saved for later
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

        <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {DEMO_CAR_LISTINGS.filter((_, i) => i < 8).map((car) => (
            <CarCard key={car.id} data={car} />
          ))}
        </div>
        <div className="flex mt-11 justify-center items-center">
          <ButtonSecondary>Show me more</ButtonSecondary>
        </div>
      </div>
    );
  };

  return renderSection1();
};

export default AccountSavelists;
