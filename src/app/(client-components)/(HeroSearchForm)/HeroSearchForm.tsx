"use client";

import React, { FC } from "react";
import RentalCarSearchForm from "./(car-search-form)/RentalCarSearchForm";

export interface HeroSearchFormProps {
  className?: string;
}

const HeroSearchForm: FC<HeroSearchFormProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`nc-HeroSearchForm w-full max-w-6xl py-5 lg:py-0 ${className}`}
    >
      <div className="ml-2 sm:ml-6 md:ml-12 mb-4">
        <div className="flex items-center text-sm lg:text-base font-medium">
          <span className="block w-2.5 h-2.5 rounded-full bg-neutral-800 dark:bg-neutral-100 mr-2" />
          <span>Find Your Perfect Rental Car</span>
        </div>
      </div>
      <RentalCarSearchForm />
    </div>
  );
};

export default HeroSearchForm;
